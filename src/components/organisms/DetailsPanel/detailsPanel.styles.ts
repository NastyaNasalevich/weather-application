import { makeStyles } from "@material-ui/core";

export default makeStyles({
  city: {
    height: '24px',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#333333',
  },
  day: {
    fontSize: '14px',
    lineHeight: '16px',
    color: '#666666',
    height: '32px',
    textTransform: 'capitalize',
  },
  degree: {
    fontWeight: 'bold',
    fontSize: '44px',
    lineHeight: '52px',
    width: '68px',
  },
  icon: {
    height: '64px',
    width: '64px',
  },
  root: {
    position: 'absolute',
    width: '550px',
    height: '137px',
    left: '0px',
    top: '0px',
    padding: '20px 20px 0 20px',
  },
  scaleWrapper: {
    display: 'flex',
    marginBottom: 'auto',
    paddingTop: '12px',
    paddingLeft: '6px',
    fontSize: '14px',
    lineHeight: '16px',
  },
  temperature: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
  },
  text: {
    color: '#222222',
    fontSize: '14px',
    lineHeight: '16px',
    marginTop: '2px',
  },
})