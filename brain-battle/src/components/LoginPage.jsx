import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegisterPage.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LoginPage = ({ theme }) => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Redirect to category page if already logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post(
                `${BACKEND_URL}/api/login`,
                { email, password },
                { withCredentials: true }
            );
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Network error');
            }
        }
    };

    return (
        <div className={`login-register-container ${theme}`}>
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username or Email"
                    value={email}
                    onChange={e => setemail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                {error && <div className="auth-error">{error}</div>}
                <div className="register-link-container">
                    <span>Don't have an account? </span>
                    <button
                        type="button"
                        className="register-link-btn"
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;