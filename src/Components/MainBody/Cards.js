import React from "react";
import "./Cards.css";
const Cards = ({ menuName, description, imageUrl }) => {
  return (
    <div className="card10">
      <div className="image">
        <img src={imageUrl} alt={menuName} />
      </div>
      <div className="description">
        <h2>Data Science :-</h2>
        <p>{description}</p>
      </div>
      <div className="bottom">
        <span id="span1">Beginners</span>
        <span id="span2">
          4.5{" "}
          <svg
            id="sv"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#85b6ff"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"
            />
          </svg>{" "}
          (No Review)
        </span>
      </div>
    </div>
  );
};

export default Cards;
