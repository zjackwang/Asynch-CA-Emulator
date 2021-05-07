import React from 'react';
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperOff: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: '#ff99bb',
  },
  paperOn: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default function OutputCell({value}) {
  const classes = useStyles();

  return (
    <Paper className={value ? classes.paperOn : classes.paperOff}/>
  )
}