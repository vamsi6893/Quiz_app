import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ContestQuizPage.css';

const BACKEND_URL = "https://quiz-backend-xbp8.onrender.com";

const ContestQuizPage = ({ theme }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const quizRef = useRef(null);

    const [contest, setContest] = useState(null);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showExitPrompt, setShowExitPrompt] = useState(false);
    const [username, setUsername] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        // Require login and get username
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        // Fetch user profile to get username
        fetch(`${BACKEND_URL}/api/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(profile => {
                setUsername(profile.username || '');
            });

        fetch(`${BACKEND_URL}/api/contest/${id}`)
            .then(res => res.json())
            .then(data => {
                setContest(data);
                setAnswers(Array(data.questions.length).fill(null));
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load contest.');
                setLoading(false);
            });
    }, [id, navigate]);

    useEffect(() => {
        if (!started) return;
        const elem = quizRef.current || document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);

        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) setShowExitPrompt(true);
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
            if (document.fullscreenElement) document.exitFullscreen();
        };
    }, [started]);

    const handleOptionSelect = (idx) => {
        if (submitted) return;
        const updated = [...answers];
        updated[current] = idx;
        setAnswers(updated);
    };

    const handleNext = () => {
        if (current < contest.questions.length - 1) setCurrent((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };

    const handleExitQuiz = () => {
        setShowExitPrompt(false);
        navigate('/', { replace: true });
    };

    const handleStay = () => {
        setShowExitPrompt(false);
        const elem = quizRef.current || document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen();
    };

    const handleSubmit = async () => {
        if (!username.trim()) {
            setError('User not found.');
            return;
        }
        if (answers.some((a) => a === null)) {
            setError('Please answer all questions.');
            return;
        }
        let sc = 0;
        contest.questions.forEach((q, idx) => {
            if (answers[idx] === q.answer) sc++;
        });
        setScore(sc);
        setSubmitted(true);
        setError('');
        // Save to leaderboard
        await fetch(`${BACKEND_URL}/api/contest/${id}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, score: sc }),
        });
    };

    if (loading) return <div className={`page-bg contest-quiz-container ${theme}`}>Loading...</div>;
    if (error && !contest) return <div className={`page-bg contest-quiz-container ${theme}`}>{error}</div>;
    if (!contest) return null;

    const progress = contest.questions.length ? ((current + 1) / contest.questions.length) * 100 : 0;

    // Show start button before quiz begins
    if (!started) {
        return (
            <div ref={quizRef} className={`page-bg contest-quiz-container ${theme}`}>
                <main className="contest-quiz-main">
                    <h1 className="contest-quiz-title">{contest.title}</h1>
                    <p className="contest-quiz-desc">{contest.description}</p>
                    <button
                        className="start-button"
                        onClick={() => setStarted(true)}
                    >
                        Start Quiz
                    </button>
                </main>
            </div>
        );
    }

    return (
        <div ref={quizRef} className={`page-bg contest-quiz-container ${theme}`}>
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

            <main className="contest-quiz-main">
                <h1 className="contest-quiz-title">{contest.title}</h1>
                <p className="contest-quiz-desc">{contest.description}</p>
                {!submitted && (
                    <>
                        {/* Username is now auto-filled and shown, not editable */}
                        <div className="contest-quiz-username" style={{ marginBottom: '1rem', fontWeight: 500 }}>
                            Name: {username}
                        </div>
                        {/* Question Navigation Bar */}
                        <div className="question-nav-bar">
                            {contest.questions.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`question-nav-btn${current === idx ? ' active' : ''}${answers[idx] !== null ? ' answered' : ''}`}
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
                            Q {current + 1} of {contest.questions.length}
                        </div>
                        <div className="question-text">
                            {contest.questions[current].question}
                        </div>
                        <div className="options">
                            {contest.questions[current].options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className={`option-btn ${answers[current] === idx ? 'selected' : ''}`}
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
                                onClick={current === contest.questions.length - 1 ? handleSubmit : handleNext}
                                disabled={answers[current] === null}
                            >
                                {current === contest.questions.length - 1 ? 'Submit' : 'Next'}
                            </button>
                        </div>
                        {error && <div className="contest-quiz-error">{error}</div>}
                    </>
                )}
                {submitted && (
                    <div className="contest-quiz-result">
                        <h2>Your Score: {score} / {contest.questions.length}</h2>
                        <button
                            className="start-button"
                            onClick={() => navigate(`/contest/${id}/leaderboard`)}
                        >
                            🏆 View Leaderboard
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ContestQuizPage;