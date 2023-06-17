import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Indulge in Tropical Bliss by the Shore" />
      <h1 className="app__header-h1">Beach Bar Letrika</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Dobrodošli u našu plažnu oazu u 
      Pakoštanima. Uživajte u savršenom spoju sunca, mora i opuštenosti u našem beach baru. 
      Osjetite kako se vaše brige tope uz zvukove valova.  </p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.menu} alt="header_img" />
    </div>
  </div>
);

export default Header;