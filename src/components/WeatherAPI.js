// weatherApi.js

import { useState, useEffect } from 'react';

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jammu'; //Fetching data through rapid api for testing. Change to custom api for production.
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { weatherData, loading, error };
};

export default useWeatherData;
