// WeatherForecast.js
import React, { useState } from 'react';
import styles from './WeatherForecast.module.css'

function WeatherForecast(props) {
  const weatherForecast = props.weatherForecast;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleDays = 4;
  const weatherImg = "https://cdn.weatherapi.com/weather/64x64/day/116.png"

  // const forecastData = [
  //   { date: '2024-01-15', temperature: 25, condition: 'Sunny' },
  //   { date: '2024-01-16', temperature: 22, condition: 'Partly Cloudy' },
  //   { date: '2024-01-17', temperature: 18, condition: 'Cloudy' },
  //   { date: '2024-01-18', temperature: 20, condition: 'Mostly Clear' },
  //   { date: '2024-01-19', temperature: 15, condition: 'Rainy' },
  //   { date: '2024-01-20', temperature: 19, condition: 'Clear' },
  //   { date: '2024-01-21', temperature: 23, condition: 'Sunny' },
  //   { date: '2024-01-22', temperature: 21, condition: 'Partly Cloudy' },
  //   { date: '2024-01-23', temperature: 17, condition: 'Cloudy' },
  //   { date: '2024-01-24', temperature: 18, condition: 'Mostly Clear' },
  // ];
  const forecastData = weatherForecast.forecast.forecastday;
  console.log("forecastData" + forecastData[1].date);

  const visibleDays = forecastData.slice(currentIndex, currentIndex + maxVisibleDays);

  const handleNextClick = () => {
    if (currentIndex == forecastData.length - maxVisibleDays) return;

    const nextIndex = currentIndex + 1 < forecastData.length ? currentIndex + 1 : 0;
    // console.log('currentIndex' + currentIndex);
    // console.log('nextIndex' + nextIndex);

    setCurrentIndex(nextIndex);
  };

  const handleBackClick = () => {
    if (currentIndex == 0) return;


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
        marginTop: 16,
        marginLeft: 16
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

          <div className={styles.forecastItems}>
            {visibleDays.map((forecast, index) => (
              <div key={index} className={styles.forecastItem}>
                <div className={styles.data}>
                {/* {day?.condition?.icon && <img className={styles.weatherImg} src={day.condition.icon} alt="Weather Icon" />} */}

                  <img className={styles.weatherImg} src={forecast.day.condition.icon}></img> 
                  <span className={styles.temperature}>{forecast.day.avgtemp_c}&deg;C</span>
                </div>
                <span className={styles.condition}>{forecast.day.condition.text}</span>
                <span className={styles.date}>{forecast.date}</span>
              </div>
            ))}
          </div>

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
