import { ApplicationStatus } from './../enums/ApplicationStatus';
import { SettingsActions } from '@/actions/settingsActions';
import URL from '@/constants/urls';
import { Units } from '@/enums/Units';
import CoordinatesResponse from '@/interfaces/CoordinatesResponse';
import { WeatherDataResponse } from '@/interfaces/WeatherDataResponse';
import { store } from '@/stores/store';
import { get } from './httpClientAPI';

const API_KEY = '1c5da32bd6a0d1c4c017b21b49833c7f';

export const getWeatherByCoordinates = (
  lat: number,
  lon: number,
  units: Units,
): Promise<WeatherDataResponse> => {
  const url = `${URL.OPEN_WEATHER_MAP.DATA}?`
    + `lat=${lat}`
    + `&lon=${lon}`
    + `&units=${units}`
    + `&exclude=alerts,minutely,hourly`
    + `&appid=${API_KEY}`;
  return get<WeatherDataResponse>(url, null);
};

export const getCoordinatesByCityName = (
  cityName: string,
): Promise<CoordinatesResponse[] | void> => {
  const url = `${URL.OPEN_WEATHER_MAP.GEO}?`
    + `q=${cityName}`
    + `&appid=${API_KEY}`;
  return get<CoordinatesResponse[]>(url, null)
    .then((response) => {
      if (!response.length) {
        store.dispatch(SettingsActions.updateApplicationStatus(ApplicationStatus.ERROR));
      } else {
        return response;
      }
    });
};