import { TEXT } from '@/constants/text';
import { getSelectedDayWeather } from '@/selectors/weatherDataSelectors';
import { Box, Typography } from '@material-ui/core';
import React, { FC, memo, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import URL from '@/constants/urls';
import { degToCompass, toKPH } from '@/services/degreeConverter';
import { Units } from '@/enums/Units';
import TemperatureScale from '@/enums/TemperatureScale';
import { WEEK_DAYS } from '@/constants/weekDay';
import TemperatureScaleButton from '@/components/atoms/TemperatureScaleButton';
import { SettingsActions } from '@/actions/settingsActions';
import { getCity, getSelectedDayIndex, getUnits } from '@/selectors/settingsSelectors';
import { formatAMPM } from '@/services/timeConverter';
import { DetailsPanelProps } from './detailsPanel.props';
import useStyles from './detailsPanel.styles';

const DetailsPanel: FC<DetailsPanelProps> = ({

}: DetailsPanelProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { name: cityName } = useSelector(getCity);
  const selectedDayIndex = useSelector(getSelectedDayIndex);
  const units = useSelector(getUnits);
  const {
    dt: forecastTime,
    humidity,
    temp,
    weather,
    wind_deg: windDirection,
    wind_speed: windSpeed,
  } = useSelector(getSelectedDayWeather);

  const temperature = useMemo(() => {
    const value = typeof temp === 'number' ? temp : temp.max;
    return Math.round(value);
  }, [temp])

  const weekDay: string = useMemo(() => {
    const date: Date = new Date(forecastTime * 1000);
    return WEEK_DAYS[date.getDay()];
  }, [forecastTime]);

  const time: string = useMemo(() => {
    const date: Date = new Date(forecastTime * 1000);
    return selectedDayIndex === 0 ? `${formatAMPM(date)}` : '';
  }, [forecastTime]);

  const wind: string = useMemo(() => {
    const unit: string = units === Units.METRIC ? TEXT.KPH : TEXT.MPH;
    const speed: number = units === Units.METRIC ? toKPH(windSpeed) : windSpeed;
    const direction: string = degToCompass(windDirection);

    return `${TEXT.WIND}: ${Math.round(speed)} ${unit} ${direction}`;
  }, [windSpeed, windDirection]);

  const handleCelsiusClick = useCallback(() => {
    dispatch(SettingsActions.changeUnits(Units.METRIC));
  }, [dispatch]);

  const handleFahrenheitClick = useCallback(() => {
    dispatch(SettingsActions.changeUnits(Units.IMPERIAL));
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      <Typography className={classes.city}>{cityName}</Typography>
      <Typography className={classes.day}>
        {`${weekDay} ${time} • ${weather[0].description}`}
      </Typography>
      <Box display="flex">
        <Box className={classes.temperature}>
          <img
            alt="icon"
            src={`${URL.OPEN_WEATHER_MAP.IMG}${weather[0].icon}.png`}
            className={classes.icon}
          />
          <Typography className={classes.degree}>
            {`${temperature}°`}
          </Typography>
          <Box className={classes.scaleWrapper}>
            <TemperatureScaleButton
              isSelected={units === Units.IMPERIAL}
              onClick={handleFahrenheitClick}
            >
              {TemperatureScale.FAHRENHEIT}
            </TemperatureScaleButton>
            <span>/</span>
            <TemperatureScaleButton
              isSelected={units === Units.METRIC}
              onClick={handleCelsiusClick}
            >
              {TemperatureScale.CELSIUS}
            </TemperatureScaleButton>
          </Box>
        </Box>
        <Box>
          <Typography className={classes.text}>
            {`${TEXT.HUMIDITY}: ${humidity}%`}
          </Typography>
          <Typography className={classes.text}>
            {wind}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(DetailsPanel);
