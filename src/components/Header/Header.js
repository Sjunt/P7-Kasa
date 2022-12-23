import React from "react";
import logo from "../../assets/LOGO.png";
import "./Header.css";
import Navbar from "../Navbar/Navbar"


export default function Header(){
    return(
        <header className="header">
            <div className="logo-app">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Navbar />           
        </header>   
    )  
}
