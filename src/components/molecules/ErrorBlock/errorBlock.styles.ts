import { makeStyles } from '@material-ui/core';

export default makeStyles({
  cloudIcon: {
    width: '200px',
    height: '157px',
    color: '#555555',
  },
  closeIcon: {
    width: '70px',
    height: '70px',
    color: '#555555',
    position: 'absolute',
    marginBottom: '10px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '590px',
    height: '300px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '21px',
    color: '#333333',
  },
});