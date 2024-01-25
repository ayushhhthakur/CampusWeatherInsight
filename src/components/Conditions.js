// Conditions.js

import Sun from "../assets/icons/sun.svg";
import Cloud from "../assets/icons/cloud.svg";
import Rain from "../assets/icons/cloud-rain.svg";
import sunCloudBig from "../assets/icons/sun-cloud-big.svg"
import sunCloud from "../assets/icons/sun-cloud.svg"
// import cloudRain from "../assets/icons/cloud-rain.svg"
import cloudRain2 from "../assets/icons/cloud-rain-2.svg"
// import CloudBigSmall from "../assets/icons/cloud-big-small.svg"
// import CloudLight from "../assets/icons/cloud-light.svg"
// import SunCloudRain from "../assets/icons/sun-cloud-rain.svg"
import Rain2 from "../assets/icons/cloud-rain-2.svg"
// import cloud from "../assets/icons/cloud.svg"
// import cloud from "../assets/icons/cloud.svg"
import Moon from "../assets/icons/moon.svg"
import MoonCloud from "../assets/icons/moon-cloud.svg"
import MoonClouds from "../assets/icons/moon-clouds.svg"
import MoonCloudBig from "../assets/icons/moon-cloud-big.svg"
import MoonCloudBig2 from "../assets/icons/moon-cloud-big-2.svg"
// import MoonCloudFog from "../assets/icons/moon-cloud-fog.svg"
// import MoonCloudRain from "../assets/icons/moon-cloud-rain.svg"
// import MoonCloudRainBig from "../assets/icons/moon-cloud-rain-big.svg"
// import MoonCloudLight from "../assets/icons/moon-cloud-light.svg"
// import MoonCloudLightBig from "../assets/icons/moon-cloud-light-big.svg"
// import MoonCloudSnow from "../assets/icons/moon-cloud-snow.svg"
// import MoonCloudSnowHeavy from "../assets/icons/moon-cloud-snow-heavy.svg"

const isDaytime = () => {
    const currentTime = new Date().getHours();
    return currentTime >= 5 && currentTime < 20;
};

const getWeatherCondition = (temp, cloud_pct) => {
    const isDay = isDaytime();

    if (cloud_pct === 0) {
        return getWeatherCategory(temp);
    } else if (cloud_pct <= 5) {
        return getWeatherCategory(temp);
    } else if (cloud_pct >= 10 && cloud_pct <= 50) {
        return getWeatherCategory(temp);
    } else if (cloud_pct >= 50) {
        return getWeatherCategory(temp);
    } else if (cloud_pct >= 90) {
        return getWeatherCategory(temp);
    }
};

const getHyrdoCondition = (temp, cloud_pct) => {
    if (cloud_pct === 0) {
        return gethydroCategory(temp);
    } else if (cloud_pct <= 5) {
        return gethydroCategory(temp);
    } else if (cloud_pct >= 10 && cloud_pct <= 50) {
        return gethydroCategory(temp);
    } else if (cloud_pct >= 50) {
        return gethydroCategory(temp);
    } else if (cloud_pct >= 90) {
        return gethydroCategory(temp);
    }
};

const getWeatherCategory = (temp) => {
    if (temp >= 30) return 'Hot Outside';
    if (temp >= 25) return 'Warm Weather';
    if (temp >= 20) return 'Mild Weather';
    if (temp >= 15) return 'Cool Weather';
    if (temp >= 10) return 'Chill Weather';
    if (temp >= 5) return 'Cold Outside';
    if (temp >= 0) return 'Very Cold';
};

const gethydroCategory = (temp) => {
    if (temp <= 30) return 'NO DATA AVAILABLE';
}

const getWeatherImage = (temp, cloud_pct) => {
    const isDay = isDaytime();

    if (isDay) {
        if (temp >= 35 && cloud_pct >= 0) {
            return Sun;
        } else if (temp <= 30 && cloud_pct <= 5) {
            return Sun;
        } else if (temp <= 25 && cloud_pct <= 5) {
            return Sun;
        } else if (temp <= 20 && cloud_pct <= 5) {
            return Sun;
        } else if (temp <= 15 && cloud_pct <= 5) {
            return Sun;
        } else if (temp <= 15 && cloud_pct <= 20) {
            return sunCloudBig;
        } else if (temp <= 25 && cloud_pct <= 20) {
            return sunCloudBig;
        } else if (temp <= 25 && cloud_pct <= 50) {
            return sunCloud;
        } else if (temp <= 20 && cloud_pct <= 100) {
            return sunCloudBig;
        } else if (temp <= 10 && cloud_pct <= 100) {
            return Rain2;
        } else {
            return null;
        }
    } else {
        if (temp <= 15 && cloud_pct == 0) {
            return Moon;
        } else if (temp <= 10 && cloud_pct <= 5) {
            return MoonCloud;
        } else if (temp <= 10 && cloud_pct <= 20) {
            return MoonClouds;
        } else if (temp <= 15 && cloud_pct <= 50) {
            return MoonClouds;
        } else if (temp <= 10 && cloud_pct <= 80) {
            return MoonCloudBig;
        } else if (temp <= 10 && cloud_pct <= 100) {
            return MoonCloudBig2;
        } else {
            return null;
        }
    }
};

export { getWeatherCondition, getWeatherImage, getHyrdoCondition };
