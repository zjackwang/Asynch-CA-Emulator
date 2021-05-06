// "updateScheme.js"

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}

function getRule(states, cell) {
  let i = 0;
  if (cell === 0) {
    if (states[cell + 1]) i = i + 1;
    if (states[cell]) i = i + 2;
  } else if (cell === states.length - 1) {
    if (states[cell]) i = i + 2;
    if (states[cell - 1]) i = i + 4;
  } else {
    if (states[cell + 1]) i = i + 1;
    if (states[cell]) i = i + 2;
    if (states[cell - 1]) i = i + 4;
  }
  return i;
}

// rules: array of 8 booleans
//      rules[7] - rule for 3 dark squares (1s in array)
//      rules[0] - rule for 3 empty squares (0s in array)
//      see https://mathworld.wolfram.com/ElementaryCellularAutomaton.html for a[6]-a[1]
// states: array of n booleans
//      states[n-1] - state of rightmost cell
//      states[0] - state of leftmost cell

function randOrder(rules, states) {
  let newStates = Array.from(states);
  let updateOrder = [];
  let i;
  for (i = 0; i < states.length; i++) updateOrder.push(i);
  shuffleArray(updateOrder);

  for (i = 0; i < states.length; i++) {
    newStates[updateOrder[i]] = rules[getRule(newStates, i)];
  }

  return newStates;
}

function cyclicOrder(rules, states) {
  let newStates = Array.from(states);
  let i;
  for (i = 0; i < states.length; i++) {
    newStates[i] = rules[getRule(newStates, i)];
  }

  return newStates;
}

export { randOrder, cyclicOrder };
