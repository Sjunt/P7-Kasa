import React from "react";
import logo from "../../assets/LOGO.png";
import "./Header.css";

export default function Header(){
    return(
        <header className="header">
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <nav className="header-nav">
                <li>Accueil</li>
                <li>A Propos</li>
            </nav>
        </header>
    )
}