(this["webpackJsonpbeginners-portfolio"]=this["webpackJsonpbeginners-portfolio"]||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),m=a(4),s=a(14),c=(a(31),a(23)),i=a(25),d={nav:{logo:"SS",links:[{text:"Prosjekter",to:"prosjekter"},{text:"Kontakt",to:"kontakt"}]},header:{img:"/assets/snorre.png",text:["Hallo!","Ege er Snorre S\xf8vold.","Eg er "],typical:["IT elev. \ud83d\udcbb",2e3,"Youtuber. \ud83d\udcf9",2e3,"Koder. ",2e3],btnText:"Hva kan jeg?"},stack:{title:"Teknologioer eg kan",tech:[{img:"/assets/django.png",alt:"Django"},{img:"/logo512.png",alt:"React"},{img:"/assets/python.png",alt:"Python"},{img:"/assets/js.png",alt:"Javascript"}],desc:"De programmerings spr\xe5kene eg kan best er Python og Javascript. Selv om eg har erfaring og er open til \xe5 l\xe6re andre spr\xe5k som for eksempel Golang. Den tech stacken eg bruker mest for web prosjekter er Django for backend p\xe5 grunn av rask og effektiv REST-API og Javascript med React til frontend fordi det er raskt og eg liker React bedre enn andre Frontend rammeverk."},contact:{title:"Kontakt meg",email:"snorresovold@gmail.com",phone:"+47 457 60 560",address:"Skjold, Rogaland, Norge"},termin1:{prosjekter:[{id:0,title:"Chatbrett med django",content:"Det f\xf8rste prosjektet mitt p\xe5 Haugaland vgs var et chatbrett der eg brukte Django som backend"},{id:1,title:"Video redigering",content:"Det andre prosjektet mitt var \xe5 l\xe6re meg superhelt effekter og bli bedre p\xe5 videoredigering i premiere pro"},{id:2,title:"Drone og bildegjenkjenning",content:"Det tredje prosjektet mitt var \xe5 f\xe5 ein liten tello drone til \xe5 gjenkjenne piler og f\xf8lge de ved bruk av OpenCV2 som bildegjenkjennings rammeverk"}]},termin2:{prosjekter:[{id:3,title:"Pokemon klone i Python",content:"Det f\xf8rste prosjektet eg lagte i andre termin var ein Pokemon klone i Python hvor spilleren beveger seg p\xe5 ein grid som i pokemon men combat skjer i konsollen"},{id:4,title:"CyberSikkerhet med Tryhackme",content:"Det andre prosjektet mitt var \xe5 l\xe6re meg cybersikkerhet og hacking, eg lerte meg kossen man tenker som ein hacker og kan forsvare seg mot angrep"},{id:5,title:"Utplassering hos Bouvet",content:"I den tredje oppgav\xe5 mi s\xe5 jobbet eg hos Bouvet for \xe5 finne ut kossen det er \xe5 faktisk jobbe hos ein IT-bedrift"}]}};function g(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){l(!0)}),[]),r.a.createElement("div",{className:"min-h-screen flex items-center justify-center",style:{background:"#091c29"}},r.a.createElement("div",{className:"w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between"},r.a.createElement("div",{className:"w-full md:w-2/5"},r.a.createElement(s.LazyLoadImage,{src:d.header.img,effect:"blur",placeholderSrc:"/logo512.png"})),r.a.createElement("div",{className:"text-white font-dosis text-center md:text-left"},r.a.createElement("h2",{className:"".concat(a?"":"translate-y-10 opacity-0","  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold")},d.header.text[0],r.a.createElement("br",null),d.header.text[1]),r.a.createElement("h1",{className:"".concat(a?"":"translate-y-10 opacity-0","  transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500")},d.header.text[2]," ",r.a.createElement(i.a,{steps:d.header.typical,loop:1/0,className:"inline-block"})),r.a.createElement(c.Link,{to:"stack",smooth:!0},r.a.createElement("button",{className:" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg"},d.header.btnText)))))}function x(){return r.a.createElement("div",{style:{background:"#091c29"}},r.a.createElement("div",{className:"flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis"},r.a.createElement("a",{href:"/"},r.a.createElement("p",{className:"text-3xl font-bold"},d.nav.logo," ",r.a.createElement("span",{className:"w-3 h-3 bg-red-500 inline-block rounded-full"}))),r.a.createElement("div",null,d.nav.links.map((function(e,t){return r.a.createElement("a",{href:e.to,key:t,className:"text-xl mr-4"},e.text)})))))}function f(){return r.a.createElement("div",{className:"min-h-screen flex flex-col items-center justify-center font-dosis",id:"stack"},r.a.createElement("h1",{className:"text-5xl font-bold"},"Teknologier eg kan"),r.a.createElement("div",{className:"flex flex-wrap justify-center mt-10"},d.stack.tech.map((function(e,t){return r.a.createElement("span",{className:"".concat(t%2===0?" animate-float":" animate-refloat"," w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 ")},r.a.createElement(s.LazyLoadImage,{src:e.img,alt:e.alt}))}))),r.a.createElement("p",{className:"w-11/12 md:max-w-xl text-xl text-center mt-10"},d.stack.desc))}var p=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(g,null),r.a.createElement(f,null))};var u=function(){return r.a.createElement(p,null)};a(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(24),b=a(1);var k=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased"},r.a.createElement("h1",{className:" text-5xl md:text-9xl font-bold py-20 text-center md:text-left"},"Kontakt")),r.a.createElement("div",{className:"relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4"},r.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},r.a.createElement("div",{className:"md:ml-4"},r.a.createElement("header",{className:""},r.a.createElement("h1",{className:"text-gray-50 font-semibold text-2xl"},"Send meg ein melding s\xe5 kan me snakka."),r.a.createElement("p",{className:"font-light text-base text-gray-50 mt-2"},"Fyll in formen s\xe5 tar eg kontakt s\xe5 fort eg kan.")),r.a.createElement("div",{className:"icons-container inline-flex flex-col my-20"},r.a.createElement("div",{className:"flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-indigo-500 p-4"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-telephone-fill h-4 w-4 text-indigo-500",viewBox:"0 0 16 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"})),r.a.createElement("p",{className:"text-gray-50 font-light text-sm"},d.contact.phone)),r.a.createElement("div",{className:"flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-indigo-500 p-4"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope-fill h-4 w-4 text-indigo-500",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})),r.a.createElement("p",{className:"text-gray-50 font-light text-sm"},d.contact.email)),r.a.createElement("div",{className:"flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-indigo-500 p-4"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pin-fill h-4 w-4 text-indigo-500",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"})),r.a.createElement("p",{className:"text-gray-50 font-light text-sm"},d.contact.address)))),r.a.createElement("form",{className:"form rounded-lg bg-white p-4 flex flex-col"},r.a.createElement("label",{htmlFor:"name",className:"text-sm text-gray-600 mx-4"}," ","Navn"),r.a.createElement("input",{type:"text",className:"font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-indigo-500",name:"name"}),r.a.createElement("label",{htmlFor:"email",className:"text-sm text-gray-600 mx-4 mt-4"},"Email"),r.a.createElement("input",{type:"text",className:"font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-indigo-500",name:"email"}),r.a.createElement("label",{htmlFor:"message",className:"text-sm text-gray-600 mx-4 mt-4"},"Melding"),r.a.createElement("textarea",{rows:"4",type:"text",className:"font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-indigo-500",name:"message"}),r.a.createElement("button",{type:"submit",className:"bg-indigo-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"},"Send Mail")))))};var v=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(k,null))};var E=function(e){e.id;var t=e.title,a=e.content;return r.a.createElement("div",{class:"max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 m-4 dark:border-gray-700"},r.a.createElement("div",{class:"p-5"},r.a.createElement("a",{href:"#"},r.a.createElement("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},t)),r.a.createElement("p",{class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},a)))};var w=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("p",{className:" text-3xl font-bold text-center mb-4"},"Termin 1"),r.a.createElement("p",{className:" text-xl font-bold text-center mb-4"},"Dette er prosjekter som eg har hatt i f\xf8rste termin p\xe5 Haugaland vgs"),r.a.createElement("div",{className:"flex flex-wrap justify-center items-center"},d.termin1.prosjekter.map((function(e){return r.a.createElement(E,{title:e.title,content:e.content,id:e.id})}))),r.a.createElement("p",{className:" text-3xl font-bold text-center mb-4"},"Termin 2"),r.a.createElement("p",{className:" text-xl font-bold text-center mb-4"},"Dette er prosjekter som eg har hatt i andre termin p\xe5 Haugaland vgs"),r.a.createElement("div",{className:"flex flex-wrap justify-center items-center"},d.termin2.prosjekter.map((function(e){var t=e.id;return r.a.createElement(E,{title:e.title,content:e.content,id:t})}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",element:r.a.createElement(u,null)}),r.a.createElement(b.a,{path:"/kontakt",element:r.a.createElement(v,null)}),r.a.createElement(b.a,{path:"/prosjekter",element:r.a.createElement(w,null)})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.70f6aef6.chunk.js.map