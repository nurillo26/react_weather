import axios from 'axios';

const API_KEY = '3a54aa3cfbafc7576d55b961544b4a73';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchCurrentWeather = async (lat: number, lon: number) => {
  try {
    const { data } = await axios.get(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return data;
  } catch (error) {
    throw new Error(`Ошибка запроса данных погоды: ${error}`);
  }
};
