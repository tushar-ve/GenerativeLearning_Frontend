import React, { useState } from "react";

import "./Quiz.css";

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

const Quiz = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
      } else {
        handleNextQuestion();
      }
    }
  };

  const calculateScore = () => {
    let score = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });

    return score;
  };

  const calculatePercentage = () => {
    const score = calculateScore();
    return ((score / questions.length) * 100).toFixed(2);
  };

  return (
    <>
      <div className="quiz-container">
        {currentPage <= questions.length && (
          <div className="question">
            <h2>{`Question ${currentPage}: ${
              questions[currentPage - 1].question
            }`}</h2>

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
                  <span className="wrong">{`Wrong! The correct answer is: ${
                    questions[currentPage - 1].answer
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
        )}

        <div className="pagination">
          {currentPage > 1 && currentPage < questions.length && !submitted && (
            <button className="button1" onClick={handlePrevQuestion}>
              Previous
            </button>
          )}

          {currentPage < questions.length && !submitted && (
            <button className="button1" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </div>

        {submitted && currentPage === questions.length && (
          <div className="scorecard">
            <div className="scorecard-score">
              <p>Your Score:</p>
              <span>{`${calculateScore()} out of ${questions.length}`}</span>
              <p>Percentage Correct:</p>
              <span>{`${calculatePercentage()}%`}</span>
            </div>

            <div className="scorecard-answers">
              <p>Answers:</p>
              {questions.map((question, index) => (
                <div key={index} className="scorecard-question">
                  <p>
                    <strong>Question {index + 1}:</strong> {question.question}
                  </p>

                  <p>
                    <strong>Your Answer:</strong>{" "}
                    {selectedAnswers[index] || "Not answered"}
                  </p>

                  <p>
                    <strong>Correct Answer:</strong> {question.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="scorecard-button">
              <button
                className="button1"
                onClick={() => window.location.reload()}
              >
                Restart Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;