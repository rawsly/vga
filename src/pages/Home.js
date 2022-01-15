import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/outline';
import { Link, NavLink } from 'react-router-dom';
import Slider from '../components/Slider';

const Icon = ({ icon: IconComponent, ...rest }) => <IconComponent color="#fff" height="1rem" width="1rem" {...rest} />

const ContactItem = ({ icon: IconComponent, content, ...rest }) => (
  <div className="flex flex-row items-center h-full p-4" {...rest}>
    <Icon icon={IconComponent} />
    <span className="m-1">{content}</span>
  </div>
);

const MenuItem = ({ to, content, ...rest }) => (
  <NavLink to={to} className={({ isActive }) => `flex flex-row items-center h-full p-4 ${isActive ? 'text-primary' : 'text-gray-900'}`} {...rest}>
    {content}
  </NavLink>
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
    contentPosition: 'right',
  },
  {
    key: '2',
    image: 'https://peacefulqode.com/themes/architeck/rev-slider/assets/bg-333.jpg',
    header: 'Slider 2',
    subheader: 'It is a long established fact that a reader will be distracted...',
    action: {
      text: 'Slider 2',
      to: '/test'
    },
    contentPosition: 'left',
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
    contentPosition: 'left',
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
              {/* Social media icons */}
            </div>
            <div id="menu-top-contact" className="flex flex-row items-center h-full p-4">
              <ContactItem icon={PhoneIcon} content="+90 553 334 43 32" />
              <ContactItem icon={AtSymbolIcon} content="rawsly@gmail.com" />
            </div>
          </div>
          <div id="menu-bottom" className="flex flex-row flex-1 justify-end items-center bg-white text-primary px-8">
            <MenuItem content="Anasayfa" to="/" />
            <MenuItem content="Kurumsal" to="/kurumsal" />
            <MenuItem content="Ürünlerimiz" to="/urunlerimiz" />
            <MenuItem content="Endüstriyel Çözümler" to="/endustriyel-cozumler" />
            <MenuItem content="Saha Ölçüm ve Raporlama" to="/saha-olcum-raporlama" />
            <MenuItem content="İletişim" to="/iletisim" />
          </div>
        </div>
      </div>

      <section id="slider" className="bg-white">
        <Slider duration={5} fullPage showNavigation items={sliderItems} />
      </section>

      <div className="h-20" />

      <section id="about-us" className="flex flex-row bg-white relative w-container mx-auto">
        <div className="flex flex-col flex-1">
          <h1 className="text-secondary text-5xl">VRG Olarak Ne Yapıyoruz?</h1>
          <h2 className="text-gray-300 opacity-20 font-bold text-6xl absolute top-4 left-0 uppercase">Hakkımızda</h2>
          <div className="mt-6">
            <p className="text-gray-900">
              There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don’t look even slightly believable.
            </p>
            <ul className="my-4 list-inside p-0 list-none">
              <li>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-1">
        </div>
      </section>
    </div>
  )
}

export default Home;