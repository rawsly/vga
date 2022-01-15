import { LogoInstagram, LogoFacebook, LogoTwitter } from 'react-ionicons';
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/outline';
import Slider from '../components/Slider';

const Icon = ({ icon: IconComponent, ...rest }) => <IconComponent color="#fff" height="1rem" width="1rem" {...rest} />

const ContactItem = ({ icon: IconComponent, content, ...rest }) => (
  <div className="flex flex-row items-center h-full p-4" {...rest}>
    <Icon icon={IconComponent} />
    <span className="m-1">{content}</span>
  </div>
);

const MenuItem = ({ content, ...rest }) => (
  <div className="flex flex-row items-center h-full p-4" {...rest}>
    {content}
  </div>
)

const sliderItems = [
  {
    key: '1',
    image: 'https://peacefulqode.com/themes/architeck/rev-slider/assets/bg-3343.jpg',
    header: 'We Are Best Builders',
    subheader: 'It is a long established fact that a reader will be distracted...',
    action: {
      text: 'Get In Touch',
      to: '/about'
    },
  },
  {
    key: '2',
    image: 'https://peacefulqode.com/themes/architeck/rev-slider/assets/bg-3343.jpg',
    header: 'Slider 2',
    subheader: 'It is a long established fact that a reader will be distracted...',
    action: {
      text: 'Slider 2',
      to: '/test'
    },
  },
  {
    key: '3',
    image: 'https://peacefulqode.com/themes/architeck/rev-slider/assets/bg-3343.jpg',
    header: 'Slider 3 Title',
    subheader: 'test reader will be distracted...',
    action: {
      text: 'İletişim',
      to: '/test-2'
    },
  },
];

const Home = () => {
  return (
    <div className="w-full">
      <div id="main-menu" className="flex h-32 bg-white shadow-md">
        <div id="logo" className="flex justify-center items-center w-72 h-full bg-primary text-white font-semibold text-5xl">VRG</div>
        <div className="flex flex-col flex-1">
          <div id="menu-top" className="flex flex-row h-12 w-full justify-between items-center bg-secondary text-white p-4">
            <div id="menu-top-social" className="flex flex-row items-center h-full p-4">
              <Icon icon={LogoFacebook} className="m-4" />
              <Icon icon={LogoInstagram} className="m-4" />
              <Icon icon={LogoTwitter} className="m-4" />
            </div>
            <div id="menu-top-contact" className="flex flex-row items-center h-full p-4">
              <ContactItem icon={PhoneIcon} content="+90 553 334 43 32" />
              <ContactItem icon={AtSymbolIcon} content="rawsly@gmail.com" />
            </div>
          </div>
          <div id="menu-bottom" className="flex flex-row flex-1 justify-end items-center bg-white text-primary px-8">
            <MenuItem content="Kurumsal" />
            <MenuItem content="Ürünlerimiz" />
            <MenuItem content="Endüstriyel Çözümler" />
            <MenuItem content="Saha Ölçüm ve Raporlama" />
            <MenuItem content="İletişim" />
          </div>
        </div>
      </div>

      <div id="slider" className="">
        <Slider duration={5} fullPage showNavigation items={sliderItems}  />
      </div>
    </div>
  )
}

export default Home;