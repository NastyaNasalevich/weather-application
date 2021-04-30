import { WeatherInfo } from '@/interfaces/WeatherInfo';
import { createAction } from 'redux-actions';

export enum Type {
  CLEAR_DATA = 'CLEAR_DATA',
  REQUEST_WEATHER_DATA = 'REQUEST_WEATHER_DATA',
  SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER',
  SET_DAILY_WEATHER = 'SET_DAILY_WEATHER',
}

const clearData = createAction(Type.CLEAR_DATA);
const requestWeatherData = createAction<string>(Type.REQUEST_WEATHER_DATA);
const setCurrentWeather = createAction<WeatherInfo>(Type.SET_CURRENT_WEATHER);
const setDailyWeather = createAction<WeatherInfo[]>(Type.SET_DAILY_WEATHER);

export const WeatherDataActions = {
  clearData,
  requestWeatherData,
  setCurrentWeather,
  setDailyWeather,
};

export type WeatherDataPayloads = WeatherInfo & WeatherInfo[];

