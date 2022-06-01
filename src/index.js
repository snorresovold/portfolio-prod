import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import ProjectDetails1 from "./components/ProjectDetails1"
import ProjectDetails2 from "./components/ProjectDetails2"
import ProjectDetails3 from "./components/ProjectDetails2"
import ProjectDetails4 from "./components/ProjectDetails2"
import ProjectDetails5 from "./components/ProjectDetails2"
import ProjectDetails6 from "./components/ProjectDetails2"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/prosjekter' element={<Projects />} />
        <Route path='/0' element={<ProjectDetails1 />} />
        <Route path='/1' element={<ProjectDetails2 />} />
        <Route path='/2' element={<ProjectDetails3 />} />
        <Route path='/3' element={<ProjectDetails4 />} />
        <Route path='/4' element={<ProjectDetails5 />} />
        <Route path='/5' element={<ProjectDetails6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
