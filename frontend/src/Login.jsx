import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:7000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                // In a real app, store token/user info here
                // localStorage.setItem('user', username); 
                navigate('/home', { state: { username } }); // Pass username to home
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-header">
                <h1>Welcome Back</h1>
                <p>Enter your credentials to access your account</p>
            </div>

            <div className="auth-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Username / Email</label>
                        <div className="input-wrapper">
                            <FiMail className="input-icon" />
                            <input
                                type="text"
                                className="form-input"
                                placeholder="you@example.com"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <div className="input-wrapper">
                            <FiLock className="input-icon" />
                            <input
                                type="password"
                                className="form-input"
                                placeholder="........"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <a href="#" className="forgot-password">Forgot password?</a>

                    <button type="submit" className="btn-primary">
                        Sign In <FiArrowRight />
                    </button>
                </form>

                <div className="auth-footer">
                    Don't have an account? <Link to="/register">Sign up</Link>
                </div>
            </div>

            <div className="connect-hint">
                Connect to your Node.js backend at <span>localhost:7000</span>
            </div>
        </div>
    );
}

export default Login;
