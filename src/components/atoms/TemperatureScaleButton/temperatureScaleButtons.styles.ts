import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    color: (isSelected) => isSelected ? '#222222' : '#888888',
    cursor: (isSelected) => isSelected ? '' : 'pointer',
    fontWeight: (isSelected) => isSelected ? 'bold' : 'normal',
    textDecoration: (isSelected) => isSelected ? 'underline' : '',
  },
})