import React from "react";
//import { Link } from "react-router-dom";
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


/*{<NavLink className="navbar-item" activeClassName="is-active" to="/home">
Accueil
</NavLink>

<NavLink className="navbar-item" activeClassName="is-active" to="/about">
A propos
</NavLink>}*/