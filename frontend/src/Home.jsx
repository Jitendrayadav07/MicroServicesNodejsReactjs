import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut, FiCheckCircle } from 'react-icons/fi';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || 'User';

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">Todo App</div>
                <div className="navbar-user">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FiCheckCircle color="#10b981" />
                        <span>{username}</span>
                    </div>
                    <button onClick={handleLogout} className="btn-logout">
                        <FiLogOut /> Logout
                    </button>
                </div>
            </nav>

            <div className="home-container">
                <div className="success-badge">
                    <FiCheckCircle /> Successfully authenticated
                </div>

                <h1 className="welcome-title">
                    Welcome, <span>{username}</span>!
                </h1>
                <p className="welcome-subtitle">
                    You're now logged into your Todo application.
                </p>

                <div className="steps-card">
                    <div className="steps-header">
                        <span style={{ fontSize: '1.5rem' }}>🚀</span>
                        Next Steps for Your Node.js Backend
                    </div>

                    <div className="step-list">
                        <div className="step-item">
                            <span className="step-number">1.</span>
                            <div>
                                Replace the mock auth in <span className="code-snippet">server.js</span> with your real API calls
                            </div>
                        </div>

                        <div className="step-item">
                            <span className="step-number">2.</span>
                            <div>
                                Connect to your Node.js server at <span className="code-snippet">http://localhost:8080</span>
                            </div>
                        </div>

                        <div className="step-item">
                            <span className="step-number">3.</span>
                            <div>
                                Build with: <span className="code-snippet">pack build node-todo-app --builder heroku/builder:24</span>
                            </div>
                        </div>

                        <div className="step-item">
                            <span className="step-number">4.</span>
                            <div>
                                Run with: <span className="code-snippet">docker run -p 8080:8080 node-todo-app</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
