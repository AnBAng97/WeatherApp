// WeatherForecast.js
import React, { useState } from 'react';
import styles from './WeatherForecast.module.css'
import { useMediaQuery } from 'react-responsive'

function WeatherForecast(props) {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const weatherForecast = props.weatherForecast;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleDays = isDesktop? 4 : 10;

  const backIcon = 'https://i.ibb.co/S78Y6br/back-icon.png'
  const nextIcon = 'https://i.ibb.co/6gTFtc8/next-icon.png'


  const forecastData = weatherForecast.forecast.forecastday;

  const visibleDays = forecastData.slice(currentIndex, currentIndex + maxVisibleDays);

  const handleNextClick = () => {
    if (currentIndex === forecastData.length - maxVisibleDays) return;

    const nextIndex = currentIndex + 1 < forecastData.length ? currentIndex + 1 : 0;

    setCurrentIndex(nextIndex);
  };

  const handleBackClick = () => {
    if (currentIndex === 0) return;

    const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : forecastData.length - 1;

    setCurrentIndex(prevIndex);
  };

  return (
    <div className={isDesktop ? styles.weatherForecast : styles.weatherForecastMobile}>
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
          {isDesktop && <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img  src={backIcon} alt='back_btn' className={styles.button}
              onClick={handleBackClick} />
          </div>}

          <div className={isDesktop ? styles.forecastItems : styles.forecastItemsMobile}>
            {visibleDays.map((forecast, index) => (
              <div key={index} className={styles.forecastItem}>
                <div className={styles.data}>
                  {/* {day?.condition?.icon && <img className={styles.weatherImg} src={day.condition.icon} alt="Weather Icon" />} */}

                  <img className={styles.weatherImg} src={forecast.day.condition.icon} alt={forecast.day.condition.text}></img>
                  <span className={styles.temperature}>{forecast.day.avgtemp_c}&deg;C</span>
                </div>
                <span className={styles.condition}>{forecast.day.condition.text}</span>
                <span className={styles.date}>{forecast.date}</span>
              </div>
            ))}
          </div>

          {isDesktop && <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img  src={nextIcon} alt='next_btn' className={styles.button}
              onClick={handleNextClick} />
          </div>}
        </div>
      </div>

    </div>
  );
};

export default WeatherForecast;
