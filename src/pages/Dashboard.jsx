// Import statements

import React, { useState, useEffect } from 'react';
import "../styles/Dashboard.css";
import '../styles/GlobalStyles.css';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
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
        setWeatherData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main-content'>
      <h1>Dashboard</h1>
      <div className='dashboard'>
        {loading && <p className="loading">Loading weather data...</p>}
        {error && <p className="error">Error: {error}</p>}
        {weatherData && (
          <div className='weather-data'>
            <h2>Weather Data:</h2>
            <div className='data-row'>
              <div className='data-column'>
                <p>Temperature: {weatherData.temp}°C</p>
              </div>
              <div className='data-column'>
                <p>Feels Like: {weatherData.feels_like}°C</p>
              </div>
              <div className='data-column'>
                <p>Humidity: {weatherData.humidity}%</p>
              </div>
            </div>
            <div className='data-row'>
              {/* <div className='data-column'>
                <p>Clouds: {weatherData.cloud_pct}%</p>
              </div> */}
              <div className='data-column'>
                <p>Min Temperature: {weatherData.min_temp}°C</p>
              </div>
              <div className='data-column'>
                <p>Max Temperature: {weatherData.max_temp}°C</p>
              </div>
              <div className='data-column'>
                <p>Wind Speed: {weatherData.wind_speed} m/s</p>
              </div>
            </div>
            <div className='data-row'>
              <div className='data-column'>
                <p>Wind Degrees: {weatherData.wind_degrees}°</p>
              </div>
              <div className='data-column'>
                <p>Sunrise: {new Date(weatherData.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div className='data-column'>
                <p>Sunset: {new Date(weatherData.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
