
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";


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

export default function Rule(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(!checked);
  };


  return (
    <Grid 
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={1}
    >
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item>
            <Paper className={props.left ? classes.paperOn : classes.paperOff} />
          </Grid>
          <Grid item>
            <Paper className={props.middle ? classes.paperOn : classes.paperOff}/>
          </Grid>
          <Grid item>
            <Paper className={props.right ? classes.paperOn : classes.paperOff}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={checked ? classes.paperOn : classes.paperOff} onClick={handleChange}/>
      </Grid>
    </Grid>
  )
}