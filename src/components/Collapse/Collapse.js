import React from "react";
import "./Collapse.css";
import { useState } from "react";
import Vector from "../../assets/Vector.png"

export default function Collapse(props) {
    const [display, setDisplay] = useState("none");
    const [isActive, setIsActive] = useState("");
    const [rotate, setRotate] = useState("180deg");
  
    function inputDropDown() {
        setIsActive(isActive === "" ? "active" : "");
        setRotate(rotate === "180deg" ? "0deg" : "180deg");
        setDisplay(display === "block" ? "none" : "block");
      }
  

    return(
<div>
      <div className="dropDown_block" onClick={inputDropDown}>
        <h2 id="title">{props.title}</h2>
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ rotate: `${rotate}` }}
            alt="chevron"
          />
        </button>
      </div>
      
      <div
        className={`texte ${isActive}`}
        key={props.id}
        style={{ display: `${display}` }}
      >
        {props.texte}
      </div>
    </div>
    );
}
