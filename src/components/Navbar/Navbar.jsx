import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.letrika} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#kava">Warm Drinks</a></li>
        <li className="p__opensans"><a href="#sok">Soft Drinks</a></li>
        <li className="p__opensans"><a href="#piva">Beer</a></li>
        <li className="p__opensans"><a href="#koktel">Coctails</a></li>
        <li className="p__opensans"><a href="#vino">Wine</a></li>
        <li className="p__opensans"><a href="#zestoko">Strong Drinks</a></li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#kava" onClick={() => setToggleMenu(false)}>Warm Drinks</a></li>
              <li><a href="#sok" onClick={() => setToggleMenu(false)}>Soft Drinks</a></li>
              <li><a href="#piva" onClick={() => setToggleMenu(false)}>Beer</a></li>
              <li><a href="#koktel" onClick={() => setToggleMenu(false)}>Coctails</a></li>
              <li><a href="#vino" onClick={() => setToggleMenu(false)}>Wine</a></li>
              <li><a href="#zestoko" onClick={() => setToggleMenu(false)}>Strong Drinks</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;