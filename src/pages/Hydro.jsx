import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import '../styles/GlobalStyles.css';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Hydro = () => {
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const weatherDoc = await db.collection('weather').doc('Jammu').get();

            if (weatherDoc.exists) {
                const result = weatherDoc.data();
                console.log('result:', result);

                setWeatherData(result);
            } else {
                setError('Weather data not found');
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="main-content">
            <h1>Dashboard</h1>
            <div className="dashboard">
                {loading && <p className="loading">Loading weather data....</p>}
                {error && <p className="error">Error: {error}</p>}
                {Object.keys(weatherData).length > 0 && (
                    <div className="weather-data">
                        <h2>Weather Data:</h2>
                        <div className="data-row">
                            <div className="data-column">
                                <p>Date: {weatherData.Date}</p>
                                <p>Time: {weatherData.Time}</p>
                                <p>Temperature: {weatherData.Temperature}°C</p>
                                <p>Humidity: {weatherData.Humidity}%</p>
                                {/* Add more fields as needed */}
                            </div>
                            <div className="data-column">
                                <p>Nitrogen Value: {weatherData['Nitrogen Value']}</p>
                                <p>Phosphorous Value: {weatherData['Phosphorous Value']}</p>
                                <p>Potassium Value: {weatherData['Potassium Value']}</p>
                                {/* Add more fields as needed */}
                            </div>
                            <div className="data-column">
                                <p>Distance: {weatherData.Distance}</p>
                                <p>Nutrient Level: {weatherData['Nutrient Level']}</p>
                                <p>pH Value: {weatherData['PH Value']}</p>
                                {/* Add more fields as needed */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hydro;
