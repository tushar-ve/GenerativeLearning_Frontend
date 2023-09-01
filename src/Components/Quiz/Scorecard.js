import React from 'react'
import "./scorecard.css";
import { useLocation, useNavigate } from 'react-router-dom';


const Scorecard = () => {
    const location = useLocation();
    const { questions, selectedAnswers } = location.state
    const navigate = useNavigate();
    const calculateScore = () => {
        let score = 0;

        questions.map((question, index) => {
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
            <div className="scorecard">
                <div className="scorecard-score">
                    <p>Your Score:</p>
                    <span>{`${calculateScore()} out of ${questions.length}`}</span>
                    <p>Percentage Correct:</p>
                    <span>{`${calculatePercentage()}%`}</span>
                </div>

                <div className="scorecard-answers">
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
                        className="button"
                        onClick={() => navigate("/")}
                    >
                        Restart Quiz
                    </button>
                </div>
            </div>
        </>
    )
}

export default Scorecard