import React from 'react';
import './Card.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function Card({ image, price, year, description, location, time }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__higlight">
          <span>highlight</span>
        </div>
        <img src={image} alt="" />
        <FavoriteBorderOutlinedIcon />
      </div>
      <div className="card__body">
        <h3>{price}</h3>
        <p className="card__year">{year}</p>
        <p className="card__description">{description}</p>
        <div class="card__bodyFooter">
          <p className="card__location">{location}</p>
          <p className="card__time">{time}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
