import React from 'react';

import styles from './CurrentWeatherInfo.module.css';

import CurrentWeatherInfoItem from '../CurrentWeatherInfoItem';
import { ICurrentWeatherData } from '../../interfaces/CurrentWeatherDataI';

import sunriseImg from '../../assets/icons/sunrise.png';
import sunsetImg from '../../assets/icons/sunset.png';

interface Props {
  weatherData: ICurrentWeatherData;
}

const CurrentWeatherInfo: React.FC<Props> = ({ weatherData }) => {
  const convertUnixTime = (unixTime: number): string => {
    const date = new Date(unixTime * 1000);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  };

  return (
    <div className={styles.curr_info_wrap}>
      <CurrentWeatherInfoItem title={'Wind'} value={weatherData.wind.speed} />
      <CurrentWeatherInfoItem title={'Humidity'} value={weatherData.main.humidity} />
      <CurrentWeatherInfoItem title={'Pressure'} value={weatherData.main.pressure} />
      <CurrentWeatherInfoItem title={'Visibility'} value={weatherData.visibility} />

      <div className={styles.sunrise}>
        <img className={styles.sun_img} src={sunriseImg} alt="sun-ic" />

        <div className={styles.sun_info}>
          <div className={styles.sun_title}>Sunrise</div>
          <div className={styles.sun_time}>{convertUnixTime(weatherData.sys.sunrise)}</div>
        </div>
      </div>

      <div className={styles.sunset}>
        <img className={styles.sun_img} src={sunsetImg} alt="sun-ic" />

        <div className={styles.sun_info}>
          <div className={styles.sun_title}>Sunset</div>
          <div className={styles.sun_time}>{convertUnixTime(weatherData.sys.sunset)}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherInfo;
