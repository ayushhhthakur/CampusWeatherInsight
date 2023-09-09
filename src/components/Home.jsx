import React, { useState, useEffect } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    {/* Replace with the URL of your server endpoint that fetches weather data. */}
    const apiUrl = '/api/weather';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Real-Time Weather Data</h1>
      {loading ? (
        <p className="loading-message">Loading weather data...</p>
      ) : error ? (
        <p className="error-message">Error fetching weather data</p>
      ) : (
        <div className="weather-data">
          <p>Temperature: {weatherData.temp}°C</p>
          <p>AQI: {weatherData.aqi}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          {/* Other weather data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default Home;
