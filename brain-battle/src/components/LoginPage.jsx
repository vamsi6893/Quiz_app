import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegisterPage.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

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
            const res = await fetch(`${BACKEND_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            console.log(data)
            if (!res.ok) {
                setError(data.message || 'Login failed');
                return;
            }
            localStorage.setItem('token', data.token);
            navigate('/'); 
        } catch (err) {
            setError('Network error');
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