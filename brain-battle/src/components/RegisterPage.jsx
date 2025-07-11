import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegisterPage.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const RegisterPage = ({ theme }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const res = await axios.post(
                `${BACKEND_URL}/api/register`,
                { username, email, password }
            );
            setSuccess('Registration successful! You can now log in.');
            setTimeout(() => navigate('/login'), 1500);
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
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
                {error && <div className="auth-error">{error}</div>}
                {success && <div className="auth-success">{success}</div>}
                <div className="login-link-container" style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <span>Already have an account? </span>
                    <button
                        type="button"
                        className="login-link-btn"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;