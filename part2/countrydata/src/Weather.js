import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        setCurrentWeather(response.data);
      });
  }, []);

  if (currentWeather.main) {
    return (
      <div>
        <h3>Weather in {capital}</h3>
        <div>temperature {currentWeather.main.temp} Celcius</div>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt="Describing the current weather"
        />
        <div>wind {currentWeather.wind.speed} m/s</div>
      </div>
    );
  }
  return null;
};

export default Weather;
