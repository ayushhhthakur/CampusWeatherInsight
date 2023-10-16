import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import '../styles/GlobalStyles.css';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jammu';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7b3b076a32mshc6d4e9b62e1ca07p146a55jsnbc870d1b777c',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const result = await response.json();
        console.log('result:', result);

        setWeatherData(result);
        console.log('weatherData:', weatherData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <div className="dashboard">
        {loading && <p className="loading...">Loading weather data....</p>}
        {error && <p className="error">Error: {error}</p>}
        {weatherData.length > 0 && (
          <div className="weather-data">
            <h2>Weather Data:</h2>
            {weatherData.map((dayData, index) => (
              <div key={index} className="data-row">
                <div className="data-column">
                  <p>Date: {dayData.date}</p>
                </div>
                <div className="data-column">
                  <p>Temperature: {dayData.temp}°C</p>
                </div>
                <div className="data-column">
                  <p>Feels Like: {dayData.feels_like}°C</p>
                </div>
                <div className="data-column">
                  <p>Cloud Percentage: {dayData.cloud_pct}%</p>
                </div>
                <div className="data-column">
                  <p>Humidity: {dayData.humidity}%</p>
                </div>
                <div className="data-column">
                  <p>Max Temperature: {dayData.max_temp}°C</p>
                </div>
                <div className="data-column">
                  <p>Min Temperature: {dayData.min_temp}°C</p>
                </div>
                <div className="data-column">
                  <p>Sunrise: {new Date(dayData.sunrise * 1000).toLocaleTimeString()}</p>
                </div>
                <div className="data-column">
                  <p>Sunset: {new Date(dayData.sunset * 1000).toLocaleTimeString()}</p>
                </div>
                <div className="data-column">
                  <p>Wind Degrees: {dayData.wind_degrees}</p>
                </div>
                <div className="data-column">
                  <p>Wind Speed: {dayData.wind_speed}</p>
                </div>
                {/* ... other weather details */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
