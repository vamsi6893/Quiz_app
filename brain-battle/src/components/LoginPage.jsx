import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegisterPage.css';

const BACKEND_URL = "https://quiz-backend-xbp8.onrender.com";

const LoginPage = ({ theme }) => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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


    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                const res = await axios.post(
                    `${BACKEND_URL}/api/isAuthenticated`,
                    { token },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        withCredentials: true,
                    }
                );

                console.log(res)

                if (res.data.authenticated) {
                    navigate('/');
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    localStorage.removeItem('token');
                    navigate('/login'); // redirect if not authenticated
                }
            } catch (err) {
                console.error('Auth check failed:', err);
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                navigate('/login'); // redirect if error
            }
        };

        verifyToken();
    }, [navigate]);


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