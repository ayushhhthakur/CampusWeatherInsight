import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, onValue } from 'firebase/database';
import '../styles/GlobalStyles.css';
import '../styles/Hydro.css';


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };


const firebaseConfig = {
    apiKey: "AIzaSyApmcGF1t-mS3gqwb_cy08wUl9hQqLcinE",
    authDomain: "hydrophonic-86c7e.firebaseapp.com",
    databaseURL: "https://hydrophonic-86c7e-default-rtdb.firebaseio.com",
    projectId: "hydrophonic-86c7e",
    storageBucket: "hydrophonic-86c7e.appspot.com",
    messagingSenderId: "226532801545",
    appId: "1:226532801545:web:6fcfe119e973c75c078cd8"
  };


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dataRef = ref(db, 'UsersData/xj6rVWQ2MWgvjqgGTv6U9jsXyto2');

const Hydro = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(dataRef, (snapshot) => {
        try {
          const data = snapshot.val();
          if (data) {
            const formattedData = Object.entries(data).map(([key, value]) => ({ ...value, key }));
            setWeatherData(formattedData);
          }
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }, (error) => {
        setError(error.message);
        setLoading(false);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="main-content">
      <h1>Hydrophonic</h1>
      <div className="hydro-dashboard">
        {loading && <p className="loading">Loading weather data....</p>}
        {error && <p className="error">Error: {error}</p>}
        {weatherData.map((data, index) => (
          <div key={index} className="hydro-data">
            <h2>Weather Data: {data.Date}</h2>
            <div className="data-row">
              <div className="data-column">
                <p>Date: {data.Date}</p>
                <p>Time: {data.Time}</p>
                <p>Temperature: {data.Temperature}°C</p>
                <p>Humidity: {data.Humidity}%</p>
                {/* Add more fields as needed */}
              </div>
              <div className="data-column">
                <p>Nitrogen Value: {data['Nitrogen Value']}</p>
                <p>Phosphorous Value: {data['Phosphorous Value']}</p>
                <p>Potassium Value: {data['Potassium Value']}</p>
                {/* Add more fields as needed */}
              </div>
              <div className="data-column">
                <p>Distance: {data.Distance}</p>
                <p>Nutrient Level: {data['Nutrient Level']}</p>
                <p>pH Value: {data['PH Value']}</p>
                {/* Add more fields as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hydro;