// AuthPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import app from './firebase';
import 'firebase/auth';
import './AuthPage.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Get the history object

  const handleLogin = async () => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push('/'); // Redirect to index page
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = async () => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push('/'); // Redirect to index page
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login or Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default AuthPage;
