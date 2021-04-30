import { Box, Typography } from '@material-ui/core';
import React, { memo, FC } from 'react';
import useStyles from './initialBlock.styles';
import { TEXT } from '@/constants/text';


const InitialBlock: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>
        {TEXT.INITIAL_MESSAGE}
      </Typography>
    </Box>
  );
};

export default memo(InitialBlock);