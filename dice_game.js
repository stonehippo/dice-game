/*
 * Dice Game
 *
 * A tiny functional library for dice-based game mechanics
 *
 * Copyright (c) 2015. George White
 */

let R = require('ramda');
// randonInt:: Number -> Number -> Number
let randomInt = R.curry(R.compose(n => n + a, Math.floor, n=> (n * (a - b)), Math.random))
// die:: Number -> (_ -> Number)
let die = n => function() {};
// roll:: (_ -> Number) -> Number -> (_ -> Number)
let roll = R.curry((f, n) => function() {});
 


module.exports = {
  
}
}