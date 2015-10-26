'use strict';

let R = require("ramda");
let dice_game = require("./dice_game.js")

// define some standard die types
let d4 = dice_game.die(4);
let d6 = dice_game.die(6);
let d8 = dice_game.die(8);
let d10 = dice_game.die(10);
let d12 = dice_game.die(12);
let d20 = dice_game.die(20);

// define some common dice
let _d4 = R.map(dice_game.dice(d4), [1, 2, 3, 4, 5, 6]);
let _d6 = R.map(dice_game.dice(d6), [1, 2, 3, 4, 5, 6]);
let _d20 = R.map(dice_game.dice(d20), [1, 2, 3]);

module.exports = {
    types: {
        d4: d4,
        d6: d6,
        d8: d8,
        d10: d10,
        d12: d12,
        d20: d20
    },
    dice: {
        d4: _d4,
        d6: _d6,
        d20: _d20
    }
}
