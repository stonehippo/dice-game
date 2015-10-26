# Dice Game

A tiny functional Javascript library for dice-based game mechanics.

## Usage

```
var dg = require('dice_game');

// create some die types
var d4 = dg.die(6);
var d6 = dg.die(6);
var d20 = dg.die(20);

// create some dice for rolls
var _1d6 = dg.dice.dice(d6, 1);
var _3d6 = dg.dice(d6, 3);

// roll some dice
dg.roll(_3d6()); // returns an integer between 3…18
```
