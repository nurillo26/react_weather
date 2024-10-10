import React from 'react';

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';
import { ICurrentWeatherData } from '../../interfaces/CurrentWeatherDataI';
import { fetchCurrentWeather } from '../../api/weatherAPI';
import { FiveDaysForecastI } from '../../interfaces/FiveDayForecastI';
import { fetchFiveDayForecast } from '../../api/weather5Day';

interface MapProps {
  userCoords: any;
  setWeatherData: (data: ICurrentWeatherData) => void;
  setFiveDayForecast: (data: FiveDaysForecastI[]) => void;
}

const Map: React.FC<MapProps> = ({ userCoords, setWeatherData, setFiveDayForecast }) => {
  const [selectedCoords, setSelectedCoords] = React.useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [error, setError] = React.useState<string | null>(null);

  const defaultCenter = { lat: 51.505, lng: -0.09 };

  const LocationMarker = () => {
    const map = useMap();

    if (userCoords) {
      map.flyTo({ lat: userCoords.lat, lng: userCoords.lon }, map.getZoom());
    }

    if (selectedCoords) {
      return null;
    }

    return userCoords === null ? null : (
      <Marker position={{ lat: userCoords.lat, lng: userCoords.lon }}>
        <Popup>Вы тут!</Popup>
      </Marker>
    );
  };

  const MapClickHandler = () => {
    useMapEvent('click', async (event) => {
      const { lat, lng } = event.latlng;
      setSelectedCoords({ lat, lng });

      try {
        const currentWeatherData = await fetchCurrentWeather(lat, lng);
        setWeatherData(currentWeatherData);

        const fiveDayForecast = await fetchFiveDayForecast(lat, lng);
        setFiveDayForecast(fiveDayForecast);
      } catch (err) {
        setError('Ошибка при получении данных о погоде');
        console.error(error);
      }
    });

    return selectedCoords === null ? null : (
      <Marker position={{ lat: selectedCoords.lat, lng: selectedCoords.lng }}>
        <Popup>Вы указали сюда</Popup>
      </Marker>
    );
  };

  return (
    <div className={styles.map_wrap}>
      <MapContainer
        center={userCoords ? { lat: userCoords.lat, lng: userCoords.lon } : defaultCenter}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <MapClickHandler />
      </MapContainer>
    </div>
  );
};

export default Map;
