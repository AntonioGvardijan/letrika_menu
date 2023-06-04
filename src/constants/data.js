
const beer = [
  {
    title: 'Ožujsko 0,20L',
    price: '1,40€ / 10,55kn',
    tags: 'HR | Točeno',
  },
  {
    title: 'Ožujsko 0,30L',
    price: '1,90€ / 14,32kn',
    tags: 'HR | Točeno',
  },
  {
    title: 'Ožujsko 0,50L',
    price: '2,90€ / 21,85kn',
    tags: 'HR | Točeno',
  },
  {
    title: 'Ožujsko 0,50L',
    price: '2,90€ / 21,85kn',
    tags: 'HR | Boca',
  },
  {
    title: 'Ožujsko Limun / Grejp 0,50l',
    price: '2,90€ / 21,85kn',
    tags: 'HR | Boca',
  },
  {
    title: 'Ožujsko Cool 0,50l',
    price: '2,90€ / 21,85kn',
    tags: 'HR | Boca - bezalkoholno',
  },
  {
    title: 'Staropramen 0,50l',
    price: '2,90€ / 21,85kn',
    tags: 'HR | Boca',
  },
  {
    title: 'Tomislav Tamno 0,50l',
    price: '2,90€ / 21,85kn',
    tags: 'HR | Boca',
  },
  {
    title: 'Becks 0,33l',
    price: '2,90€ / 21,85kn',
    tags: 'DE | Boca',
  },
];


const cocktails = [
  {
    title: 'Mojito 0,20L',
    price: '6,00€ / 45,21kn',
    tags: 'bacardi 0,05l | liker od limete 0,03l | mineralna voda 0,12l | smeđi šećer | limeta | menta',
  },
  {
    title: "Tequila sunrise 0,20L",
    price: '6,00€ / 45,21kn',
    tags: 'tequila 0,06l | sok od naranče 0,12l | liker granadin 0,02l',
  },
  {
    title: 'Pina Colada 0,20L',
    price: '6,00€ / 45,21kn',
    tags: 'bacardi rum 0,06l | liker od kokosa 0,04l | sok od ananasa 0,10l',
  },
  {
    title: 'Sex on the Beach 0,20L',
    price: '6,00€ / 45,21kn',
    tags: 'smirnof vodka 0,06l | liker granadin 0,02l | liker breskva 0,02l | sok naranča 0,10l',
  },
  {
    title: 'Margarita 0,10L',
    price: '6,00€ / 45,21kn',
    tags: 'tequila 0,06l | liker cointreau 0,02l | liker limeta 0,02l | limeta | sol',
  },
  {
    title: 'Aperol Spritz 0,15L',
    price: '6,00€ / 45,21kn',
    tags: 'aperol 0,02l | pjenušac Freixenet 0,03l | mineralna voda 0,10l',
  },
];


const wines__white = [
  {
    title: 'Kutjevačka Graševina 1,00L',
    price: '13,50€ / 101,72kn',
    tags: 'bijelo | boca',
  },
  {
    title: 'Kutjevačka Graševina 0,10L',
    price: '1,35€ / 10,17kn',
    tags: 'bijelo | čaša',
  },
  {
    title: 'Malvazija 1,00L',
    price: '13,50€ / 101,72kn',
    tags: 'bijelo | boca',
  },
  {
    title: 'Malvazija 0,10L',
    price: '1,35€ / 10,17kn',
    tags: 'bijelo | čaša',
  },
  {
    title: 'Krauthaker Graševina 0,75L',
    price: '20,00€ / 150,69kn',
    tags: 'bijelo | boca',
  },
  {
    title: 'Gemišt Kutjevačka Graševina 0,20L',
    price: '2,30€ / 17,33kn',
    tags: '0,15L vino | 0,05L mineralna voda',
  },
  {
    title: 'Gemišt Kutjevačka Graševina 0,30L',
    price: '3,10€ / 23,36kn',
    tags: '0,20L vino | 0,10L mineralna voda',
  },
  {
    title: 'Gemišt Malvazija 0,20L',
    price: '2,30€ / 17,33kn',
    tags: '0,15L vino | 0,05L mineralna voda',
  },
  {
    title: 'Gemišt Malvazija 0,30L',
    price: '3,10€ / 23,36kn',
    tags: '0,20L vino | 0,10L mineralna voda',
  },
]


const wines__black = [
  {
    title: 'Vranac 1,00L',
    price: '13,50€ / 101,72kn',
    tags: 'crno | boca',
  },
  {
    title: 'Vranac 0,10L',
    price: '1,35€ / 10,17kn',
    tags: 'crno | čaša',
  },
  {
    title: 'Pelješac Plavi 1,00L',
    price: '13,50€ / 101,72kn',
    tags: 'crno | boca',
  },
  {
    title: 'Pelješac Plavi 0,10L',
    price: '1,35€ / 10,17kn',
    tags: 'crno | čaša',
  },
  {
    title: 'Pinot Crni 0,75L',
    price: '20,00€ / 150,69kn',
    tags: 'crno | boca',
  },
  {
    title: 'Dingač Skaramuča 0,75L',
    price: '27,00€ / 203,43kn',
    tags: 'crno | boca',
  },
]

const domace_rakije_1 = [
  {
    title: 'Travarica / Herb Brandy 0,03',
    price: '1,80€ / 13,56kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Šljivovica / Plum Brandy 0,03',
    price: '1,80€ / 13,56kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Lozovača / Grape Brandy 0,03',
    price: '1,80€ / 13,56kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Medica / Honey Brandy 0,03',
    price: '1,90€ / 14,32kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Višnjevac / Cherry Brandy 0,03',
    price: '1,90€ / 14,32kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Borovnica / Blueberry Brandy 0,03',
    price: '1,90€ / 14,32kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Orahovac / Walnut Brandy 0,03',
    price: '1,90€ / 14,32kn',
    tags: 'HR | čaša',
  },
]

const domace_rakije_2 = [
  {
    title: 'Đumbir / Ginger Brandy 0,03',
    price: '2,20€ / 16,58kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Pelinkovac 0,03',
    price: '1,80€ / 13,56kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Stock 0,03',
    price: '1,90€ / 14,32kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Amaro 0,03',
    price: '1,80€ / 13,56kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Gin 0,03',
    price: '1,80€ / 13,56kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Vodka 0,03',
    price: '1,80€ / 13,56kn',
    tags: 'HR | čaša',
  },
  {
    title: 'Viljamovka / Williams Brandy 0,03',
    price: '2,50€ / 18,84kn',
    tags: 'HR | čaša',
  },
]

const strani_alk_1 = [
  {
    title: 'Jack Daniels 0,03',
    price: '3,30€ / 24,86kn',
    tags: 'čaša',
  },
  {
    title: 'Ballantines 0,03',
    price: '2,50€ / 18,84kn',
    tags: 'čaša',
  },
  {
    title: 'Chivas 0,03',
    price: '3,70€ / 27,88kn',
    tags: 'čaša',
  },
  {
    title: 'Malibu 0,03',
    price: '2,50€ / 18,84kn',
    tags: 'čaša',
  },
  {
    title: 'Tequila 0,03',
    price: '2,30€ / 17,33kn',
    tags: 'čaša',
  },
]

const strani_alk_2 = [
  {
    title: 'Vodka Smirnoff 0,03',
    price: '2,50€ / 18,84kn',
    tags: 'čaša',
  },
  {
    title: 'Jegermaister 0,03',
    price: '2,50€ / 18,84kn',
    tags: 'čaša',
  },
  {
    title: 'Hennesy 0,03',
    price: '4,00€ / 30,14kn',
    tags: 'čaša',
  },
  {
    title: 'Southern Comfort 0,03',
    price: '2,90€ / 21,85kn',
    tags: 'čaša',
  },
  {
    title: 'Johnnie Walker Red Label 0,03',
    price: '2,40€ / 18,08kn',
    tags: 'čaša',
  },
]

export default { beer, cocktails, wines__black, wines__white, domace_rakije_1, domace_rakije_2, strani_alk_1, strani_alk_2 };
