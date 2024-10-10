import React from 'react';

import windIcon from '../../assets/icons/wind_icon.svg';
import humidityIcon from '../../assets/icons/humidity_icon.svg';
import visibilityIcon from '../../assets/icons/visibility-icon.svg';
import pressureIcon from '../../assets/icons/pressure-icon.svg';

import styles from './CurrentWeatherInfoItem.module.css';

interface Props {
  title: 'Wind' | 'Humidity' | 'Visibility' | 'Pressure';
  value: string | number;
}

const CurrentWeatherInfoItem: React.FC<Props> = ({ title, value }) => {
  const data = {
    Wind: {
      icon: windIcon,
      unitOfMeasurement: 'm/s',
    },
    Humidity: {
      icon: humidityIcon,
      unitOfMeasurement: '%',
    },
    Visibility: {
      icon: visibilityIcon,
      unitOfMeasurement: 'm',
    },
    Pressure: {
      icon: pressureIcon,
      unitOfMeasurement: 'gPa',
    },
  };

  return (
    <div className={styles.item_wrap}>
      <div className={styles.item_title}>
        <img className={styles.item_title_icon} src={data[title].icon} alt="icon" />

        <div className={styles.item_title_name}>{title}</div>
      </div>

      <div className={styles.item_main_info}>
        {value} <span className={styles.info_symbol}>{data[title].unitOfMeasurement}</span>
      </div>
    </div>
  );
};

export default CurrentWeatherInfoItem;
