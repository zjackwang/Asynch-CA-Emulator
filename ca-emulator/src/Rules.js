import React from 'react';
import { Grid } from "@material-ui/core";
import Rule from "./Rule.js";

export default function Rules(left, middle, right) {

  const ruleInputs = [
    {
      left: false,
      middle: false,
      right: false,
    },
    {
      left: false,
      middle: false,
      right: true,
    },
    {
      left: false,
      middle: true,
      right: false,
    },
    {
      left: false,
      middle: true,
      right: true,
    },
    {
      left: true,
      middle: false,
      right: false,
    },
    {
      left: true,
      middle: false,
      right: true,
    },
    {
      left: true,
      middle: true,
      right: false,
    },
    {
      left: true,
      middle: true,
      right: true,
    },
  ];

  return (
    <Grid container justify="center" spacing={4}>
      {ruleInputs.map((input) => (
        <Grid key={input} item xs={3}>
          <Rule left={input.left} middle={input.middle} right={input.right}/>
        </Grid>
      ))}
    </Grid>
  )
}