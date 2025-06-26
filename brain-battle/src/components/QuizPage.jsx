import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questionsData from './Questions';
import './QuizPage.css';

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const QuizPage = ({ theme }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state?.course || 'java';
    const questions = questionsData[course] || [];

    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(0);
    const [showExitPrompt, setShowExitPrompt] = useState(false);
    const quizRef = useRef(null);

    // Redirect to login if not authenticated
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const elem = quizRef.current || document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }

        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);

        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setShowExitPrompt(true);
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
            document.removeEventListener('contextmenu', handleContextMenu);
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        };
    }, []);

    const handleOptionSelect = (idx) => {
        const updated = [...selected];
        updated[current] = idx;
        setSelected(updated);
    };

    // Save score to backend
    const saveScore = async (finalScore) => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`${BACKEND_URL}/api/submit-score`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ category: course, score: finalScore }),
            });
        } catch (err) {
            // Optionally handle error
        }
    };

    const handleNext = async () => {
        let newScore = score;
        if (selected[current] === questions[current].answer) {
            newScore = score + 1;
            setScore(newScore);
        }
        if (current === questions.length - 1) {
            // Save score to backend before navigating to result
            await saveScore(newScore);
            navigate('/result', {
                state: {
                    score: newScore,
                    selected,
                    course,
                },
            });
        } else {
            setCurrent((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };

    const handleExitQuiz = () => {
        setShowExitPrompt(false);
        navigate('/category', { replace: true });
    };

    const handleStay = () => {
        setShowExitPrompt(false);
        const elem = quizRef.current || document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    };

    const progress = questions.length ? ((current + 1) / questions.length) * 100 : 0;

    if (!questions.length) {
        return (
            <div className={`quiz-container ${theme}`}>
                <p>No questions found for this course.</p>
            </div>
        );
    }

    return (
        <div ref={quizRef} className={`quiz-container ${theme}`}>
            {showExitPrompt && (
                <div className="fullscreen-exit-prompt">
                    <div className="fullscreen-exit-modal">
                        <p>Do you want to exit from quiz?</p>
                        <div className="fullscreen-exit-actions">
                            <button className="exit-btn" onClick={handleExitQuiz}>Yes</button>
                            <button className="stay-btn" onClick={handleStay}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Question Navigation Bar */}
            <div className="question-nav-bar" style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                {questions.map((_, idx) => (
                    <button
                        key={idx}
                        className={`question-nav-btn${current === idx ? ' active' : ''}${selected[idx] !== null ? ' answered' : ''}`}
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            border: current === idx ? '2px solid #4f8cff' : '1px solid #ccc',
                            background: selected[idx] !== null ? '#4f8cff' : '#fff',
                            color: selected[idx] !== null ? '#fff' : '#222',
                            fontWeight: current === idx ? 'bold' : 'normal',
                            cursor: 'pointer',
                            outline: 'none',
                        }}
                        onClick={() => setCurrent(idx)}
                        tabIndex={0}
                        aria-label={`Go to question ${idx + 1}`}
                    >
                        {idx + 1}
                    </button>
                ))}
            </div>
            {/* End Question Navigation Bar */}

            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }} />
            </div>
            <div className="question-number">
                Q {current + 1} of {questions.length}
            </div>
            <div className="question-text">
                {questions[current].question}
            </div>
            <div className="options">
                {questions[current].options.map((opt, idx) => (
                    <button
                        key={idx}
                        className={`option-btn ${selected[current] === idx ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(idx)}
                    >
                        {opt}
                    </button>
                ))}
            </div>
            <div className="quiz-buttons">
                <button
                    className="prev-btn"
                    onClick={handlePrevious}
                    disabled={current === 0}
                >
                    Previous
                </button>
                <button
                    className="next-btn"
                    onClick={handleNext}
                    disabled={selected[current] === null}
                >
                    {current === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default QuizPage;