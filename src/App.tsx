import { useEffect, useState } from 'react';

import Skeleton from '@mui/material/Skeleton';

import styles from './App.module.css';

import SearchInput from './components/SearchInput';
import ChangeTheme from './components/ChangeTheme';
import CurrentWeatherBlock from './components/CurrentWeatherBlock';
import CurrentWeatherInfo from './components/CurrentWeatherInfo';
import FiveDaysForecastBlock from './components/FiveDaysForecastBlock';
import Map from './components/Map';

import { fetchCurrentWeather } from './api/weatherAPI';
import { fetchFiveDayForecast } from './api/weather5Day';

import { ICurrentWeatherData } from './interfaces/CurrentWeatherDataI';
import { FiveDaysForecastI } from './interfaces/FiveDayForecastI';

import { getUserCoordinates } from './utils/getUserCoord';

function App() {
  const [userCoords, setUserCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [userCoordsError, setUserCoordsError] = useState<string | null>(null);

  const [weatherData, setWeatherData] = useState<ICurrentWeatherData | null>(null);
  const [error, setError] = useState(null);

  const [fiveDayForecast, setFiveDayForecast] = useState<FiveDaysForecastI[] | null>(null);
  const [errorFiveDay, setErrorFiveDay] = useState(null);

  useEffect(() => {
    getUserCoordinates()
      .then((coords) => {
        setUserCoords(coords);
        setError(null);
        console.log(error);
      })
      .catch((error) => {
        setUserCoordsError(
          'Не удалось получить координаты. Пожалуйста, проверьте настройки геолокации.',
        );
        console.log(userCoordsError);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (userCoords) {
      fetchCurrentWeather(userCoords?.lat, userCoords?.lon)
        .then((data) => setWeatherData(data))
        .catch((err) => setError(err));
    }
  }, [userCoords]);

  useEffect(() => {
    if (userCoords) {
      fetchFiveDayForecast(userCoords?.lat, userCoords?.lon)
        .then((data) => setFiveDayForecast(data))
        .catch((err) => {
          setErrorFiveDay(err);
          console.log(errorFiveDay);
        });
    }
  }, [userCoords]);

  return (
    <div className={styles.weather_app_wrap}>
      {/* Шапка с поиском и сменой темы */}
      <div className={styles.app_header}>
        <SearchInput />
        <ChangeTheme />
      </div>

      {/* Блок с инфой о погоде */}
      <div className={styles.app_weather_info}>
        {weatherData ? (
          <CurrentWeatherBlock weatherData={weatherData} />
        ) : (
          <Skeleton
            animation="wave"
            width={'100%'}
            height={'100%'}
            style={{ transform: 'scale(1)', borderRadius: 16 }}
          />
        )}

        {fiveDayForecast ? (
          <FiveDaysForecastBlock fiveDayForecast={fiveDayForecast} />
        ) : (
          <Skeleton
            animation="wave"
            width={'100%'}
            height={'100%'}
            style={{ transform: 'scale(1)', borderRadius: 16 }}
          />
        )}

        {weatherData ? (
          <CurrentWeatherInfo weatherData={weatherData} />
        ) : (
          <Skeleton
            animation="wave"
            width={'100%'}
            height={'100%'}
            style={{ transform: 'scale(1)', borderRadius: 16 }}
          />
        )}

        <Map
          userCoords={userCoords}
          setWeatherData={setWeatherData}
          setFiveDayForecast={setFiveDayForecast}
        />
      </div>
    </div>
  );
}

export default App;
