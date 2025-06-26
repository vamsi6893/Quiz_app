import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LeaderboardPage.css';

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const categories = ['java', 'c', 'mongodb', 'python'];

const LeaderboardPage = ({ theme = 'light' }) => {
    const [category, setCategory] = useState('java');
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        setLoading(true);
        fetch(`${BACKEND_URL}/api/leaderboard/${category}`)
            .then(res => res.json())
            .then(data => {
                setLeaders(data || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [category]);

    return (
        <div className={`page-bg leaderboard-container ${theme}`}>
            <h1 className="leaderboard-title">🏆 Leaderboard - {category.toUpperCase()}</h1>
            <div className="leaderboard-categories">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`leaderboard-category-btn${cat === category ? ' active' : ''}`}
                        onClick={() => setCategory(cat)}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>
            {loading ? (
                <div className="leaderboard-loading">Loading...</div>
            ) : (
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaders.length === 0 && (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center' }}>No data available.</td>
                            </tr>
                        )}
                        {leaders.map((user, idx) => (
                            <tr key={user.username || idx}>
                                <td>{idx + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default LeaderboardPage;