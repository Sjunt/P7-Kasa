import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css"

export default function About() {
  return (
    <div className="about">
      <Header />
      Bannière img

      <ul>
        <li>Fiabilité</li>
        <li>Respect</li>
        <li>Service</li>
        <li>Responsabilité</li>
      </ul>
  
      <Footer />
    </div>
  );
}