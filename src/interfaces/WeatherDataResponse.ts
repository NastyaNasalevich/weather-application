import { WeatherInfo } from '@/interfaces/WeatherInfo';

export interface WeatherDataResponse {
  current: WeatherInfo;
  daily: WeatherInfo[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
