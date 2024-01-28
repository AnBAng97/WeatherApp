import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './views/searchBar/SearchBar';
import Timestamp from './views/timestamp/Time'
import MainWeatherCard from './views/mainWeatherCard/MainWeatherCard';
import Time from './views/timestamp/Time';
import WeatherProperty from './views/mainWeatherCard/WeatherProperty';
import WeatherForecast from './views/weatherForecast/WeatherForecast';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const maxForecastDays = 10;

  //Load current location weather on first load
  useEffect(() => {
    const getCurLocationWeather = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        getWeatherByCoords(position.coords.latitude, position.coords.longitude);
        getForecastByCoords(position.coords.latitude, position.coords.longitude);
      }
      );
    }

    const getWeatherByCoords = async (latitude, longitude) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/weather/${latitude},${longitude}`);

        setWeatherData(response.data);
        console.log("getWeatherByCoords " + response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const getForecastByCoords = async (latitude, longitude) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/forecast/${latitude},${longitude}/${maxForecastDays}`);

        setWeatherForecast(response.data);
        console.log("getWeatherByCoords " + response.data);
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
      // if (coords != null) {
      //   console.log(coords)
      //   const response = await axios.get(`http://localhost:8080/api/weather/${coords}`);
      //   setWeatherForecast("coords" + response.data);
      //   return;
      // }

      const response = await axios.get(`http://localhost:8080/api/weather/${city}`);
      setWeatherData(response.data);

      console.log()
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getWeatherForecast = async (coords) => {
    try {
      if (coords != null) {
        console.log(coords)
        const response = await axios.get(`http://localhost:8080/api/forecast/${coords}/${maxForecastDays}`);
        setWeatherForecast("coords" + response.data);
        return;
      }
      const response = await axios.get(`http://localhost:8080/api/forecast/${city}/${maxForecastDays}`);
      setWeatherForecast(response.data);
      console.log(weatherForecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  const cityCallback = (city) => {
    setCity(city);
  };

  return (
    // <div>
    //   <h1>Weather App</h1>
    //   <input
    //     type="text"
    //     value={city}
    //     onChange={(e) => setCity(e.target.value)}
    //     placeholder="Enter city"
    //   />
    //   <button onClick={getWeather}>Get Weather</button>

    //   {weatherData && (
    //     <div>
    //       <h2>Weather in {weatherData.location.name}</h2>
    //       <p>Temperature: {weatherData.current.temp_c} °C</p>
    //       <p>Description: {weatherData.current.condition.text}</p>
    //     </div>
    //   )}
    // </div>
    <>
      <div className="background-container">
        <div className="background-image">
          <div className="content-container">
            <div style={{
              display: 'flex',
            }}>
              <SearchBar cityCallback={cityCallback} />
              <Time />
              {/* <p>{city}</p> */}
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
