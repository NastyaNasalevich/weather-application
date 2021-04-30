import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    position: 'absolute',
    width: '590px',
    height: '300px',
    left: '44px',
    top: '125px',
    background: '#ffffff',
    border: '1px solid rgba(150, 150, 150, 0.3)',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
  },
  weekDaysWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    position: 'absolute',
    width: '591px',
    height: '144px',
    left: '-1px',
    top: '157px',
  },
});