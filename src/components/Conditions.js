function getWeatherImage(weatherData) {
    if (weatherData.temp <= 5) {
        return require('../assets/icons/1.svg');
    } else if (weatherData.temp <= 10) {
        if (weatherData.cloud_pct <= 5) {
            if (weatherData.wind_speed <= 5) {
                return require('../assets/icons/1.svg');
            } else if (weatherData.wind_speed <= 10) {
                return require('../assets/icons/2.svg');
            } else if (weatherData.wind_speed <= 15) {
                return require('../assets/icons/3.svg');
            } else if (weatherData.wind_speed <= 20) {
                return require('../assets/icons/4.svg');
            } else if (weatherData.wind_speed <= 25) {
                return require('../assets/icons/5.svg');
            } else if (weatherData.wind_speed <= 30) {
                return require('../assets/icons/6.svg');
            } else if (weatherData.wind_speed <= 35) {
                return require('../assets/icons/7.svg');
            } else if (weatherData.wind_speed <= 40) {
                return require('../assets/icons/8.svg');
            } else if (weatherData.wind_speed <= 45) {
                return require('../assets/icons/9.svg');
            } else if (weatherData.wind_speed <= 50) {
                return require('../assets/icons/10.svg');
            } else if (weatherData.wind_speed <= 55) {
                return require('../assets/icons/11.svg');
            } else if (weatherData.wind_speed <= 60) {
                return require('../assets/icons/12.svg');
            } else if (weatherData.wind_speed <= 65) {
                return require('../assets/icons/13.svg');
            } else if (weatherData.wind_speed <= 70) {
                return require('../assets/icons/14.svg');
            }
        }
    } else if (weatherData.temp <= 25 && weatherData.cloud_pct <= 5 && weatherData.wind_speed <= 5) {
        return require('../assets/icons/15.svg');
    }
    // Add more conditions as needed...

    // Default case
    return require('../default-icon.svg');
}

// Example usage
const weather_img = getWeatherImage(weatherData);
