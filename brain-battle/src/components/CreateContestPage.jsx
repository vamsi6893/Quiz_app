import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateContestPage.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const CreateContestPage = ({ theme }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creator, setCreator] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleOptionChange = (idx, value) => {
        const updated = [...options];
        updated[idx] = value;
        setOptions(updated);
    };

    const handleAddQuestion = () => {
        setError('');
        if (
            !questionText.trim() ||
            options.some(opt => !opt.trim())
        ) {
            setError('Please fill all question fields and options.');
            return;
        }
        setQuestions([
            ...questions,
            {
                question: questionText,
                options: [...options],
                answer,
            },
        ]);
        setQuestionText('');
        setOptions(['', '', '', '']);
        setAnswer(0);
    };

    const handleRemoveQuestion = (idx) => {
        setQuestions(questions.filter((_, i) => i !== idx));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!title.trim() || !description.trim() || !creator.trim() || questions.length === 0) {
            setError('Please fill all fields and add at least one question.');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(`${BACKEND_URL}/api/contest`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    description,
                    creator,
                    questions,
                }),
            });
            const data = await res.json();
            if (res.ok && data.contestId) {
                navigate(`/contest-link/${data.contestId}`);
            } else {
                setError(data.error || 'Failed to create contest.');
            }
        } catch {
            setError('Network error.');
        }
        setLoading(false);
    };

    return (
        <div className={`create-contest-container page-bg ${theme}`}>
            <main className="create-contest-main">
                <h1 className="create-contest-title"> Create Contest</h1>
                <form className="create-contest-form" onSubmit={handleSubmit} autoComplete="off">
                    <input
                        type="text"
                        placeholder="Contest Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={creator}
                        onChange={e => setCreator(e.target.value)}
                        required
                    />
                    <hr />
                    <div className="question-block">
                        <input
                            type="text"
                            placeholder="Question"
                            value={questionText}
                            onChange={e => setQuestionText(e.target.value)}
                        />
                        {options.map((opt, idx) => (
                            <div className="option-row" key={idx}>
                                <input
                                    type="text"
                                    placeholder={`Option ${idx + 1}`}
                                    value={opt}
                                    onChange={e => handleOptionChange(idx, e.target.value)}
                                />
                                <label>
                                    <input
                                        type="radio"
                                        name="correct"
                                        checked={answer === idx}
                                        onChange={() => setAnswer(idx)}
                                    /> Correct
                                </label>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="add-question-btn"
                            onClick={handleAddQuestion}
                        >
                            ➕ Add Question
                        </button>
                    </div>
                    <div className="added-questions-list">
                        {questions.map((q, idx) => (
                            <div className="added-question-item" key={idx}>
                                <b>Q{idx + 1}:</b> {q.question}
                                <button
                                    type="button"
                                    className="remove-question-btn"
                                    onClick={() => handleRemoveQuestion(idx)}
                                    title="Remove"
                                >✖</button>
                            </div>
                        ))}
                    </div>
                    {error && <div className="auth-error">{error}</div>}
                    <button
                        type="submit"
                        className="start-button"
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : ' Create Contest'}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default CreateContestPage;