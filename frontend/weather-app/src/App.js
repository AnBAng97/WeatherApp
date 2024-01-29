import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './views/searchBar/SearchBar';
import MainWeatherCard from './views/mainWeatherCard/MainWeatherCard';
import Time from './views/timestamp/Time';
import WeatherForecast from './views/weatherForecast/WeatherForecast';
import { useMediaQuery } from 'react-responsive'


function App() {
  const endpoint = 'http://localhost:8080/api';
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const maxForecastDays = 10;

  //Load current location weather on first load
  useEffect(() => {
    const getCurLocationWeather = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherByCoords(position.coords.latitude, position.coords.longitude);
        getForecastByCoords(position.coords.latitude, position.coords.longitude);
      }
      );
    }

    const getWeatherByCoords = async (latitude, longitude) => {
      try {
        const response = await axios.get(`${endpoint}/weather/${latitude},${longitude}`);

        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const getForecastByCoords = async (latitude, longitude) => {
      try {
        const response = await axios.get(`${endpoint}/forecast/${latitude},${longitude}/${maxForecastDays}`);

        setWeatherForecast(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getCurLocationWeather();
  }, []);

  useEffect(() => {
    getWeather();
    getWeatherForecast();
  }, [city])

  const getWeather = async (coords) => {
    try {
      if (city) {
        const response = await axios.get(`${endpoint}/weather/${city}`);
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getWeatherForecast = async (coords) => {
    try {
      if (coords && maxForecastDays) {
        const response = await axios.get(`${endpoint}/forecast/${coords}/${maxForecastDays}`);
        setWeatherForecast("coords" + response.data);
        return;
      }
      if (city && maxForecastDays) {
        const response = await axios.get(`${endpoint}/forecast/${city}/${maxForecastDays}`);
        setWeatherForecast(response.data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  const cityCallback = (city) => {
    setCity(city);
  };

  return (
    <>
      <div className="background-container">
        <div className="background-image">
          <div className="content-container">
            <div style={{
              display: 'flex',
            }}>
              <SearchBar cityCallback={cityCallback} />
              {isDesktop && <Time />}
            </div>

            {weatherData
              && (<MainWeatherCard weatherToday={weatherData} />)}
            {weatherForecast
              && (<WeatherForecast weatherForecast={weatherForecast} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
