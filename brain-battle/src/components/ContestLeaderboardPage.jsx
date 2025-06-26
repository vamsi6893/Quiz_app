import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ContestLeaderboardPage.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const ContestLeaderboardPage = ({ theme }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contest, setContest] = useState(null);
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check for login
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchData = async () => {
            try {
                const contestRes = await fetch(`${BACKEND_URL}/api/contest/${id}`);
                const contestData = await contestRes.json();
                const leadersRes = await fetch(`${BACKEND_URL}/api/contest/${id}/leaderboard`);
                const leadersData = await leadersRes.json();
                setContest(contestData);
                setLeaders(leadersData);
                setLoading(false);
            } catch {
                setError('Failed to load leaderboard.');
                setLoading(false);
            }
        };
        fetchData();
    }, [id, navigate]);

    if (loading) return <div className={`page-bg contest-leaderboard-container ${theme}`}>Loading...</div>;
    if (error) return <div className={`page-bg contest-leaderboard-container ${theme}`}>{error}</div>;

    return (
        <div className={`page-bg contest-leaderboard-container ${theme}`}>
            <main className="contest-leaderboard-main">
                <h1 className="contest-leaderboard-title">{contest?.title || 'Contest'} Leaderboard</h1>
                <div className="contest-leaderboard-table-wrapper">
                    <table className="contest-leaderboard-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Username</th>
                                <th>Score</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaders.length === 0 && (
                                <tr>
                                    <td colSpan={4} style={{ textAlign: 'center' }}>No submissions yet.</td>
                                </tr>
                            )}
                            {leaders.map((entry, idx) => (
                                <tr key={entry._id || idx}>
                                    <td>{idx + 1}</td>
                                    <td>{entry.username}</td>
                                    <td>{entry.score}</td>
                                    <td>{new Date(entry.time).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="start-button" onClick={() => navigate('/')}>
                     Home
                </button>
            </main>
        </div>
    );
};

export default ContestLeaderboardPage;