import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CellsIcon from '@material-ui/icons/GroupWork';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Rules from './Rules';
import CellGrid from './CellGrid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Main() {
  const classes = useStyles();

  const [size, setSize] = React.useState(20);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CellsIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Asynchronous Cellular Automata
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Grid 
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={6}>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Simulation
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Enter your rule.
                </Typography>
                <Rules/>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item>
                    <TextField
                      id="filled-number"
                      label="Size"
                      type="number"
                      defaultValue={20}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      onChange={handleChange}
                    />
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Start
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Step
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </Grid>
          <Grid item>
            <Container>
              <CellGrid size={size}/>
            </Container>
          </Grid>
        </Grid>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}