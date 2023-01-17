import React, { useState } from "react";
import "./Slideshow.css";
import { useParams } from "react-router-dom"
import cardItems from "../../assets/housingData";
import VectorRight from "../../assets/VectorRight.png";
import VectorLeft from "../../assets/VectorLeft.png";

export default function Slideshow(props) {

    const { id } = useParams();
    const searchItem = cardItems.find((p) => p.id === id)
    const pictures = searchItem.pictures;
    const [currentPicture, setCurrentPicture] = useState(0);


    const prevPicture = () => {
        setCurrentPicture(currentPicture === 0 ? pictures.length -1 : currentPicture -1 );
    }

    const nextPicture = () =>{
        setCurrentPicture(currentPicture === pictures.length -1 ? 0 : currentPicture +1 );
    }

    return (

        <div className="slide">

            <button className="leftButton">
                <img src={VectorLeft} alt="Flèche précédente" onClick={prevPicture} />
            </button>

            <button className="rightButton">
            <img src={VectorRight} alt="Flèche suivante" onClick={nextPicture} />
            </button>
            
            {pictures.map((pictures, show) =>{
                return(
                    <div className="housingPictures" key={show}>
                        {show === currentPicture && (
                        <img src={pictures} alt="Photos du logement" />
                        )}   
                    </div>
                )
            })}
            
        </div>
    )
}