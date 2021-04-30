import { Action, handleActions } from 'redux-actions';
import { Type, WeatherDataPayloads } from '@/actions/weatherDataActions';
import { WeatherInfo } from '@/interfaces/WeatherInfo';

export interface WeatherData {
  currentWeather: WeatherInfo;
  dailyWeather: WeatherInfo[];
}

export const weatherDataInitialState = {
  currentWeather: {} as WeatherInfo,
  dailyWeather: [],
};

const clearData = (
  state: WeatherData,
  action: Action<WeatherInfo>,
): WeatherData => {
  return weatherDataInitialState;
};

const setCurrentWeather = (
  state: WeatherData,
  action: Action<WeatherInfo>,
): WeatherData => {
  return { ...state, currentWeather: action.payload };
};

const setDailyWeather = (
  state: WeatherData,
  action: Action<WeatherInfo[]>,
): WeatherData => {
  return { ...state, dailyWeather: action.payload };
};

const weatherDataReducer = handleActions<WeatherData, WeatherDataPayloads>(
  {
    [Type.CLEAR_DATA]: clearData,
    [Type.SET_CURRENT_WEATHER]: setCurrentWeather,
    [Type.SET_DAILY_WEATHER]: setDailyWeather,
  },
  weatherDataInitialState,
);

export default weatherDataReducer;
