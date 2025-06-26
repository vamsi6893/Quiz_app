import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import InstructionsPage from './components/InstructionsPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ProfilePage from './components/ProfilePage';
import LeaderboardPage from './components/LeaderboardPage';
import CreateContestPage from './components/CreateContestPage';
import ShareContestLinkPage from './components/ShareContestLinkPage';
import ContestQuizPage from './components/ContestQuizPage';
import ContestLeaderboardPage from './components/ContestLeaderboardPage';

function App() {
    // Persist theme in localStorage
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`app-root ${theme}`}>
            <Router>
                <Header theme={theme} onToggleTheme={handleToggleTheme} />
                <Routes>
                    <Route path="/" element={<HomePage theme={theme} />} />
                    <Route path="/category" element={<CategoryPage theme={theme} />} />
                    <Route path="/instructions" element={<InstructionsPage theme={theme} />} />
                    <Route path="/quiz" element={<QuizPage theme={theme} />} />
                    <Route path="/result" element={<ResultPage theme={theme} />} />
                    <Route path="/login" element={<LoginPage theme={theme} />} />
                    <Route path="/register" element={<RegisterPage theme={theme} />} />
                    <Route path="/profile" element={<ProfilePage theme={theme} />} />
                    <Route path="/leaderboard" element={<LeaderboardPage theme={theme} />} />
                    <Route path="/create-contest" element={<CreateContestPage theme={theme} />} />
                    <Route path="/contest-link/:id" element={<ShareContestLinkPage theme={theme} />} />
                    <Route path="/contest/:id" element={<ContestQuizPage theme={theme} />} />
                    <Route path="/contest/:id/leaderboard" element={<ContestLeaderboardPage theme={theme} />} />
                    <Route path="*" element={<NotFound theme={theme} />} />
                    
                </Routes>
            </Router>
        </div>
    );
}

export default App;