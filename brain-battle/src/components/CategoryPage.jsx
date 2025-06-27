import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import axios from 'axios';
// import java from '../iages/java.png';
const categories = [
    { label: 'Java', value: 'java', img: 'java.png' },
    { label: 'C', value: 'c', img: 'c.png' },
    { label: 'MongoDB', value: 'mongodb', img: 'mongodb.png' },
    { label: 'Python', value: 'python', img: 'python.png' },
];

const CategoryPage = ({ theme = 'light' }) => {
    const navigate = useNavigate();
  const [authenticated,setIsAuthenticated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        // If not logged in, redirect to login
        if (!token) {
            navigate('/login');
        }
        // If already logged in, stay on this page
    }, [navigate]);

    const handleSelect = (course) => {
        navigate('/instructions', { state: { course } });
    };

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
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
                    setIsAuthenticated(true);
                } else {
                    localStorage.removeItem('token');
                     setIsAuthenticated(false);
                    navigate('/login'); 
                   
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
        <div className={`page-bg category-container ${theme}`}>
            <div className="category-body">
                <h2 className="category-title">Select a Quiz Topic</h2>
                <div className="category-card-list">
                    {categories.map(cat => (
                        <div
                            key={cat.value}
                            className="category-card"
                            onClick={() => handleSelect(cat.value)}
                            tabIndex={0}
                            role="button"
                            aria-label={`Select ${cat.label} quiz`}
                        >
                            <img src={cat.img} alt={cat.label} className="category-card-img" />
                            <span className="category-card-label">{cat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;