import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Housing.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import cardItems from "../../assets/housingData";
import Error from "../../pages/Error/Error";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import Rating from "../../components/Rating/Rating";


export default function Housing() {

    const { id } = useParams();
    const [item, setItem]= useState();


    useEffect(() => {
        const searchItem = cardItems.find((s) => s.id === id);
    
        setItem(searchItem);
    }, [id]);     
    

    if (!item){
        return <Error />
    } else {

    
        return (

            <div className="housing">

                <Header />

                <Slideshow />

                <div className="housing_container">
                    <div className="firstBlock">
                        <h2>{item.title}</h2>
                        <p>{item.location}</p>
                    </div>

                    <div className="secondBlock">
                        <p>{item.host.name}</p>
                        <img src={item.host.picture} alt="host" />
                    </div> 
                </div>

                <div className="thirdBlock">
                    <div className="housing_tags">
                        <ul>
                            <li>{item.tags}</li>
                        </ul>  
                    </div> 

                    <div className="housing_rating">
                        <Rating />
                    </div>
                </div>
                

                <div className="housing_description">
                    <Collapse title="Description" texte={item.description} />
                    <Collapse title="Equipments" texte={item.equipments} />
                </div>

                <Footer />

            </div>
        );       
    }
}