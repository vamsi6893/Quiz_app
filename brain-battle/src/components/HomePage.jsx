import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const quotes = [
    "Test your knowledge. Beat the clock. Be the champ!",
    "Smart is the new cool. Let's get started!",
    "Let the thinking begin…",
    "Your brain's gym starts here!",
    "Think fast. Think smart. Think Brain Battle!",
    "Fuel your curiosity. Fire up your brain.",
    "Where questions meet champions!",
];

const HomePage = ({ theme }) => {
    const navigate = useNavigate();
    const [quote, setQuote] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
const BACKEND_URL = "https://quiz-backend-xbp8.onrender.com"; 
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        if (token) {
            const storedUser = localStorage.getItem('username');
            if (storedUser) {
                setUsername(storedUser);
            } else {
                fetch(`${BACKEND_URL}/api/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                    .then(res => res.json())
                    .then(data => setUsername(data.username || ''))
                    .catch(() => setUsername(''));
            }
        }
    }, []);

    const handleStartQuiz = () => {
        navigate('/category');
    };

    const handleCreateContest = () => {
        navigate('/create-contest');
    };

    return (
        <div className={`page-bg home-container ${theme}`}>
            <main className="home-main" style={{ marginTop: '3.5rem' }}>
                <h1 className="welcome-title">
                    {isLoggedIn
                        ? `Welcome to the Brain Battle${username ? ', ' + username : ''}!`
                        : 'Welcome to the Brain Battle'}
                </h1>
                <p className="quote-text">"{quote}"</p>
                <h2 className="tagline">Quiz. Compete. Conquer.</h2>
                <button className="start-button" onClick={handleStartQuiz}>
                    Start Quiz
                </button>
                <button
                    className="start-button"
                    style={{ marginTop: 12 }}
                    onClick={handleCreateContest}
                >
                     Create Quiz Contest
                </button>
                {!isLoggedIn && (
                    <div className="home-auth-buttons">
                        <button className="login-btn" onClick={() => navigate('/login')}>
                            Login
                        </button>
                        <button className="register-btn" onClick={() => navigate('/register')}>
                            Register
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default HomePage;