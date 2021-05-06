import React from 'react';
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperOff: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  paperOn: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default function InputCell({index, onChildSetInputArray}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    const newVal = !checked;
    setChecked(newVal);
    onChildSetInputArray(index, newVal);
  };


  return (
    <Paper className={checked ? classes.paperOn : classes.paperOff} onClick={handleChange}/>
  )
}