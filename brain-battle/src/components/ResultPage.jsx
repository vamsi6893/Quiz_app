import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questionsData from './Questions';
import './ResultPage.css';

const ResultPage = ({ theme }) => {
    const location = useLocation();
    const navigate = useNavigate();
    // Get score, selected answers, and course from navigation state
    const { score = 0, selected = [], course = 'java' } = location.state || {};
    const questions = questionsData[course] || [];

    return (
        <div className={`result-container ${theme}`}>
            <h1>Quiz Results</h1>
            <div className="score">
                Score: {score} / {questions.length}
            </div>
            <div className="summary">
                {questions.map((q, idx) => {
                    const userAnswer = selected[idx];
                    const isCorrect = userAnswer === q.answer;
                    return (
                        <div className={`summary-item ${isCorrect ? 'correct' : 'incorrect'}`} key={idx}>
                            <div className="question">{q.question}</div>
                            <div>
                                Your answer:{" "}
                                <span>
                                    {userAnswer !== null && userAnswer !== undefined
                                        ? q.options[userAnswer]
                                        : <em>Not answered</em>}
                                </span>
                            </div>
                            <div>
                                Correct answer: <span>{q.options[q.answer]}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="result-buttons">
                <button
                    className="play-again-btn"
                    onClick={() => navigate('/quiz', { state: { course } })}
                >
                    Play Again
                </button>
                <button className="home-btn" onClick={() => navigate('/')}>
                    Home
                </button>
            </div>
        </div>
    );
};

export default ResultPage;