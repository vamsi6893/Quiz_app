import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'; // Reuse table styles

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const ContestManagementPage = ({ theme = 'light' }) => {
    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContests = async () => {
            setLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }
                // Fetch user profile to get username
                const profileRes = await fetch(`${BACKEND_URL}/api/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const profileData = await profileRes.json();
                if (!profileRes.ok || !profileData.username) {
                    setError('Failed to load user profile');
                    setLoading(false);
                    return;
                }
                // Fetch all contests created by this user
                const contestsRes = await fetch(
                    `${BACKEND_URL}/api/contest?creator=${encodeURIComponent(profileData.username)}&limit=0`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                const contestsData = await contestsRes.json();
                if (contestsRes.ok) {
                    setContests(contestsData);
                } else {
                    setError(contestsData.message || 'Failed to load contests');
                }
            } catch {
                setError('Network error');
            }
            setLoading(false);
        };
        fetchContests();
    }, [navigate]);

    const handleContestLeaderboard = (contestId) => {
        navigate(`/contest/${contestId}/leaderboard`);
    };

    if (loading) {
        return (
            <div className={`page-bg ${theme}`}>
                <div className="profile-container">
                    <h1 className="profile-title">My Created Contests</h1>
                    <div>Loading...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`page-bg ${theme}`}>
                <div className="profile-container">
                    <h1 className="profile-title">My Created Contests</h1>
                    <div className="auth-error">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className={`page-bg ${theme}`}>
            <div className="profile-container">
                <h1 className="profile-title">My Created Contests</h1>
                <div className="my-contests-section">
                    <div className="my-contests-table-wrapper">
                        <table className="my-contests-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Leaderboard</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contests.length === 0 ? (
                                    <tr>
                                        <td colSpan={2}>No contests created yet.</td>
                                    </tr>
                                ) : (
                                    contests.map(contest => (
                                        <tr key={contest._id}>
                                            <td style={{ fontWeight: 500 }}>{contest.title}</td>
                                            <td>
                                                <button
                                                    className="contest-leaderboard-btn"
                                                    onClick={() => handleContestLeaderboard(contest._id)}
                                                >
                                                    View Leaderboard
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContestManagementPage;