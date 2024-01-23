import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './views/searchBar/SearchBar';
import Timestamp from './views/timestamp/Timestamp'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/weather/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
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
    //       <h2>Weather in {city}</h2>
    //       <p>Temperature: {weatherData.current.temp_c} °C</p>
    //       <p>Description: {weatherData.current.condition.text}</p>
    //     </div>
    //   )}
    // </div>
    // <>
    //   <div className="background-container">
    //     {/* Background Image */}
    //     <div className="background-image"></div>

    //     {/* Centered Rectangle with Shadow
    //   <div className="container">
    //     <div className="rectangle"></div>
    //   </div> */}
    //   </div>
      

    // </>
    <Timestamp>
        
        </Timestamp>
  );
}

export default App;
