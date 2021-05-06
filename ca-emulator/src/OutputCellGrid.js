import React from 'react';
import { Grid} from "@material-ui/core";
import OutputCell from './OutputCell.js'


export default function OutputCellGrid({values}) {

  return (
    <Grid 
      container 
      justify="center" 
      alignItems="center"
      spacing={1}
    >
      {values.map((input) => (
        <Grid item key={input.key}>
          <OutputCell value={input}/>
        </Grid>
      ))}
    </Grid>
  )
}