import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
}));

export default function CellGrid(props) {
  const classes = useStyles();
  console.log(props.size);
  var sizeArray = Array.from({length: props.size});
  console.log(sizeArray);

  return (
    <Grid 
      container 
      justify="center" 
      alignItems="center"
      spacing={1}
    >
      {sizeArray.map((input) => (
        <Grid item key={input}>
          <Paper className={classes.paper} />
        </Grid>
      ))}
    </Grid>
  )
}