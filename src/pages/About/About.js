import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css"
import bannerAbout from "../../assets/bannerAbout.png";
import aboutData from "../../assets/aboutData";
import Collapse from "../../components/Collapse/Collapse";

export default function About() {
  return (
    <div className="about">
      <Header />
      <div className="bannerAbout">
        <img className="imgAbout" src={bannerAbout} alt="paysage" />
      </div>

      {aboutData.map((about) => {
        return <Collapse 
        key={about.id} 
        title={about.title} 
        texte={about.content} 
        />;
      })}
      
      <Footer />
    </div>
  );
}