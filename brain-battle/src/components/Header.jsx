import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = ({ theme, onToggleTheme }) => (
    <header className={`app-header ${theme}`}>
        <Link to="/" className="logo">
            <span role="img" aria-label="brain">🧠</span> Brain Battle
        </Link>
        <div className="header-links">
            <Link to="/profile" className="profile-link" title="Profile">
                <FaUserCircle />
            </Link>
            <button className="theme-toggle" onClick={onToggleTheme}>
                {theme === 'dark' ? '🌙' : '☀️'}
            </button>
        </div>
    </header>
);

export default Header;