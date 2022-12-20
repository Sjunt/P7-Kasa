//import logo from "./assets/LOGO.png"
import React from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
   /* <div className="App">

    <img src={logo} className="App-logo" alt="logo" />
    <ul>
      <li>Accueil</li>
      <li>A propos</li>
    </ul>
    <p>
      En cours de construction
    </p>
    
    </div>*/
<div className="App">
  <Header />
</div>


  );
}

export default App;
