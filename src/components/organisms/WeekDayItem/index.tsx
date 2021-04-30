import { WEEK_DAYS_SHORT } from '@/constants/weekDay';
import { Box, Typography } from '@material-ui/core';
import React, { FC, memo, useCallback, useMemo } from 'react';
import URL from '@/constants/urls';
import { SettingsActions } from '@/actions/settingsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedDayIndex } from '@/selectors/settingsSelectors';
import { WeekDayItemProps } from './weekDayItem.props';
import useStyles from './weekDayItem.styles';

const WeekDayItem: FC<WeekDayItemProps> = ({
  index,
  forecastTime,
  temperature,
  weather,
}: WeekDayItemProps) => {
  const dispatch = useDispatch();
  const selectedDayIndex = useSelector(getSelectedDayIndex);
  const isSelected = useMemo(() => selectedDayIndex === index, [selectedDayIndex, index]);
  const classes = useStyles(isSelected);

  const weekDay = useMemo(() => {
    const date = new Date(forecastTime * 1000);
    return WEEK_DAYS_SHORT[date.getDay()];
  }, [forecastTime]);

  const handleClick = useCallback(() => {
    dispatch(SettingsActions.changeDay(index));
  }, [index]);
  return (
    <Box
      className={classes.root}
      onClick={handleClick}
    >
      <Typography className={classes.weekDay}>{weekDay}</Typography>
      <img
        alt={`icon${weather[0].icon}`}
        src={`${URL.OPEN_WEATHER_MAP.IMG}${weather[0].icon}.png`}
        className={classes.icon}
      />
      <Typography className={classes.maxTemperature}>
        {`${Math.round(temperature.max)}°`}
      </Typography>
      <Typography className={classes.minTemperature}>
        {`${Math.round(temperature.min)}°`}
      </Typography>
    </Box>
  );
};

export default memo(WeekDayItem);
