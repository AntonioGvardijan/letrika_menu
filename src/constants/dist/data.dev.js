"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var beer = [{
  title: 'Ožujsko 0,20L',
  price: '2,50€',
  tags: 'HR | Točeno'
}, {
  title: 'Ožujsko 0,30L',
  price: '3,00€',
  tags: 'HR | Točeno'
}, {
  title: 'Ožujsko 0,50L',
  price: '4,00€',
  tags: 'HR | Točeno'
}, {
  title: 'Ožujsko 0,50L',
  price: '4,00€',
  tags: 'HR | Boca'
}, {
  title: 'Ožujsko Limun / Grejp 0,50l',
  price: '4,00€',
  tags: 'HR | Boca'
}, {
  title: 'Ožujsko Cool 0,50l',
  price: '4,00€',
  tags: 'HR | Boca - bezalkoholno'
}, {
  title: 'Staropramen 0,50l',
  price: '4,00€',
  tags: 'HR | Boca'
}, {
  title: 'Tomislav Tamno 0,50l',
  price: '4,00€',
  tags: 'HR | Boca'
}, {
  title: 'Hidra Limun 0,50l',
  price: '4,00€',
  tags: 'HR | Boca'
}, {
  title: 'Hidra Naranča 0,50l',
  price: '4,00€',
  tags: 'HR | Boca'
}, {
  title: 'Becks 0,33l',
  price: '4,00€',
  tags: 'DE | Boca'
}];
var cocktails = [{
  title: 'Mojito 0,20L',
  price: '7,00€',
  tags: 'bacardi 0,05l | liker od limete 0,03l | mineralna voda 0,12l | smeđi šećer | limeta | menta'
}, {
  title: "Tequila sunrise 0,20L",
  price: '7,00€',
  tags: 'tequila 0,06l | sok od naranče 0,12l | liker granadin 0,02l'
}, {
  title: 'Pina Colada 0,20L',
  price: '7,00€',
  tags: 'bacardi rum 0,06l | liker od kokosa 0,04l | sok od ananasa 0,10l'
}, {
  title: 'Sex on the Beach 0,20L',
  price: '7,00€',
  tags: 'smirnof vodka 0,06l | liker granadin 0,02l | liker breskva 0,02l | sok naranča 0,10l'
}, {
  title: 'Cosmopolitan 0,20L',
  price: '7,00€',
  tags: 'smirnof vodka 0,03l | liker cointreau 0,02l | liker limeta 0,05l | sok brusnica 0,02l | limeta'
}, {
  title: 'Margarita 0,10L',
  price: '7,00€',
  tags: 'tequila 0,06l | liker cointreau 0,02l | liker limeta 0,02l | limeta | sol'
}, {
  title: 'Aperol Spritz 0,15L',
  price: '7,00€',
  tags: 'aperol 0,02l | pjenušac Freixenet 0,03l | mineralna voda 0,10l'
}];
var wines__white = [{
  title: 'Kutjevačka Graševina 1,00L',
  price: '18,00€',
  tags: 'bijelo | boca'
}, {
  title: 'Kutjevačka Graševina 0,10L',
  price: '1,80€',
  tags: 'bijelo | čaša'
}, {
  title: 'Malvazija 1,00L',
  price: '18,00€',
  tags: 'bijelo | boca'
}, {
  title: 'Malvazija 0,10L',
  price: '1,80€',
  tags: 'bijelo | čaša'
}, {
  title: 'Krauthaker Graševina 0,75L',
  price: '24,00€',
  tags: 'bijelo | boca'
}, {
  title: 'Gemišt Kutjevačka Graševina 0,20L',
  price: '3,20€',
  tags: '0,15L vino | 0,05L mineralna voda'
}, {
  title: 'Gemišt Kutjevačka Graševina 0,30L',
  price: '4,20€',
  tags: '0,20L vino | 0,10L mineralna voda'
}, {
  title: 'Gemišt Malvazija 0,20L',
  price: '3,20€',
  tags: '0,15L vino | 0,05L mineralna voda'
}, {
  title: 'Gemišt Malvazija 0,30L',
  price: '4,20€',
  tags: '0,20L vino | 0,10L mineralna voda'
}];
var wines__black = [{
  title: 'Vranac 1,00L',
  price: '18,00€',
  tags: 'crno | boca'
}, {
  title: 'Vranac 0,10L',
  price: '1,80€',
  tags: 'crno | čaša'
}, {
  title: 'Pelješac Plavi 1,00L',
  price: '18,00€',
  tags: 'crno | boca'
}, {
  title: 'Pelješac Plavi 0,10L',
  price: '1,80€',
  tags: 'crno | čaša'
}, {
  title: 'Pinot Crni 0,75L',
  price: '24,00€',
  tags: 'crno | boca'
}, {
  title: 'Dingač Skaramuča 0,75L',
  price: '36,00€',
  tags: 'crno | boca'
}];
var domace_rakije_1 = [{
  title: 'Travarica / Herb Brandy 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Šljivovica / Plum Brandy 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Lozovača / Grape Brandy 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Medica / Honey Brandy 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Višnjevac / Cherry Brandy 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Borovnica / Blueberry Brandy 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Orahovac / Walnut Brandy 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}];
var domace_rakije_2 = [{
  title: 'Đumbir / Ginger Brandy 0,03L',
  price: '3,00€',
  tags: 'HR | čaša'
}, {
  title: 'Pelinkovac 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Stock 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Amaro 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Gin 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Vodka 0,03L',
  price: '2,40€',
  tags: 'HR | čaša'
}, {
  title: 'Viljamovka / Williams Brandy 0,03L',
  price: '3,00€',
  tags: 'HR | čaša'
}];
var strani_alk_1 = [{
  title: 'Jack Daniels 0,03L',
  price: '4,80€',
  tags: 'čaša'
}, {
  title: 'Ballantines 0,03L',
  price: '3,60€',
  tags: 'čaša'
}, {
  title: 'Chivas 0,03L',
  price: '5,40€',
  tags: 'čaša'
}, {
  title: 'Malibu 0,03L',
  price: '3,60€',
  tags: 'čaša'
}, {
  title: 'Tequila 0,03L',
  price: '3,60€',
  tags: 'čaša'
}];
var strani_alk_2 = [{
  title: 'Vodka Smirnoff 0,03L',
  price: '3,60€',
  tags: 'čaša'
}, {
  title: 'Jegermaister 0,03L',
  price: '3,80€',
  tags: 'čaša'
}, {
  title: 'Hennesy 0,03L',
  price: '6,00€',
  tags: 'čaša'
}, {
  title: 'Southern Comfort 0,03L',
  price: '3,80€',
  tags: 'čaša'
}, {
  title: 'Johnnie Walker Red Label 0,03L',
  price: '3,80€',
  tags: 'čaša'
}];
var bezalk_1 = [{
  title: 'Coca-Cola 0,25L',
  price: '3,40€',
  tags: 'boca'
}, {
  title: 'Coca-Cola Zero Limun 0,25L',
  price: '3,40€',
  tags: 'boca'
}, {
  title: 'Fanta 0,25L',
  price: '3,40€',
  tags: 'boca'
}, {
  title: 'Sprite 0,25L',
  price: '3,40€',
  tags: 'boca'
}, {
  title: 'Cocta 0,275L',
  price: '3,40€',
  tags: 'boca'
}, {
  title: 'Schweps 0,25L',
  price: '3,40€',
  tags: 'Tangerina / Bitter Lemon / Tonic | boca'
}, {
  title: 'Cappy 0,20L',
  price: '3,40€',
  tags: 'Jabuka (Apple) / Naranča (Orange) / Gusti (Mix) / Crni ribiz (Blackcurrants) | boca'
}, {
  title: 'Ledeni Čaj / Ice Tea 0,25L',
  price: '3,40€',
  tags: 'boca'
}, {
  title: 'Bubble Tea 0,36L',
  price: '6,00€',
  tags: 'boca'
}];
var bezalk_2 = [{
  title: 'Orangina 0,25L',
  price: '3,80€',
  tags: 'boca'
}, {
  title: 'Red Bull 0,25L',
  price: '4,80€',
  tags: 'limenka'
}, {
  title: 'Cedevita 0,30L',
  price: '3,00€',
  tags: 'vrečica'
}, {
  title: 'Romerquelle Mineralna voda / Carbonated Water 0,33L',
  price: '2,80€',
  tags: 'boca'
}, {
  title: 'Romerquelle Limunska trava / Carbonated Water Lemon Grass 0,33L',
  price: '2,80€',
  tags: 'boca'
}, {
  title: 'Romerquelle Prirodna voda / Natural Water 0,33L',
  price: '2,80€',
  tags: 'boca'
}, {
  title: 'Jamnica Mineralna voda / Mineral Water 1,00L',
  price: '5,50€',
  tags: 'boca'
}];
var topli_napitci_1 = [{
  title: 'Espresso kava / Coffee',
  price: '1,80€',
  tags: 'šalica'
}, {
  title: 'Kava s mlijekom mala / Small Coffee with milk',
  price: '1,80€',
  tags: 'šalica'
}, {
  title: 'Kava s mlijekom velika / Big Coffee with milk',
  price: '2,00€',
  tags: 'šalica'
}, {
  title: 'Cappuccino',
  price: '2,40€',
  tags: 'šalica'
}, {
  title: 'Bijela kava / White Coffee',
  price: '2,40€',
  tags: 'šalica'
}, {
  title: 'Kava sa šlagom / Coffee with White Cream',
  price: '2,60€',
  tags: 'šalica'
}, {
  title: 'Espresso kava bezkofeinska / Decaf. Coffee',
  price: '2,20€',
  tags: 'šalica'
}, {
  title: 'Kava s mlijekom bezkofeinska / Decaf. Coffee with milk',
  price: '2,40€',
  tags: 'šalica'
}];
var topli_napitci_2 = [{
  title: 'Cappuccino bezkofeinski / Decaf. Cappuccino',
  price: '2,80€',
  tags: 'šalica'
}, {
  title: 'Bijela kava bezkofeinska / Decaf. White Coffee',
  price: '2,80€',
  tags: 'šalica'
}, {
  title: 'Instant Cappuccino',
  price: '2,80€',
  tags: 'Classic / Vanilija (Vanilla) / Čokolada (Chocolate) / Irish / Kokos (Coconut) | šalica'
}, {
  title: 'Kakao / Cocoa',
  price: '2,80€',
  tags: 'šalica'
}, {
  title: 'Čaj s limuno / Tea with lemon',
  price: '1,80€',
  tags: 'šalica'
}, {
  title: 'Med / Honey',
  price: '0,40€',
  tags: 'pakiranje'
}, {
  title: 'Mlijeko / Milk 0,20L',
  price: '1,40€',
  tags: 'šalica'
}];
var smoothie = [{
  title: 'Smoothie 0,30L',
  price: '6,00€',
  tags: 'Čaša'
}];
var _default = {
  beer: beer,
  cocktails: cocktails,
  wines__black: wines__black,
  wines__white: wines__white,
  domace_rakije_1: domace_rakije_1,
  domace_rakije_2: domace_rakije_2,
  strani_alk_1: strani_alk_1,
  strani_alk_2: strani_alk_2,
  bezalk_1: bezalk_1,
  bezalk_2: bezalk_2,
  topli_napitci_1: topli_napitci_1,
  topli_napitci_2: topli_napitci_2,
  smoothie: smoothie
};
exports["default"] = _default;
//# sourceMappingURL=data.dev.js.map
