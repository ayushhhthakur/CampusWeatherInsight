import React, { useState, useEffect } from 'react';
import useWeatherData from './WeatherAPI';
import '../css/WeatherBox.css';
import { getWeatherCondition, getWeatherImage } from './Conditions';

const WeatherBox = () => {
    const { weatherData, loading, error } = useWeatherData();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    const weatherCondition = getWeatherCondition(weatherData.temp, weatherData.cloud_pct);
    const weather_img = getWeatherImage(weatherData.temp, weatherData.cloud_pct);


    const gotoWeather = () => {
        window.location.href = '/weather';
    };
  return (
    <a className="cur-con-weather-card card-module content-module lbar-panel" onClick={gotoWeather} style={{ cursor: 'pointer' }}>
    <div className="cur-con-weather-card__body">
        <div className="cur-con-weather-card__panel">
            <h2 className="cur-con-weather-card__title">
                Current Weather
            </h2>
            <p className="cur-con-weather-card__subtitle">
                {formattedTime}
            </p>
            <div className="forecast-container">
                <img src={weather_img} alt={weatherCondition} className="weather-icon" />
                <div className="temp-container">
                    <div className="temp">{weatherData.temp}°<span className="after-temp">C</span></div>
                    <div className="real-feel">
                        RealFeel® {weatherData.feels_like}°
                    </div>
                </div>
            </div>
        </div>
        <div className="cur-con-weather-card__panel details-container">
            <div className="spaced-content detail">
                <span className="label">RealFeel </span>
                <span className="value">{weatherData.feels_like}°C</span>
            </div>
            <div className="spaced-content detail">
                <span className="label">Clouds </span>
                <span className="value">{weatherData.cloud_pct}%</span>
            </div>
            <div className="spaced-content detail">
                <span className="label">Hyumdity</span>
                <span className="value">{weatherData.humidity}%</span>
            </div>
            <div className="spaced-content detail">
                <span className="label">Wind</span>
                <span className="value">{weatherData.wind_speed}km/h</span>
            </div>
        </div>
    </div>
    <div className="spaced-content">
        <span className="phrase">{weatherCondition}</span>
        <span className="cur-con-weather-card__cta" onClick={gotoWeather}>
            <a className="text">More Details</a>
            <svg className="icon-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <defs>
                    <path id="a" d="m8.495.505 5 5v.99l-5 5-.99-.99 3.805-3.806L0 6.7V5.3l11.31-.001-3.805-3.804.99-.99z"></path>
                </defs>
                <use fill="#000" fillRule="nonzero" xlinkHref="#a" transform="translate(2 3)"></use>
            </svg>
        </span>
    </div>
</a>
  )
}

export default WeatherBox