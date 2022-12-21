import React from "react";
//import { Link } from "react-router-dom";
import logoFooter from "../../assets/logoFooter.png";
import "./Footer.css";


export default function Footer(){
    return(
        <footer className="footer">
            <div className="bodyFooter">
                <img src={logoFooter} className="footer-logo" alt="logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>   
    )  
}