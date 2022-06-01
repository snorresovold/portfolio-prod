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
    text: ['Hallo!', "Eg er Snorre Søvold.", 'Eg er '],
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
    phone: "+47 457 60 560",
    address: "Skjold, Rogaland, Norge"
    },
  termin1: {
    prosjekter: [
      {
        id: 0,
        title: "Chatbrett med django",
        content: "Det første prosjektet mitt på Haugaland vgs var et chatbrett der eg brukte Django som backend"
      },
      {
        id: 1,
        title: "Video redigering",
        content: "Det andre prosjektet mitt var å lære meg superhelt effekter og bli bedre på videoredigering i premiere pro",
      },
      {
        id: 2,
        title: "Drone og bildegjenkjenning",
        content: "Det tredje prosjektet mitt var å få ein liten tello drone til å gjenkjenne piler og følge de ved bruk av OpenCV2 som bildegjenkjennings rammeverk"
      }
    ]
  },
  termin2: {
    prosjekter: [
      {
        id: 3,
        title: "Pokemon klone i Python",
        content: "Det første prosjektet eg lagte i andre termin var ein Pokemon klone i Python hvor spilleren beveger seg på ein grid som i pokemon men combat skjer i konsollen"
      },
      {
        id: 4,
        title: "CyberSikkerhet med Tryhackme",
        content: "Det andre prosjektet mitt var å lære meg cybersikkerhet og hacking, eg lerte meg kossen man tenker som ein hacker og kan forsvare seg mot angrep",
      },
      {
        id: 5,
        title: "Utplassering hos Bouvet",
        content: "I den tredje oppgavå mi så jobbet eg hos Bouvet for å finne ut kossen det er å faktisk jobbe hos ein IT-bedrift"
      }
    ]
  },
};
