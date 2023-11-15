import React, { useState } from 'react';
import Modal from 'react-modal';
import './Login.css';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!validateEmail(username)) {
      setError('Invalid email address');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters');
    } else {
      
      setError('');
      setIsModalOpen(true);
    }
  };

  const validateEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="login-container">
      <h2>🔑 Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username (Email):</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}

      <span>Don't have an account? </span><Link to="/register" className='links'>Sign up</Link>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="success-popup">
          <h2>Successfully Logged in!</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
