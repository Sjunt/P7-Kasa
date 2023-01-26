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
    

    if (item  === undefined){
        
            return <Error />
        
    } else {

    
        return (

            <div id="housing">

                <Header />

                <Slideshow />

                <div className="housing_container">
                    <div className="firstBlock">
                        <h2>{item.title}</h2>
                        <p>{item.location}</p>
                        <div className="housing_tags">
                            <ul>
                                {item.tags.map((t) => (
                                <li key={t}>
                                    {t}
                                </li>
                                ))}
                            </ul>  
                        </div> 
                    </div>

                    <div className="secondBlock">
                        <div className="housing_host">
                            <p>{item.host.name}</p>
                            <img src={item.host.picture} alt="host" />
                        </div>
                        <div className="housing_rating">
                            <Rating  rating={item.rating}/>
                        </div>
                    </div> 
                </div>

                <div className="housing_description">
                    <Collapse title="Description" texte={item.description} />

                    <div id="housing_equipements">
                        
                        <Collapse title="Equipements" texte=
                        {item.equipments.map((e) => (
                        <li key={e}>
                            {e}
                        </li>
                        ))}
                        />

                    </div>
                </div>

                <Footer />

            </div>
        );       
    }
}