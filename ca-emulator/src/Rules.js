import React from "react";
import { Grid } from "@material-ui/core";
import Rule from "./Rule.js";

export default function Rules({ started, onChildSetRuleArray }) {
  const ruleInputs = [
    {
      index: 0,
      left: false,
      middle: false,
      right: false,
    },
    {
      index: 1,
      left: false,
      middle: false,
      right: true,
    },
    {
      index: 2,
      left: false,
      middle: true,
      right: false,
    },
    {
      index: 3,
      left: false,
      middle: true,
      right: true,
    },
    {
      index: 4,
      left: true,
      middle: false,
      right: false,
    },
    {
      index: 5,
      left: true,
      middle: false,
      right: true,
    },
    {
      index: 6,
      left: true,
      middle: true,
      right: false,
    },
    {
      index: 7,
      left: true,
      middle: true,
      right: true,
    },
  ];

  return (
    <Grid container justify="center" spacing={4}>
      {ruleInputs.map((input) => (
        <Grid key={input.index} item xs={3}>
          <Rule
            {...input}
            started={started}
            onChildSetRuleArray={onChildSetRuleArray}
          />
        </Grid>
      ))}
    </Grid>
  );
}
