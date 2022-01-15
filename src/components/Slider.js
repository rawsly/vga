import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Slider = ({ fullPage, items, showNavigation, duration }) => {
  const [index, setIndex] = useState(0);

  const handleAnimationEnd = () => {
    setIndex(prevIndex => (prevIndex + 1) % items.length);
  }

  return (
    <div className={`${fullPage ? 'w-screen h-screen' : 'w-full h-full'} flex bg-primary`}>
      <Image h />
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

`;
export default Slider;