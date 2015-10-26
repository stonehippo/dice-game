/*
 * Dice Game
 *
 * A tiny functional library for dice-based game mechanics
 *
 * Makes use of ramda.js and ES6.
 *
 * Copyright (c) 2015. George White
 */

'use strict';

let R = require('ramda');

// range: Number -> Number -> Number
var numberInRange = R.curry((min, max, n) => (n * (max - min + 1)) + min);

// integerInRange:: int -> int -> int
var integerInRange = R.curry(R.compose(Math.floor, numberInRange));

// die:: int -> (_ -> int)
var die = sides => () => integerInRange(1, sides, Math.random());

// multipleDie:: (_ -> int) -> int -> [(_ -> int)]
var dice = R.curry((f, n) => () => R.repeat(f,n));

// roll:: [(_ -> int)] -> int
var roll = dice => R.reduce((a,b) => a + b(), 0, dice);

module.exports = {
    die: die,
    dice: dice,
    roll: roll
};
