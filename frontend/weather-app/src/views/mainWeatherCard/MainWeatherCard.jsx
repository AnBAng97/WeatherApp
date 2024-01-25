import { useState } from 'react';
import style from './MainWeatherCard.module.css'
function MainWeatherCard() {
    const [city, setCity] = useState("Hanoi");
    const weatherImg = "https://cdn.weatherapi.com/weather/64x64/day/116.png"
    const weatherAlt = "cloudy day"

    return (<>
        <div className={style.mainWeatherCard}>
            <div className={style.cardHeader}>
                <div className={style.cityName}>{city}</div>
                <div className={style.localTime}>Local time: {new Date().toTimeString().substring(0, 8)}</div>
            </div>

            <div className={style.weatherGeneral}>
                <div className={style.data}>
                    <span className={style.temperature}>+11</span>
                    <img className={style.weatherImg} src={weatherImg} alt={weatherAlt}></img>
                </div>
                <div className={style.weatherBrief}>Lightly cloudy, feels like +10°</div>
            </div>

            <div className={style.detailsContainer}>
                <div className={style.details}>
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                </div>
                <div className={style.details}>
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>19.1kph</span>
                    </div>
                    <hr />
                </div>
            </div>



        </div>
    </>);
}
export default MainWeatherCard