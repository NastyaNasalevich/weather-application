import { Box } from '@material-ui/core';
import React, { FC } from 'react'
import { TemperatureScaleButtonProps } from './temperatureScaleButton.props';
import useStyles from './temperatureScaleButtons.styles';

const TemperatureScaleButton: FC<TemperatureScaleButtonProps> = ({
  onClick,
  isSelected,
  children,
}: TemperatureScaleButtonProps) => {
  const classes = useStyles(isSelected);

  return (
    <Box
      className={classes.root}
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

export default TemperatureScaleButton;
