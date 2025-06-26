import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InstructionsPage.css';

const InstructionsPage = ({ theme }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const course = location.state?.course || 'Java';

    return (
        <div className={`page-bg instructions-container ${theme}`}>
            <h1>Instructions</h1>
            <h2 className="course-title">{course.charAt(0).toUpperCase() + course.slice(1)} Quiz</h2>
            <ul>
                <li>You will be given a series of multiple-choice questions.</li>
                <li>Each question has <strong>only one correct answer</strong>.</li>
                <li>Click on an option to select your answer.</li>
                <li>You can <strong>go back</strong> to previous questions and <strong>change your answers</strong> at any time before submitting.</li>
                <li>There is <strong>no time limit</strong>, so take your time and think carefully.</li>
                <li>Your final score and detailed summary will be shown at the end.</li>
                <li>Use the <strong>Dark/Light mode</strong> toggle in the corner to switch themes.</li>
                <li>
                    <strong>Full Screen Mode:</strong> The quiz will automatically enter full screen mode for a distraction-free experience.<br />
                    If you exit full screen during the quiz, you will be prompted to confirm if you want to exit the quiz or continue.
                </li>
            </ul>
            <div className="instructions-buttons">
                <button className="back-btn" onClick={() => navigate('/category')}>Back</button>
                <button
                    className="start-btn"
                    onClick={() => navigate('/quiz', { state: { course } })}
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default InstructionsPage;