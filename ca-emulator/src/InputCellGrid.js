import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputCell from "./InputCell.js";

export default function InputCellGrid({ size, started, onChildSetInputArray }) {
  var sizeArray = [];

  for (var i = 0; i < size; i++) {
    sizeArray.push(i);
  }

  return (
    <Grid container justify="center" alignItems="center" spacing={1}>
      {sizeArray.map((input) => (
        <Grid item key={input}>
          <InputCell
            index={input}
            started={started}
            onChildSetInputArray={onChildSetInputArray}
          />
        </Grid>
      ))}
    </Grid>
  );
}
