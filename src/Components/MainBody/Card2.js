import React from "react";
import "./Card2.css";
import article_image from "../assets/images/Article.png";
import quiz_and_puzzle_image from "../assets/images/Quiz&Puzzle.png";
import survey_image from "../assets/images/Survey.png";
import exams_image from "../assets/images/Exams.png";
import videos_image from "../assets/images/Videos.png";
import live_lectures_image from "../assets/images/LiveLectures.png";

const Card2 = () => {
  const Card2Data = [
    {
      image: article_image,

      title: "Articles",
    },

    {
      image: quiz_and_puzzle_image,

      title: "QUIZ & PUZZLES",
    },

    {
      image: survey_image,

      title: "Surveys",
    },

    {
      image: exams_image,

      title: "Exams",
    },

    {
      image: videos_image,

      title: "Videos",
    },

    {
      image: live_lectures_image,

      title: "Live Lectures",
    },
  ];

  return (
    <div className="card2-container">
      {Card2Data.map((data, index) => {
        return (
          <div key={index} className="card2">
            <div className="card2-image">
              <img src={data.image} alt={data.title} />
            </div>
            <h4>{data.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Card2;
