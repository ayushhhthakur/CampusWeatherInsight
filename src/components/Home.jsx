import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = '/api/weather';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        // Check if the response is HTML
        if (err.message.startsWith('Unexpected token <')) {
          setError('Invalid response format. Please check the API.');
        } else {
          setError(err.message);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div className="weather-container">
      <h1 className="weather-title">Real-Time Weather Data</h1>
      <div className={`weather-card ${loading ? 'loading' : ''}`}>
        {loading ? (
          <p className="loading-message">Loading weather data...</p>
        ) : error ? (
          <p className="error-message">Error: {error}</p>
        ) : (
          <>
            <div className="weather-data">
              <p>Temperature: {weatherData.temp}°C</p>
              <p>AQI: {weatherData.aqi}</p>
              <p>Humidity: {weatherData.humidity}%</p>
              {/* Add more weather data fields as needed */}
            </div>
            <div className="weather-image-3d">
              {/* Add 3D weather visualization here */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
