import { Box } from '@material-ui/core';
import React, { useCallback, FC, memo } from 'react';
import SearchInput from '@/components/molecules/SearchInput';
import WeatherBoard from '@/components/organisms/WeatherBoard';
import { WeatherDataActions } from '@/actions/weatherDataActions';
import { SettingsActions } from '@/actions/settingsActions';
import { ApplicationStatus } from '@/enums/ApplicationStatus';
import { useDispatch } from 'react-redux';
import useStyles from './weatherLayoutPage.styles';

const WeatherLayoutPage: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const sendCityForWeather = useCallback((cityName: string) => {
    dispatch(WeatherDataActions.requestWeatherData(cityName));
  }, []);

  const removeCity = useCallback(() => {
    dispatch(SettingsActions.updateApplicationStatus(ApplicationStatus.INITIAL));
    dispatch(WeatherDataActions.clearData());
  }, []);

  return (
    <Box className={classes.root}>
      <SearchInput
        onClearClick={removeCity}
        onEnterPress={sendCityForWeather}
      />
      <WeatherBoard />
    </Box>
  );
};

export default memo(WeatherLayoutPage);