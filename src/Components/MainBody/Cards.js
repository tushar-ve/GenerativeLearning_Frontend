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
        <button className='play-button' ><svg  xmlns="http://www.w3.org/2000/svg" width="60" height="28" viewBox="0 0 512 266"><path fill="#5A8AD0" d="M7.533 14.629L14.3 7.86C24.671-2.402 41.592-1.747 51.09 9.28l93.666 109.168c8.188 9.497 8.079 23.58-.218 32.969L51.2 257.2c-9.607 10.808-26.31 11.353-36.571 1.092l-6.769-6.769c-9.17-9.17-9.825-23.799-1.528-33.842l55.894-67.03c7.642-9.17 7.751-22.38.328-31.768L5.786 47.924C-2.293 38.1-1.528 23.69 7.533 14.63Z"/><path fill="#5A8AD0" d="M62.117 150.87L6.223 217.9c-8.297 9.935-7.642 24.672 1.528 33.842l6.768 6.769c10.262 10.262 26.965 9.716 36.572-1.092l20.196-22.925c7.642-15.065 11.9-32.096 11.9-50.108c0-22.27-6.55-42.904-17.686-60.261c4.148 8.515 3.057 19.104-3.384 26.746Zm130.674 63.646h-21.724V88.208h21.724v13.21c3.057-8.843 14.083-15.175 29.148-15.175c12.882 0 23.69 4.585 32.423 13.755c8.843 9.061 13.21 20.306 13.21 33.843c0 13.536-4.367 24.78-13.21 34.06c-8.733 9.061-19.54 13.537-32.423 13.537c-15.065 0-26.09-6.332-29.148-15.174v48.252Zm6.332-100.544c-5.24 5.24-7.97 12.008-7.97 19.978c0 7.969 2.73 14.628 7.97 19.978c5.459 5.24 12.118 7.969 19.978 7.969c7.86 0 14.083-2.73 19.214-7.97c5.24-5.24 7.75-12.008 7.75-19.977c0-7.97-2.51-14.629-7.75-19.978c-5.022-5.24-11.463-7.97-19.214-7.97c-7.75 0-14.52 2.73-19.978 7.97Zm75.981-60.698h21.725v96.396c0 8.843 2.948 12.663 10.917 12.663c2.51 0 4.694-.218 6.55-.764v19.432c-2.51.764-6.004 1.092-10.371 1.092c-19.214 0-28.82-9.825-28.82-29.585V53.274Zm112.771 48.143V88.208H409.6v63.754c0 7.751 1.856 10.699 6.66 10.699c1.31 0 2.947-.218 4.584-.328v17.577c-2.401.873-6.004 1.419-10.698 1.419c-5.24 0-9.389-.874-12.664-2.948c-4.039-2.729-6.55-6.332-7.423-11.026c-6.332 9.607-16.812 14.301-31.331 14.301c-12.882 0-23.69-4.476-32.642-13.755c-8.733-9.28-13.1-20.524-13.1-34.06c0-13.537 4.367-24.782 13.1-33.843c8.843-9.279 19.76-13.755 32.642-13.755c14.628 0 25.654 6.55 29.147 15.174Zm-6.55 52.401c5.459-5.24 8.188-12.008 8.188-19.977c0-7.97-2.73-14.63-8.188-19.978c-5.24-5.24-12.008-7.97-19.76-7.97c-7.75 0-14.082 2.73-19.431 7.97c-5.022 5.24-7.642 12.008-7.642 19.978c0 7.969 2.511 14.628 7.642 19.977c5.24 5.24 11.572 7.97 19.432 7.97c7.86 0 14.52-2.73 19.76-7.97Zm47.052 43.995c2.73.874 6.113 1.42 10.153 1.42c3.493 0 6.004-.765 7.969-1.966c1.965-1.2 3.82-4.039 5.24-7.75l2.402-6.55l-38.21-94.759h21.834l26.856 68.885l25.218-68.885h21.943L470.843 194.43c-2.729 7.096-6.004 12.554-9.825 16.266c-5.458 5.022-12.663 7.642-21.943 7.642c-4.039 0-7.641-.546-10.698-1.42v-19.104Z"/></svg></button>
      </div>
      <div>
      <div className="description">{description}</div>
      </div>
    </div>
    </>
  );
};

export default Cards
