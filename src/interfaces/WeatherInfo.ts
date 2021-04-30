export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface TemperatureInfo {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

export interface WeatherInfo {
  dt: number;
  temp: any;
  humidity: number;
  weather: WeatherDescription[];
  wind_speed: number;
  wind_deg: number;
}