import React from 'react'
import './Cards.css'
const Cards = ({ menuName, description, imageUrl }) => {
  return (
    <>
   
    <div className="card">
      <div className="image">
        <img src={imageUrl} alt={menuName} />
      </div>
      <div className="info-container">
        <div className="menu-name">{menuName}</div>
        <button className="play-button">Play</button>
      </div>
      <div>
      <div className="description">{description}</div>
      </div>
    </div>
    </>
  );
};

export default Cards
