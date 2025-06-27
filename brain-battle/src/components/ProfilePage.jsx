import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const BACKEND_URL = "https://quiz-backend-xbp8.onrender.com";
const ProfilePage = ({ theme = 'light' }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [myContests, setMyContests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            setError('');
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }
                const res = await fetch(`${BACKEND_URL}/api/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                    return;
                }
                const data = await res.json();
                if (!res.ok) {
                    setError(data.message || 'Failed to load profile');
                } else {
                    setProfile(data);
                    // Fetch all contests created by this user (no limit)
                    if (data.username) {
                        const contestsRes = await fetch(`${BACKEND_URL}/api/contest?creator=${encodeURIComponent(data.username)}&limit=0`);
                        const contestsData = await contestsRes.json();
                        if (contestsRes.ok) setMyContests(contestsData);
                    }
                }
            } catch {
                setError('Network error');
            }
            setLoading(false);
        };
        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleLeaderboard = () => {
        navigate('/leaderboard');
    };

    const handleContestLeaderboard = (contestId) => {
        navigate(`/contest/${contestId}/leaderboard`);
    };

    if (loading) {
        return (
            <div className={`page-bg ${theme}`}>
                <div className="profile-container">
                    <h1 className="profile-title">
                        <FaUserCircle style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                        My Profile
                    </h1>
                    <div>Loading...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`page-bg ${theme}`}>
                <div className="profile-container">
                    <h1 className="profile-title">
                        <FaUserCircle style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                        My Profile
                    </h1>
                    <div className="auth-error">{error}</div>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`page-bg ${theme}`}>
            <div className="profile-container">
                <h1 className="profile-title">
                    <FaUserCircle style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    My Profile
                </h1>
                <div className="profile-info">
                    <div><strong>Username:</strong> {profile.username}</div>
                    <div><strong>Email:</strong> {profile.email}</div>
                    <div>
                        <strong>Selected Courses:</strong>{' '}
                        {profile.courses && profile.courses.length > 0 ? profile.courses.join(', ') : 'None'}
                    </div>
                    <div><strong>Total Quizzes Taken:</strong> {profile.totalQuizzes ?? 0}</div>
                    <div><strong>Best Score:</strong> {profile.bestScore ?? 0}</div>
                    <div>
                        <strong>Last Attempted Quiz:</strong>{' '}
                        {profile.lastAttempt ? new Date(profile.lastAttempt).toLocaleString() : 'Never'}
                    </div>
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
                <button className="leaderboard-btn" onClick={handleLeaderboard}>
                    View Leaderboard
                </button>

                {myContests.length > 0 && (
                    <div className="my-contests-section">
                        <h2 style={{ marginTop: '2rem', fontSize: '1.2rem' }}>My Created Contests</h2>
                        <div
                            className="my-contests-table-wrapper"
                            style={{
                                maxHeight: myContests.length > 8 ? '480px' : 'none',
                                overflowY: myContests.length > 8 ? 'auto' : 'visible'
                            }}
                        >
                            <table className="my-contests-table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Leaderboard</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myContests.map(contest => (
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
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;