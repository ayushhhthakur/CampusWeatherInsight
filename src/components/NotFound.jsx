// NotFound.jsx

import React from 'react';
import '../css/NotFound.css'; // Import the CSS file for styling
import notFound from '../assets/notfoundman.png'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 style={{
          fontSize: '3em',
          color: '#555',
        }}>404 - Not Found</h1>
        <p style={{
          fontSize: '1.2em',
          color: '#777',
        }}>Oops! The page you are looking for is not available.</p>
        <img
          src={notFound}
          className="not-found-image"
        />
      </div>
    </div>
  );
};

export default NotFound;