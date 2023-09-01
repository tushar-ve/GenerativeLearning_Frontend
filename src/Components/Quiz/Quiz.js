import React, { useState } from "react";

import "./Quiz.css";
import Navbar from "../Header/Navbar";
import { Javascript } from "@mui/icons-material";
import Scorecard from "./Scorecard";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of France?",

    options: ["Berlin", "Paris", "Rome", "Madrid"],

    answer: "Paris",
  },

  {
    question: "What is the largest mammal?",

    options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],

    answer: "Blue Whale",
  },

  {
    question: 'Which planet is known as the "Red Planet"?',

    options: ["Mars", "Venus", "Mercury", "Jupiter"],

    answer: "Mars",
  },

  {
    question: "What is the chemical symbol for water?",

    options: ["H2O", "CO2", "O2", "NaCl"],

    answer: "H2O",
  },

  {
    question: "What is the currency of Japan?",

    options: ["Yen", "Rupee", "Dollar", "Euro"],

    answer: "Yen",
  },

  // Add more questions here
];
const content = ["Java", "Python", "PHP", "Javascript", "C++", ".NET", "C", "Angular"];

const Quiz = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleNextQuestion = () => {
    if (currentPage < questions.length) {
      setCurrentPage((prevPage) => prevPage + 1);
      setSubmitted(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      setSubmitted(false);
    }
  };

  const handleOptionSelect = (questionIndex, selectedOption) => {
    if (!submitted) {
      setSelectedAnswers((prevSelectedAnswers) => ({
        ...prevSelectedAnswers,
        [questionIndex]: selectedOption,
      }));
    }
  };

  const handleSubmitQuestion = () => {
    if (!submitted) {
      if (currentPage === questions.length) {
        setSubmitted(true);
        navigate("/card", {
          state: {
            questions: questions,
            selectedAnswers: selectedAnswers
          }
        });
      } else {
        handleNextQuestion();
      }
    }
  };

  // const calculateScore = () => {
  //   let score = 0;

  //   questions.forEach((question, index) => {
  //     if (selectedAnswers[index] === question.answer) {
  //       score++;
  //     }
  //   });

  //   return score;
  // };

  // const calculatePercentage = () => {
  //   const score = calculateScore();
  //   return ((score / questions.length) * 100).toFixed(2);
  // };

  return (
    <>
      <div className="quiz-container">
        <div className="QUIZ-Attempt">
          <h4>QUIZ Attempt</h4>
        </div>
        {currentPage <= questions.length && (
          <>

            <div className="question">
              <div className="one-line">
                <h2>{`Question ${currentPage}: ${questions[currentPage - 1].question
                  }`}</h2>
                <h4 style={{ marginRight: "30px", marginLeft: "17rem" }}>1.Q <svg width="28" height="10" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.4408 6.035H5.55917V9.529L0 4.765L5.55917 0V3.494H22.4408V0L28 4.765L22.4408 9.53V6.035Z" fill="#0A0A0B" />
                </svg>
                  1 Marks</h4>
              </div>

              {questions[currentPage - 1].options.map((option, optionIndex) => (
                <label className="label1" key={optionIndex}>
                  <input
                    type="radio"
                    name={`question${currentPage}`}
                    value={option}
                    checked={selectedAnswers[currentPage - 1] === option}
                    onChange={() => handleOptionSelect(currentPage - 1, option)}
                    disabled={submitted}
                  />

                  {option}
                </label>
              ))}

              {submitted && (
                <div className="feedback">
                  {selectedAnswers[currentPage - 1] ===
                    questions[currentPage - 1].answer ? (
                    <span className="correct">Correct!</span>
                  ) : (
                    <span className="wrong">{`Wrong! The correct answer is: ${questions[currentPage - 1].answer
                      }`}</span>
                  )}
                </div>
              )}

              {currentPage === questions.length && !submitted && (
                <button className="button1" onClick={handleSubmitQuestion}>
                  Submit
                </button>
              )}
            </div>
          </>
        )}

        <div className="pagination">
          {currentPage > 1 && currentPage < questions.length && !submitted && (
            <button className="nav-button" onClick={handlePrevQuestion}>
              Previous
            </button>
          )}

          {currentPage < questions.length && !submitted && (
            <button className="nav-button" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </div>
        {/* {submitted && currentPage === questions.length && (
          <Scorecard
            questions={questions}
            selectedAnswers={selectedAnswers}
          />
        )} */}
      </div>
      <div className="recommendation">
        <h2 style={{ marginLeft: "21rem" }}>Start Learning Recommendation</h2>
        <div className="recommendation-content">
          {content.map((c) => {
            return (

              <p className="cont">{c} <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5909 12L18.0441 7.54687C18.2554 7.3359 18.3743 7.04962 18.3745 6.75099C18.3748 6.45237 18.2564 6.16587 18.0455 5.95453C17.8345 5.74319 17.5482 5.62431 17.2496 5.62404C16.951 5.62378 16.6645 5.74215 16.4531 5.95312L12 10.4062L7.54687 5.95312C7.33553 5.74178 7.04888 5.62305 6.75 5.62305C6.45111 5.62305 6.16447 5.74178 5.95312 5.95312C5.74178 6.16447 5.62305 6.45111 5.62305 6.75C5.62305 7.04888 5.74178 7.33553 5.95312 7.54687L10.4062 12L5.95312 16.4531C5.74178 16.6645 5.62305 16.9511 5.62305 17.25C5.62305 17.5489 5.74178 17.8355 5.95312 18.0469C6.16447 18.2582 6.45111 18.3769 6.75 18.3769C7.04888 18.3769 7.33553 18.2582 7.54687 18.0469L12 13.5937L16.4531 18.0469C16.6645 18.2582 16.9511 18.3769 17.25 18.3769C17.5489 18.3769 17.8355 18.2582 18.0469 18.0469C18.2582 17.8355 18.3769 17.5489 18.3769 17.25C18.3769 16.9511 18.2582 16.6645 18.0469 16.4531L13.5909 12Z" fill="#0050C8" />
              </svg>
              </p>
            )
          })}
        </div>
      </div>

    </>
  );
};

export default Quiz;