import { WeatherDescription } from '@/interfaces/WeatherInfo';
import { TemperatureInfo } from '@/interfaces/WeatherInfo';
import { WeatherInfo } from "@/interfaces/WeatherInfo";

export interface WeekDayItemProps {
  index: number,
  forecastTime: number,
  temperature: TemperatureInfo,
  weather: WeatherDescription[],
}