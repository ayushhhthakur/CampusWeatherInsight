import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kishtwar';
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
    <div>
      <h1>Dashboard</h1>
      {loading && <p>Loading weather data...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <h2>Weather Data:</h2>
          <p>Clouds: {weatherData.cloud_pct}%</p>
          <p>Temperature: {weatherData.temp}°C</p>
          <p>Feels Like: {weatherData.feels_like}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Min Temperature: {weatherData.min_temp}°C</p>
          <p>Max Temperature: {weatherData.max_temp}°C</p>
          <p>Wind Speed: {weatherData.wind_speed} m/s</p>
          <p>Wind Degrees: {weatherData.wind_degrees}°</p>
          <p>Sunrise: {new Date(weatherData.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(weatherData.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
