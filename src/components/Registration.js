import React, { useState } from 'react';
import Modal from 'react-modal';
import './Registration.css'; 
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username.trim()) {
      setError('Username must not be empty');
    } else if (!validateEmail(email)) {
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
    <div className="registration-container">
      <h2>🌟 Join Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Sign up</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}

      <span>Already have an account? </span><Link to="/login" className='links'>Log in</Link>
      
      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="success-popup">
          <h2>Successfully Registered!</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Registration;
