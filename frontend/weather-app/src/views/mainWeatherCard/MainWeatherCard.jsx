import { useState } from 'react';
import style from './MainWeatherCard.module.css'
function MainWeatherCard(props) {
    const current = props.weatherToday.current;
    const condition = current.condition;
    const weatherImg = condition.icon;
    const city = props.weatherToday.location.name;
    var localtime = props.weatherToday.location.localtime;

    console.log(props.weatherToday)
    return (<>
        <div className={style.mainWeatherCard}>
            <div className={style.cardHeader}>
                <div className={style.cityName}>{city}</div>
                <div className={style.localTime}>Local time: {localtime.substring(localtime.indexOf(" "))}</div>
            </div>

            <div className={style.weatherGeneral}>
                <div className={style.data}>
                    <span className={style.temperature}>{current.temp_c}&deg;C</span>
                    <img className={style.weatherImg} src={weatherImg} alt={condition.text}></img>
                </div>
                <div className={style.weatherBrief}>{condition.text}, feels like {current.feelslike_c}°C</div>
            </div>

            <div className={style.detailsContainer}>
                <div className={style.details}>
                    <div className={style.property}>
                        <span className={style.propertyName}>Windspeed</span>
                        <span className={style.value}>{current.wind_kph} kph</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Wind Direction</span>
                        <span className={style.value}>{current.wind_dir}</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Pressure</span>
                        <span className={style.value}>{current.pressure_in} inch</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Precipitation</span>
                        <span className={style.value}>{current.precip_mm} mm</span>
                    </div>
                    <hr />
                </div>
                <div className={style.details}>
                    <div className={style.property}>
                        <span className={style.propertyName}>Humidity</span>
                        <span className={style.value}>{current.humidity} %</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Cloud cover</span>
                        <span className={style.value}>{current.cloud} %</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>UV</span>
                        <span className={style.value}>{current.uv}</span>
                    </div>
                    <hr />
                    <div className={style.property}>
                        <span className={style.propertyName}>Wind gust</span>
                        <span className={style.value}>{current.gust_kph} kph</span>
                    </div>
                    <hr />
                </div>
            </div>



        </div>
    </>);
}
export default MainWeatherCard