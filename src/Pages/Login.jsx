import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Function to display the popup
  const displayPopup = () => {
    setShowPopup(true);
  };

  // Use the useNavigate hook to get access to the navigate function
  const navigate = useNavigate();

  // Function to reset form values
  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
    };

    try {
      // Set loading to true when starting the login request
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      console.log(credentials)

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        console.log('Login successful');
        setLoggedIn(true);
        console.log(token)
        // Use the navigate function to navigate to '/admin'
        navigate('/admin');
      } else {
        console.log('Login failed. Incorrect credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      displayPopup();
    } finally {
      // Set loading back to false, whether the login succeeded or failed
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    // Reset the form when the popup is closed
    resetForm();
  };

  return (
    <>
      <div className="alert-bar" role="alert" style={{
        textAlign: 'center',
        background: 'none',
        marginBottom: '20px',
      }}>
        For Admin Use Only
      </div>
      <div className="card-container">
        <div className="card">
          <a className='login'>Login</a>
          <div className="inputBox">
            <input
              type="text"
              id="usernameInput"
              required="required"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="user">Username</span>
          </div>

          <div className="inputBox">
            <input
              type="password"
              id="passwordInput"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
          </div>
          {/* Disable the button while loading */}
          <button onClick={handleLogin} className="enter" disabled={loading}>
            {loading ? 'Loading...' : 'Enter'}
          </button>
          {showPopup && (
            <div className={`popup ${showPopup ? 'show' : ''}`}>
              {/* Your popup content goes here */}
              <p>Opps!! Error occurred during login!</p>
              <p>Please try again after sometine.</p>
              <button className='close-btn' onClick={closePopup}>Close</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
