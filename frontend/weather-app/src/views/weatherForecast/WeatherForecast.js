// WeatherForecast.js
import React, { useState } from 'react';
import styles from './WeatherForecast.module.css'

function WeatherForecast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleDays = 4;
  const weatherImg = "https://cdn.weatherapi.com/weather/64x64/day/116.png"

  const forecastData = [
    { date: '2024-01-15', temperature: 25, condition: 'Sunny' },
    { date: '2024-01-16', temperature: 22, condition: 'Partly Cloudy' },
    { date: '2024-01-17', temperature: 18, condition: 'Cloudy' },
    { date: '2024-01-18', temperature: 20, condition: 'Mostly Clear' },
    { date: '2024-01-19', temperature: 15, condition: 'Rainy' },
    { date: '2024-01-20', temperature: 19, condition: 'Clear' },
    { date: '2024-01-21', temperature: 23, condition: 'Sunny' },
    { date: '2024-01-22', temperature: 21, condition: 'Partly Cloudy' },
    { date: '2024-01-23', temperature: 17, condition: 'Cloudy' },
    { date: '2024-01-24', temperature: 18, condition: 'Mostly Clear' },
  ];

  const visibleDays = forecastData.slice(currentIndex, currentIndex + maxVisibleDays);

  const handleNextClick = () => {
    if (currentIndex == forecastData.length - maxVisibleDays) return;

    const nextIndex = currentIndex + 1 < forecastData.length ? currentIndex + 1 : 0;
    console.log('currentIndex' + currentIndex);
    console.log('nextIndex' + nextIndex);

    setCurrentIndex(nextIndex);
  };

  const handleBackClick = () => {
    if (currentIndex ==  0) return;


    const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : forecastData.length - 1;
    console.log('currentIndex' + currentIndex);
    console.log('prevIndex' + prevIndex);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className={styles.weatherForecast}>
      <p style={{
        textAlign: 'start',
        fontSize: 20,
        marginTop:0
      }}>10-Day Weather Forecast</p>
      <div className={styles.forecastList}>
        <div
          className={styles.slideContainer}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src={weatherImg} alt='back_btn' className={styles.button}
             onClick={handleBackClick} />
          </div>

          {visibleDays.map((day, index) => (
            <div key={index} className={styles.forecastItem}>
              <div className={styles.data}>
                <img className={styles.weatherImg} src={weatherImg}></img>
                <span className={styles.temperature}>+11</span>
              </div>
              <p className={styles.condition}>{day.condition}</p>
              <p className={styles.date}>{day.date}</p>
            </div>
          ))}

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src={weatherImg} alt='back_btn' className={styles.button} onClick={handleNextClick} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WeatherForecast;
