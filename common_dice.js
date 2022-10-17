/*
 * Dice Game
 *
 * A tiny functional library for dice-based game mechanics
 *
 * Makes use of ramda.js and ES6.
 *
 * Copyright (c) 2015-2022. George White <stonehippo@gmail.com>
 */

'use strict';

const R = require("ramda");
const dice_game = require("./dice-game.js")

// define some standard die types
const d4 = dice_game.die(4);
const d6 = dice_game.die(6);
const d8 = dice_game.die(8);
const d10 = dice_game.die(10);
const d12 = dice_game.die(12);
const d20 = dice_game.die(20);

// define some common dice
const _d4 = R.map(dice_game.dice(d4), [1, 2, 3, 4, 5, 6]);
const _d6 = R.map(dice_game.dice(d6), [1, 2, 3, 4, 5, 6]);
const _d20 = R.map(dice_game.dice(d20), [1, 2, 3]);

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
