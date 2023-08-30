import React from "react";
import "./Videos.css";
import video_1_image from "../assets/images/Video1.png";
import video_2_image from "../assets/images/Video2.png";
import video_3_image from "../assets/images/Video3.png";
import video_4_image from "../assets/images/Video4.jpg";

const Videos = () => {
  const VideosData = [
    {
      image: video_1_image,

      title: "Java Complete Tutorial for beginners",

      image_alt: "Video1",
    },

    {
      image: video_2_image,

      title: "Python Complete Tutorial for beginners",

      image_alt: "Video2",
    },

    {
      image: video_3_image,

      title: "C++ Complete Tutorial for beginners",

      image_alt: "Video3",
    },

    {
      image: video_4_image,

      title: "Django and DjangoRestFramework Complete Crash Course",

      image_alt: "Video4",
    },
  ];

  return (
    <div className="video-container">
      {VideosData.map((data, index) => {
        return (
          <div className="video-content">
            <div className="video-image">
              <img src={data.image} alt={data.image_alt} />
              <button className="video-play-button">
                <svg
                  width="50"
                  height="45"
                  viewBox="0 0 78 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="39" cy="34" rx="39" ry="34" fill="#D9D9D9" />
                  <path
                    d="M25.623 8.00513L66.5535 33.5016L25.6536 59.0472L25.623 8.00513Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </button>
            </div>
            <h4>{data.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
