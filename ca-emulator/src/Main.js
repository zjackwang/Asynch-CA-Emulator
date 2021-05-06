import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CellsIcon from "@material-ui/icons/GroupWork";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Rules from "./Rules";
import InputCellGrid from "./InputCellGrid";
import OutputCellGrid from "./OutputCellGrid";

import { randOrder, cyclicOrder } from "./updateSchemes";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
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
  gridContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
 * TODO
 * 1. asynch - cyclic, fill in new rows after all in prev have updated
 * 2. asynch - random w/o replacement
 */
export default function Main() {
  const classes = useStyles();

  const [size, setSize] = React.useState(20);
  const [ruleArray, setRuleArray] = React.useState(
    Array.from({ length: 8 }).map((x) => false)
  );
  const [inputArray, setInputArray] = React.useState(
    Array.from({ length: 20 }).map((x) => false)
  );
  const [outputArrays, setOutputArrays] = React.useState([]);
  const [started, setStarted] = React.useState(false);
  const [mode, setMode] = React.useState("Synchronous");

  const modes = ["Synchronous", "Random Independent", "Random Order", "Cyclic"];

  useEffect(() => {
    console.log(ruleArray);
    console.log(inputArray);
  }, [ruleArray, inputArray]);

  const handleChildSetRuleArray = (index, value) => {
    const newArr = ruleArray;
    newArr[index] = value;
    setRuleArray(newArr);
    console.log(value);
    console.log(newArr);
  };

  const handleChildSetInputArray = (index, value) => {
    const newArr = inputArray;
    newArr[index] = value;
    setInputArray(newArr);
    console.log(newArr);
  };

  const handleChange = (event) => {
    const newSize = event.target.value;
    setSize(newSize);
    setInputArray(Array.from({ length: newSize }).map((x) => false));
  };

  const handleOnClickStart = () => {
    setStarted(true);
    handleOnClickStep();
  };

  const handleOnClickStop = () => {
    setStarted(false);
    setOutputArrays([]);
  };

  const handleOnClickStep = () => {
    var newArray = [];
    switch (mode) {
      case "Synchronous":
        newArray = Array.from({ length: size }).map((x) => false); // replace with function call(ruleArray, inputArray)
        break;
      case "Random Independent":
        newArray = Array.from({ length: size }).map((x) => false); // replace with function call(ruleArray, inputArray)
        break;
      case "Random Order":
        newArray = Array.from({ length: size }).map((x) => false); // replace with function call(ruleArray, inputArray)
        break;
      case "Cyclic":
        newArray = Array.from({ length: size }).map((x) => false); // replace with function call(ruleArray, inputArray)
        break;

      default:
        newArray = Array.from({ length: size }).map((x) => false); // replace with function call(ruleArray, inputArray) for synchronous
        break;
    }
    setOutputArrays((oldArray) => [...oldArray, newArray]);
    setInputArray(newArray);
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  // TESTING updateScheme.js in console
  // impulse
  const cells = Array.of(
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false
  );
  // rule 110
  const rules = Array.of(false, true, true, false, true, true, true, false);

  console.log(cells);

  console.log(randOrder(rules, cells));

  console.log(cyclicOrder(rules, cells));

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
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6} className={classes.heroContent}>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Simulation
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Enter your rule.
                </Typography>
                <Rules onChildSetRuleArray={handleChildSetRuleArray} />
                <div className={classes.heroButtons}>
                  <Grid
                    container
                    spacing={2}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item>
                          <TextField
                            id="mode"
                            select
                            label="Mode"
                            value={mode}
                            onChange={handleModeChange}
                            helperText="Please select a Cellular Automata type."
                            variant="filled"
                          >
                            {modes.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
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
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            disabled={started}
                            onClick={handleOnClickStart}
                          >
                            Start
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            disabled={!started}
                            onClick={handleOnClickStop}
                          >
                            Stop
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="outlined"
                            color="primary"
                            disabled={!started}
                            onClick={handleOnClickStep}
                          >
                            Step
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              alignItems="flex-start"
              classname={classes.gridContent}
            >
              <Grid item>
                <Container>
                  <InputCellGrid
                    size={size}
                    onChildSetInputArray={handleChildSetInputArray}
                  />
                </Container>
              </Grid>
              {outputArrays.map((outputArray) => (
                <Grid item key={outputArray.key}>
                  <Container>
                    <OutputCellGrid values={outputArray} />
                  </Container>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
