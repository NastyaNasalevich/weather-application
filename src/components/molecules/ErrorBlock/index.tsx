import { Box, Typography } from '@material-ui/core';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CloseIcon from '@material-ui/icons/Close';
import React, { memo, FC } from 'react';
import { TEXT } from '@/constants/text';
import useStyles from './errorBlock.styles';


const ErrorBlock: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CloudQueueIcon className={classes.cloudIcon} />
      <CloseIcon className={classes.closeIcon} />
      <Typography className={classes.text}>
        {TEXT.ERROR_MESSAGE}
      </Typography>
    </Box>
  );
};

export default memo(ErrorBlock);