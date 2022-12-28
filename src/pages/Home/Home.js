import React from "react";
import Header from "../../components/Header/Header";
import cover from "../../assets/cover.png"
import Footer from "../../components/Footer/Footer";
import "./Home.css"
import HousingData from "../../components/HousingData/HousingData";

export default function Home() {
  return (
    <div className="home">
      <Header />
        <div className="cover">
          <p>Chez vous, partout et ailleurs</p>
          <img className="imgHome" src={cover} alt="paysage" />
        </div>
      <HousingData />
      <Footer />
    </div>
  );
}