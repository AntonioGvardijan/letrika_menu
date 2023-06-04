import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pivo / Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.beer.map((beer, index) => (
            <MenuItem key={beer.title + index} title={beer.title} price={beer.price} tags={beer.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Kokteli / Coctails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Bijelo Vino / White wine</p>
        <div className="app__specialMenu_menu_items">
          {data.wines__white.map((wines__white, index) => (
            <MenuItem key={wines__white.title + index} title={wines__white.title} price={wines__white.price} tags={wines__white.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Crno Vino / Black Wine</p>
        <div className="app__specialMenu_menu_items">
          {data.wines__black.map((whine__black, index) => (
            <MenuItem key={whine__black.title + index} title={whine__black.title} price={whine__black.price} tags={whine__black.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Domaća Alkoholna Pića / Local Strong Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.domace_rakije_1.map((domace_rakije_1, index) => (
            <MenuItem key={domace_rakije_1.title + index} title={domace_rakije_1.title} price={domace_rakije_1.price} tags={domace_rakije_1.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Domaća Alkoholna Pića / Local Strong Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.domace_rakije_2.map((domace_rakije_2, index) => (
            <MenuItem key={domace_rakije_2.title + index} title={domace_rakije_2.title} price={domace_rakije_2.price} tags={domace_rakije_2.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;