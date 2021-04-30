import { TEXT } from '@/constants/text';
import { Box, IconButton, InputBase } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { FC, memo, useCallback, useState } from 'react';
import { SearchInputProps } from './searchInput.props';
import useStyles from './searchInput.styles';

const SearchInput: FC<SearchInputProps> = ({
  onEnterPress,
  onClearClick,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  const handleClearClick = useCallback(() => {
    setValue('');
    onClearClick();
  }, []);

  const handleKeyPress = useCallback(({ key }) => {
    if (key === 'Enter') {
      onEnterPress(value);
    }
  }, [value])

  return (
    <Box className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={TEXT.CITY_NAME}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={value}
      />
      <IconButton
        className={classes.icon}
        onClick={handleClearClick}
      >
        <Close />
      </IconButton>
    </Box>
  )
}

export default memo(SearchInput);
