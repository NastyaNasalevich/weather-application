import { makeStyles } from '@material-ui/core';

export default makeStyles({
  icon: {
    width: '48px',
    height: '48px',
  },
  maxTemperature: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
  },
  minTemperature: {
    fontSize: '14px',
    lineHeight: '16px',
    marginTop: '2px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '73.88px',
    height: '123px',
    alignItems: 'center',
    padding: '20px 0 0 0 ',
    border: '1px solid rgba(150, 150, 150, 0.3)',
    cursor: 'pointer',
    background: (isSelected) => isSelected ? '#f7f7f7' : '',
  },
  weekDay: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
  },
});