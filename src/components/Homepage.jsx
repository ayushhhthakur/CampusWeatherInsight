// Homepage.js

import React from 'react';
import useWeatherData from './weatherApi';
import '../css/Homepage.css';

const Homepage = () => {
    const { weatherData, loading, error } = useWeatherData();

    //   if (loading) {
    //     return <p>Loading...</p>;
    //   }

    //   if (error) {
    //     return <p>Error: {error}</p>;
    //   }

    const gotoWeather = () => {
        window.location.href = '/weather';
    }
    return (
        <>
            <div className="weather-box">
                <div className="weather-box-left">
                    <img src="" alt="" />
                </div>
                <div className="weather-box-right">
                    <div className="weather-box-right-top">
                        <div className="weather-temp">
                        <h5>Temperature: </h5><p>{weatherData.temp} °C</p>
                        </div>
                        <hr />
                        <div className="weather-clouds">
                        <h5>Clouds: </h5><p>{weatherData.cloud_pct} %</p>
                        </div>
                        <hr />
                    </div>
                    <div className="weather-box-right-bottom">
                        <div className="weather-humidity">
                        <h5>Humidity: </h5><p>{weatherData.humidity} %</p>
                        </div>
                        <hr />
                        <di className="weather-wind-speed">
                        <h5>Wind: </h5><p>{weatherData.wind_speed} Km/h</p>
                        </di>
                        <hr />
                    </div>
                    <button onClick={gotoWeather}>See More</button>
                </div>

            </div>
        </>
    );
};

export default Homepage;
