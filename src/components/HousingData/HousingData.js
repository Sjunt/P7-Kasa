import React from "react";
import cardItems from "../../assets/housingData";
import { Link } from "react-router-dom";
import "./HousingData.css";

export default function HousingData () {
    return(
        <div className="card_container">
          {cardItems.map((item) => {
            return (
              <Link key={item.id} to={`/housing/${item.id}`}>
                <div className="card">
                  <img src={item.cover} alt={item.title} />
                  <div className="card_overlay"></div>
                  <p>{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
    )
}