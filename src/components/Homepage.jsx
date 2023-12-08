import React from 'react'
import '../css/Homepage.css'

const Homepage = () => {
  return (
    <>
    <div className="weather-box">
        <div className="weather-box-left">
            <img src="" alt="" />
        </div>
        <div className="weather-box-right">
            <div className="weather-box-right-top">
                <p>Weather</p>
                <p>Temperature</p>
            </div>
            <div className="weather-box-right-bottom">
                <p>Humidity</p>
                <p>Wind</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Homepage