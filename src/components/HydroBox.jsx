import React, { useState, useEffect } from 'react';
import useWeatherData from './WeatherAPI';
import '../css/HydroBox.css';
import { getWeatherCondition, getWeatherImage, getHyrdoCondition } from './Conditions';

const WeatherBox = () => {
    const { weatherData, loading, error } = useWeatherData();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // const formattedTime = time.toLocaleTimeString();

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    // let weatherCondition = 'Data Not Available'
    const hydroCondition = getHyrdoCondition(weatherData.temp, weatherData.cloud_pct);
    const weather_img = getWeatherImage(weatherData.temp, weatherData.cloud_pct);

    const gotoWeather = () => {
        window.location.href = '/hydro';
    };
    return (
        <a className="cur-con-weather-card card-module content-module lbar-panel" onClick={gotoWeather} style={{ cursor: 'pointer' }}>
            <div className="cur-con-weather-card__body">
                <div className="cur-con-weather-card__panel">
                    <h2 className="cur-con-weather-card__title">
                        Hydrophonic Data
                    </h2>
                    <p className="cur-con-weather-card__subtitle">
                        {formattedTime}
                    </p>
                    <div className="forecast-container">
                        <img src={weather_img} alt={hydroCondition} className="weather-icon" />
                        <div className="temp-container">
                            <div className="temp"><span>{weatherData.temp}°</span><span className="after-temp">C</span></div>
                            <div className="real-feel">
                                RealFeel® {weatherData.feels_like}°
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cur-con-weather-card__panel details-container">
                    <div className="spaced-content detail">
                        <span className="label">Phosphorous Value </span>
                        <span className="value">N/A</span>
                    </div>
                    <div className="spaced-content detail">
                        <span className="label">Nitrogen Value </span>
                        <span className="value">N/A</span>
                    </div>
                    <div className="spaced-content detail">
                        <span className="label">Nutrient Level </span>
                        <span className="value">N/A</span>
                    </div>
                    <div className="spaced-content detail">
                        <span className="label">PH Value</span>
                        <span className="value">N/A</span>
                    </div>
                </div>
            </div>
            <div className="spaced-content">
                <span className="phrase">{hydroCondition}</span>
                <span className="cur-con-weather-card__cta" onClick={gotoWeather}>
                    <button>
                        <a className="text">More Details</a>
                    </button>
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