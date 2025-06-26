import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NotFound = ({ theme = 'light', onToggleTheme }) => {
    const navigate = useNavigate();
    return (
        <div className={`page-bg notfound-container ${theme}`} style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404 Page Not Found</h1>
            <button
                style={{
                    padding: '0.8rem 2rem',
                    fontSize: '1.1rem',
                    border: 'none',
                    borderRadius: '2rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    background: '#4f8cff',
                    color: '#fff',
                    transition: 'background 0.2s',
                    marginBottom: '1.5rem'
                }}
                onClick={() => navigate('/')}
            >
                Back to Home
            </button>
            {onToggleTheme && (
                <button
                    style={{
                        padding: '0.6rem 1.5rem',
                        fontSize: '1rem',
                        border: 'none',
                        borderRadius: '2rem',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        background: theme === 'dark' ? '#fff' : '#181c24',
                        color: theme === 'dark' ? '#181c24' : '#fff',
                        transition: 'background 0.2s, color 0.2s'
                    }}
                    onClick={onToggleTheme}
                >
                    Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
            )}
        </div>
    );
};

export default NotFound;