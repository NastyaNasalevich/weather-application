import { getSelectedDayIndex } from './settingsSelectors';
import { createSelector } from 'reselect';
import { StoreState } from '@/stores/store';
import { WeatherInfo } from '@/interfaces/WeatherInfo';

export const getCurrentWeather = (state: StoreState): WeatherInfo => (
  state.weatherData.currentWeather
);

export const getDailyWeather = (state: StoreState): WeatherInfo[] => (
  state.weatherData.dailyWeather
);

export const getSelectedDayWeather = createSelector(
  [getSelectedDayIndex, getCurrentWeather, getDailyWeather],
  (selectedDayIndex, currentWeather, dailyWeather): WeatherInfo => (
    selectedDayIndex === 0 ? currentWeather : dailyWeather[selectedDayIndex]
  ),
);