import React from "react";
import EmptyStar from "../../assets/EmptyStar.png";
import FullStar from "../../assets/FullStar.png";


  export default function Rating(props) {

    const rating = props.rating;
    const maxRate = 5;
    const stars = [];
  
    for (let i = 1; i < maxRate + 1; i++) {
      if (i <= rating) {
        stars.push(

          <img
          key={i}
          src={FullStar}
          alt=""
          className="full-star"
          />

        );
      } else {
        stars.push(

          <img
          key={i}
          src={EmptyStar}
          alt="" 
          className="empty-star"
          />

        );
      }
    }
    return (
      <div>
        {stars}
      </div>)
  }
