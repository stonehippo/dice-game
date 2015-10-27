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

// range :: Number -> Number -> Number
let numberInRange = R.curry((min, max, n) => (n * (max - min + 1)) + min);

// integerInRange :: Number -> Number -> int
let integerInRange = R.curry(R.compose(Math.floor, numberInRange));

// die :: Number -> (_ -> int)
let die = sides => () => integerInRange(1, sides, Math.random());

// dice :: (_ -> int) -> int -> [(_ -> int)]
let dice = R.curry((f, n) => () => R.repeat(f, n));

// roll :: [(_ -> int)] -> int
let roll = dice => R.reduce((a, b) => a + b(), 0, dice);

// isRollBelow :: int -> int -> boolean
let below = R.curry((c, r) => r < c );

// isRollAbove :: int -> int -> boolean
let above = R.curry((f, r) => r > f );

// isRollBetween :: int -> int -> int -> boolean
let between = R.curry((c, f, r) => isRollAbove(c, r) && isRollBelow(f, r));

module.exports = {
    die: die,
    dice: dice,
    roll: roll,
    below: below,
    above: above,
    between: between
};
