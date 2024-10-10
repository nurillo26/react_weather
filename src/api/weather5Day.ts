import axios from 'axios';

const API_KEY = '3a54aa3cfbafc7576d55b961544b4a73';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

interface DailyForecast {
  [date: string]: {
    temp: number;
    icon: string;
  };
}

export const fetchFiveDayForecast = async (lat: number, lon: number) => {
  try {
    const { data } = await axios.get(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

    const dailyForecast: DailyForecast = {};
    const today = new Date().toDateString();

    data.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000).toDateString();

      if (date === today) return;

      if (!dailyForecast[date]) {
        dailyForecast[date] = {
          temp: item.main.temp,
          icon: item.weather[0].icon,
        };
      }
    });

    return Object.entries(dailyForecast).map(([date, forecast]) => ({
      date,
      temp: forecast.temp,
      icon: forecast.icon,
    }));
  } catch (error) {
    throw new Error(`Ошибка запроса данных погоды: ${error}`);
  }
};
