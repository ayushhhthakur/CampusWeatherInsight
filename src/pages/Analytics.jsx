import React, { useState, useEffect } from 'react';
import '../styles/Analytics.css';
import '../styles/GlobalStyles.css';

const Analytics = () => {
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
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Temperature</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {loading ? 'Loading...' : `${weatherData?.temp || 'N/A'}`}
                <small className="text-body-secondary fw-light">°C</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li> Clouds: {loading ? 'Loading...' : `${weatherData?.cloud_pct || 'N/A'}`} %</li>
                <li>Min Temp: {loading ? 'Loading...' : `${weatherData?.min_temp || 'N/A'}`} °C</li>
                {/* Add other weather-related information here */}
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Get Weather Updates
              </button>
            </div>
          </div>
        </div>
        {/* Add other cards as needed */}
      </div>
    </div>
  );
};

export default Analytics;
