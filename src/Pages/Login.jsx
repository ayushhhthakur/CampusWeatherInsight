import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Use the useNavigate hook to get access to the navigate function
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = {
            username,
            password,
        };

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
                console.log('Login successful');
                setLoggedIn(true);

                // Use the navigate function to navigate to '/admin'
                navigate('/admin');
            } else {
                console.log('Login failed. Incorrect credentials');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
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

                        <button onClick={handleLogin} className="enter">Enter</button>
                </div>
            </div>
        </>
    );
};

export default Login;