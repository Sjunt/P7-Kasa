import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";   

export default function Navbar() {
    return(
        <div className="navbar">
            <NavLink className="header-nav" to="/">
            <li>Accueil</li>
            </NavLink>

            <NavLink className="header-nav" to="/about">
            <li>A Propos</li>
            </NavLink>
        </div>
    )
}


            