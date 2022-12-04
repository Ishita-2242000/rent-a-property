import React from "react";
import "./Card.css";

function Card(props) {
  const {
    name,
    price,
    address,
    country,
    state,
    beds,
    bathrooms,
    area,
    dateAvailable,
    img,
  } = props;
  return (
    <div className="card-container">
      <div className="card">
        <img src={img} alt="houseimg" className="img" />
        <p className="price">{price}</p>
        <h4>{name}</h4>
        <p>{address}</p>
        <hr />
        <div className="details">
          <span>{beds}Beds</span>
          <span>{bathrooms}Baths</span>
          <span>{area}sqft</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
