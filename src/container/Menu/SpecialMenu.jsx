import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Quench Your Thirst with Beach-Inspired Elixirs" />
      <h1 className="headtext__cormorant">Cijenik pića / Price list</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Topli Napitci / Warm Drinks</p>
        <div className="app__specialMenu_menu_items" Id="kava">
          {data.topli_napitci_1.map((topli_napitci_1, index) => (
            <MenuItem key={topli_napitci_1.title + index} title={topli_napitci_1.title} price={topli_napitci_1.price} tags={topli_napitci_1.tags} />
          ))}
          {data.topli_napitci_2.map((topli_napitci_2, index) => (
            <MenuItem key={topli_napitci_2.title + index} title={topli_napitci_2.title} price={topli_napitci_2.price} tags={topli_napitci_2.tags} />
          ))}
        </div>
      </div>


    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Bezalkoholna Pića / Soft Drinks</p>
        <div className="app__specialMenu_menu_items" Id="sok">
          {data.bezalk_1.map((bezalk_1, index) => (
            <MenuItem key={bezalk_1.title + index} title={bezalk_1.title} price={bezalk_1.price} tags={bezalk_1.tags} />
          ))}
          {data.bezalk_2.map((bezalk_2, index) => (
            <MenuItem key={bezalk_2.title + index} title={bezalk_2.title} price={bezalk_2.price} tags={bezalk_2.tags} />
          ))}
        </div>
      </div>

    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pivo / Beer</p>
        <div className="app__specialMenu_menu_items" Id="piva">
          {data.beer.map((beer, index) => (
            <MenuItem key={beer.title + index} title={beer.title} price={beer.price} tags={beer.tags} />
          ))}
        </div>
      </div>


      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Kokteli / Coctails</p>
        <div className="app__specialMenu_menu_items" Id="koktel">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Bijelo Vino / White wine</p>
        <div className="app__specialMenu_menu_items" Id="vino">
          {data.wines__white.map((wines__white, index) => (
            <MenuItem key={wines__white.title + index} title={wines__white.title} price={wines__white.price} tags={wines__white.tags} />
          ))}
        </div>
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
        <div className="app__specialMenu_menu_items" Id="zestoko">
          {data.domace_rakije_1.map((domace_rakije_1, index) => (
            <MenuItem key={domace_rakije_1.title + index} title={domace_rakije_1.title} price={domace_rakije_1.price} tags={domace_rakije_1.tags} />
          ))}
          {data.domace_rakije_2.map((domace_rakije_2, index) => (
            <MenuItem key={domace_rakije_2.title + index} title={domace_rakije_2.title} price={domace_rakije_2.price} tags={domace_rakije_2.tags} />
          ))}
        </div>
      </div>

    
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Strana Alkoholna Pića / Imported Strong Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.strani_alk_1.map((strani_alk_1, index) => (
            <MenuItem key={strani_alk_1.title + index} title={strani_alk_1.title} price={strani_alk_1.price} tags={strani_alk_1.tags} />
          ))}
          {data.strani_alk_2.map((strani_alk_2, index) => (
            <MenuItem key={strani_alk_2.title + index} title={strani_alk_2.title} price={strani_alk_2.price} tags={strani_alk_2.tags} />
          ))}
        </div>
      </div>
      </div>

      <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Smoothie</p>
        <div className="app__specialMenu_menu_items">
          {data.smoothie.map((smoothie, index) => (
            <MenuItem key={smoothie.title + index} title={smoothie.title} price={smoothie.price} tags={smoothie.tags} />
          ))}
        </div>
      </div>

      

      
    </div>
    
  </div>
);

export default SpecialMenu;