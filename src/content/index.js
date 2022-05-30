export default {
  nav: {
    logo: 'SS',
    links: [
      { text: 'Prosjekter', to: 'prosjekter' },
      { text: 'Kontakt', to: 'kontakt' },
    ],
  },
  header: {
    img:
      '/assets/snorre.png',
    text: ['Hallo!', "Ege er Snorre Søvold.", 'Eg er '],
    typical: [
      'IT elev. 💻',
      2000,
      'Youtuber. 📹',
      2000,
      'Koder. ',
      2000
    ],
    btnText: 'Hva kan jeg?',
  },

  stack: {
    title: 'Teknologioer eg kan',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/django.png',
        alt: 'Django',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'React',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/python.png',
        alt: 'Python',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/js.png',
        alt: 'Javascript',
      },
    ],
    desc: `De programmerings språkene eg kan best er Python og Javascript. Selv om eg har erfaring og er open til å lære andre språk som for eksempel Golang. Den tech stacken eg bruker mest for web prosjekter er Django for backend på grunn av rask og effektiv REST-API og Javascript med React til frontend fordi det er raskt og eg liker React bedre enn andre Frontend rammeverk.`,
  },
  contact: {
    title: 'Kontakt meg',
    email: "snorresovold@gmail.com",
    phone: "47+ 457 60 560",
    address: "Skjold, Rogaland, Norge"
    },
  termin1: {
    prosjekter: [
      {
        title: "Chatbrett med django",
        content: "Det første prosjektet mitt på haugaland vgs var et chatbrett der eg brukte Django som backend"
      },
      {
        title: "Video redigering",
        content: "Det andre prosjektet mitt var å lære meg superhelt effekter og bli bedre på videoredigering i premiere pro",
      },
      {
        title: "Drone og bildegjenkjenning",
        content: "Det tredje prosjektet mitt var å få ein liten tello drone til å gjenkjenne piler og følge de ved bruk av OpenCV2 som bildegjenkjennings rammeverk"
      }
    ]
  }
};
