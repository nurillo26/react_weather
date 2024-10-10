import React from 'react';

import styles from './CurrentWeatherBlock.module.css';
import { ICurrentWeatherData } from '../../interfaces/CurrentWeatherDataI';
import { formatTemp } from '../../utils/formatTemp';

interface CurrentWeatherBlockProps {
  weatherData: ICurrentWeatherData;
}

const CurrentWeatherBlock: React.FC<CurrentWeatherBlockProps> = ({ weatherData }) => {
  const currentDateFormat = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

    return date.toLocaleDateString('ru-RU', options);
  };

  return (
    <div className={styles.current_weather_wrap}>
      <div className={styles.weather_place}>
        <svg
          className={styles.geo_icon}
          width="16"
          height="16"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6 8.8C12.6 9.75478 12.2207 10.6705 11.5456 11.3456C10.8705 12.0207 9.95479 12.4 9.00001 12.4C8.04523 12.4 7.12956 12.0207 6.45442 11.3456C5.77929 10.6705 5.40001 9.75478 5.40001 8.8C5.40001 7.84522 5.77929 6.92955 6.45442 6.25441C7.12956 5.57928 8.04523 5.2 9.00001 5.2C9.95479 5.2 10.8705 5.57928 11.5456 6.25441C12.2207 6.92955 12.6 7.84522 12.6 8.8ZM11.4 8.8C11.4 8.16348 11.1472 7.55303 10.6971 7.10294C10.247 6.65286 9.63653 6.4 9.00001 6.4C8.36349 6.4 7.75304 6.65286 7.30295 7.10294C6.85287 7.55303 6.60001 8.16348 6.60001 8.8C6.60001 9.43652 6.85287 10.047 7.30295 10.4971C7.75304 10.9471 8.36349 11.2 9.00001 11.2C9.63653 11.2 10.247 10.9471 10.6971 10.4971C11.1472 10.047 11.4 9.43652 11.4 8.8ZM14.94 14.746C16.5155 13.1697 17.4005 11.0323 17.4005 8.8036C17.4005 6.57494 16.5155 4.4375 14.94 2.8612C14.16 2.0811 13.2339 1.46228 12.2147 1.04009C11.1956 0.617894 10.1032 0.400593 9.00001 0.400593C7.89683 0.400593 6.80446 0.617894 5.78527 1.04009C4.76608 1.46228 3.84003 2.0811 3.06001 2.8612C1.48452 4.4375 0.599487 6.57494 0.599487 8.8036C0.599487 11.0323 1.48452 13.1697 3.06001 14.746L4.88521 16.5448L7.33681 18.9268L7.49641 19.0684C8.42641 19.822 9.78841 19.774 10.6644 18.9268L13.5864 16.0828L14.94 14.746ZM3.90601 3.7072C4.5747 3.03777 5.36877 2.5067 6.24284 2.14437C7.1169 1.78203 8.05382 1.59553 9.00001 1.59553C9.9462 1.59553 10.8831 1.78203 11.7572 2.14437C12.6312 2.5067 13.4253 3.03777 14.094 3.7072C15.4071 5.02203 16.1621 6.79298 16.2014 8.6508C16.2407 10.5086 15.5615 12.3099 14.3052 13.6792L14.094 13.9L12.5088 15.4648L9.83281 18.0676L9.72001 18.1636C9.51216 18.3192 9.25945 18.4032 8.99981 18.403C8.74016 18.4028 8.48759 18.3184 8.28001 18.1624L8.16841 18.0664L4.59241 14.5804L3.90601 13.9L3.69481 13.6804C2.43854 12.3111 1.75927 10.5098 1.79862 8.652C1.83796 6.79418 2.59289 5.02203 3.90601 3.7072Z" />
        </svg>
        {weatherData.sys.country}, {weatherData.name}
      </div>

      <div className={styles.weather_info}>
        <div className={styles.current_date}>{currentDateFormat(new Date())}</div>
        <div className={styles.weather_icon}>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="weather-icon"
          />
        </div>

        <div className={styles.weather_temp_info}>
          <div className={styles.temp}>{formatTemp(weatherData.main.temp)} &#8451;</div>

          <div className={styles.about_weather}>
            <span>{weatherData.weather[0].main}</span>
            <span>Feels like: {formatTemp(weatherData.main.feels_like)} &#8451;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherBlock;
