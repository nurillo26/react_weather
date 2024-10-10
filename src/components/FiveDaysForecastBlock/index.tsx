import React from 'react';

import styles from './FiveDaysForecastBlock.module.css';
import { FiveDaysForecastI } from '../../interfaces/FiveDayForecastI';
import { formatTemp } from '../../utils/formatTemp';

interface Props {
  fiveDayForecast: FiveDaysForecastI[];
}

const FiveDaysForecastBlock: React.FC<Props> = ({ fiveDayForecast }) => {
  console.log(fiveDayForecast);

  return (
    <div className={styles.days_forecast_wrap}>
      <div className={styles.card_title}>5 Days Forecast</div>

      <div className={styles.card_items_block}>
        {fiveDayForecast.map((item) => (
          <div className={styles.card_item}>
            <span className={styles.card_item_title}>{item.date}</span>
            <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt="icon" />

            <span className={styles.card_item_temp}>{formatTemp(item.temp)} &#8451;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDaysForecastBlock;
