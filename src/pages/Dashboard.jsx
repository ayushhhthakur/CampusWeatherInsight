import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import '../styles/GlobalStyles.css';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'src/data/data.json';

  //     try {
  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         throw new Error(`Request failed with status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       setWeatherData(result);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);


  
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
  
  // Filter data based on the selected date
  const filteredData = weatherData?.filter((dayData) => dayData.date === selectedDate);

  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <div className="dashboard">
        {/* Date picker component */}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        {loading && <p className="loading...">Loading weather data....</p>}
        {error && <p className="error">Error: {error}</p>}
        {filteredData && filteredData.length > 0 && (
          <div className="weather-data">
            <h2>Weather Data for {selectedDate}:</h2>
            <div className="data-row">
              <div className="data-column">
                <p>Temperature: {filteredData[0].temp}°C</p>
              </div>
              <div className="data-column">
                <p>Feels Like: {filteredData[0].feels_like}°C</p>
              </div>
              {/* ... other weather details */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
