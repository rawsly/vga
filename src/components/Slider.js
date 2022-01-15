import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const FADE_IN_ANIMATION = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const NavigationButton = ({ type, onClick }) => (
  <button onClick={onClick} className={`flex items-center justify-center w-12 h-12 rounded-full bg-white translate-y-1/2 z-10 absolute top-1/2 ${type === 'prev' ? 'left-6' : 'right-6'}`}>
    {type === 'prev' ? <ChevronLeftIcon className="w-6" /> : <ChevronRightIcon className="w-6" />}
  </button>
);

const Content = ({ item, duration }) => {
  const { contentPosition, header, subheader, action } = item;
  return (
    <ContentContainer duration={duration} className={`flex flex-col shrink-0 absolute top-1/2 trasnlate-y-1/2 ${contentPosition === 'left' ? 'text-left left-48 items-start' : 'text-right right-48 items-end'}`}>
      <h1 className="text-6xl font-bold drop-shadow text-secondary">{header}</h1>
      <h2 className="text-gray-900 mt-4">{subheader}</h2>
      <Link to={action.to} className="flex justify-end bg-primary rounded py-4 px-12 w-max text-white shadow mt-4">{action.text}</Link>
    </ContentContainer>
  );
}

// TODO: Preload next image
const Slider = ({ fullPage, items, showNavigation, duration }) => {
  const imageRef = useRef();
  const [index, setIndex] = useState(0);

  const handleAnimationIteration = () => {
    setIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const goPrev = () => {
    setIndex(prevIndex => prevIndex === 0 ? items.length - 1 : prevIndex - 1)
  };
  const goNext = () => {
    setIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  console.log(index, items[index]);

  return (
    <div className={`w-full flex bg-white ${fullPage ? 'h-screen' : 'h-full'}`}>
      {showNavigation && <NavigationButton onClick={goPrev} type="prev" />}
      <Image key={items[index].key} ref={imageRef} className="w-full h-full" image={items[index].image} onAnimationIteration={handleAnimationIteration} duration={duration} />
      {showNavigation && <NavigationButton onClick={goNext} type="next" />}
      <Content key={`content_${items[index].key}`} item={items[index]} duration={duration} />
    </div>
  )
};

Slider.propTypes = {
  fullPage: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  showNavigation: PropTypes.bool,
  duration: PropTypes.number,
};

Slider.defaultProps = {
  fullPage: false,
  items: [],
  showNavigation: false,
  duration: 0
};

const Image = styled.div`
  background: ${props => `url(${props.image})`};
  animation: ${props => css`${FADE_IN_ANIMATION} ${props.duration}s linear infinite`};
`;

const ContentContainer = styled.div`
  animation: ${props => css`${FADE_IN_ANIMATION} ${props.duration}s linear infinite`};
`;

export default Slider;