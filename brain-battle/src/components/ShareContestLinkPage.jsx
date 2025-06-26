import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ShareContestLinkPage.css';

const ShareContestLinkPage = ({ theme }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const link = `${window.location.origin}/contest/${id}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        alert('Link copied to clipboard!');
    };

    return (
        <div className={`create-contest-container page-bg ${theme}`}>
            <main className="create-contest-main">
                <h1 className="create-contest-title">🎉 Contest Created!</h1>
                <div className="create-contest-link">
                    Share this link:<br />
                    <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </div>
                <div className="share-link-btns">
                    <button className="start-button" onClick={handleCopy}>
                        Copy Link
                    </button>
                    <button className="start-button" onClick={() => navigate(`/contest/${id}/leaderboard`)}>
                        🏆 View Leaderboard
                    </button>
                    <button className="start-button" onClick={() => navigate('/')}>
                        Go Home
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ShareContestLinkPage;