import React, { memo } from 'react'
import DetailsPanel from '@/components/organisms/DetailsPanel';
import WeekDayItem from '@/components/organisms/WeekDayItem';
import InitialBlock from '@/components/molecules/InitialBlock';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getDailyWeather } from '@/selectors/weatherDataSelectors';
import { WeatherInfo } from '@/interfaces/WeatherInfo';
import ErrorBlock from '@/components/molecules/ErrorBlock';
import { ApplicationStatus } from '@/enums/ApplicationStatus';
import { getApplicationStatus } from '@/selectors/settingsSelectors';
import useStyles from './weatherBoard.styles';

const WeatherBoard = () => {
  const classes = useStyles();
  const dailyWeather: WeatherInfo[] = useSelector(getDailyWeather);
  const applicationStatus = useSelector(getApplicationStatus);

  return (
    <Box className={classes.root}>
      {{
        [ApplicationStatus.READY]:
          <>
            <DetailsPanel />
            <Box className={classes.weekDaysWrapper}>
              {dailyWeather.map((weatherInfo: WeatherInfo, index: number) => (
                <WeekDayItem
                  key={weatherInfo.dt}
                  index={index}
                  forecastTime={weatherInfo.dt}
                  temperature={weatherInfo.temp}
                  weather={weatherInfo.weather}
                />
              ))}
            </Box>
          </>,
        [ApplicationStatus.ERROR]: <ErrorBlock />,
        [ApplicationStatus.INITIAL]: <InitialBlock />,
      }[applicationStatus]
      }
    </Box >
  );


}

export default memo(WeatherBoard);
