import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Weather.css';
import Loader from '../elements/Loader';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  const { date } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = selectedDate || date;

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '84885707b3mshe6dfa9a390d9140p1b1e1djsn9ac1af6e83ea',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
      };

      const url = `https://open-weather13.p.rapidapi.com/city/landon/EN`;

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const result = await response.json();
        console.log('result:', result);

        setWeatherData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate, date]);

  let data;

  if (weatherData.temp <= 0 && weatherData.cloud_pct >= 5) {
    data = "Brrr! It's very cold. Might also rain today. Bring your snowboard for the rain slopes!";
  } else if (weatherData.temp <= 20 && weatherData.cloud_pct >= 15) {
    data = "Pleasant weather. Signs of heavy rain today. Time to practice synchronized swimming on the streets!";
  } else if (weatherData.temp <= 20 && weatherData.cloud_pct >= 20) {
    data = "Pleasant weather. Might rain cats and dogs. Grab your umbrella, or maybe a cat and a dog!";
  } else if (weatherData.temp <= 0 && weatherData.cloud_pct === 0) {
    data = "Brrr! It's very cold. No signs of rain today. Perfect weather for sunbathing in Antarctica!";
  } else if (weatherData.temp <= 15 && weatherData.cloud_pct >= 5) {
    data = "Chilly weather. Might also rain today. Time to break out the ice skates for the rainy rink!";
  } else if (weatherData.temp <= 15 && weatherData.cloud_pct === 0) {
    data = "Chilly weather. No signs of rain today. Ideal conditions for a tropical beach party!";
  } else if (weatherData.temp <= 20 && weatherData.cloud_pct === 0) {
    data = "Pleasant weather. No signs of rain today. Get ready for the indoor rain dance party!";
  } else if (weatherData.temp <= 20 && weatherData.cloud_pct >= 5) {
    data = "Pleasant weather. Might also rain today. Time to test if your umbrella can double as a parachute!";
  } else if (weatherData.temp <= 25 && weatherData.cloud_pct === 0) {
    data = "Warm weather. No signs of rain today. Get the sunscreen out; we're having a sun shower!";
  } else if (weatherData.temp <= 25 && weatherData.cloud_pct >= 0) {
    data = "Warm weather. Might also rain today. Perfect weather for a hot tub in the rain!";
  } else if (weatherData.temp <= 30 && weatherData.cloud_pct === 0) {
    data = "Hot weather. No signs of rain today. Time to see if you can fry an egg on the sidewalk!";
  } else if (weatherData.temp <= 30 && weatherData.cloud_pct >= 5) {
    data = "Hot weather. Might also rain today. Raindrops sizzling on the pavement - a summer BBQ!";
  } else if (weatherData.temp <= 35 && weatherData.cloud_pct === 0) {
    data = "Very Hot weather. No signs of rain today. Grab your surfboard; the streets are turning into a beach!";
  } else if (weatherData.temp <= 35 && weatherData.cloud_pct >= 5) {
    data = "Very Hot weather. Might also rain today. When it's so hot that even the clouds need a break!";
  } else {
    data = "No data available. Maybe the weather is on vacation too!";
  }

  return (
    <div className="main_content">
      <h2 style={{ textAlign: 'center', paddingTop: '30px' }}>Current Weather in MIET</h2>
      <div className="dashboard">
        {loading && (
          <div className='loader-container'>
            <Loader />
          </div>
        )}
        {error && <p className="error">Error: {error}</p>}
        {Object.keys(weatherData).length > 0 && (
          <div className="weather-data">
            <div className="data-row">
              <div className="data-column">
                <p>Temperature: {weatherData.temp}°C</p>
              </div>
              <div className="data-column">
                <p>Cloud Percentage: {weatherData.cloud_pct}%</p>
              </div>
              <div className="data-column">
                <p>Humidity: {weatherData.humidity}%</p>
              </div>
              <div className="data-column">
                <p>Max Temperature: {weatherData.max_temp}°C</p>
              </div>
              <div className="data-column">
                <p>Min Temperature: {weatherData.min_temp}°C</p>
              </div>
              <div className="data-column">
                <p>Sunrise: {new Date(weatherData.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div className="data-column">
                <p>Sunset: {new Date(weatherData.sunset * 1000).toLocaleTimeString()}</p>
              </div>
              <div className="data-column">
                <p>Wind Degrees: {weatherData.wind_degrees}</p>
              </div>
              <div className="data-column">
                <p>Wind Speed: {weatherData.wind_speed} Km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="display-weather-data">
        <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>
          {Object.keys(weatherData).length > 0 ? data : " "}
        </h3>
      </div>
    </div>
  );
};

export default Weather;
