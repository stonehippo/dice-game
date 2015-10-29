# Dice Game

A tiny functional Javascript library for dice-based game mechanics.

## Usage

Include the library

```
var dg = require('dice_game');
```

Create some die types

```
var d4 = dg.die(6);
var d6 = dg.die(6);
var d20 = dg.die(20);
```

Create some dice for rolls

```
var _1d6 = dg.dice(d6, 1);
var _3d6 = dg.dice(d6, 3);
```

Roll some dice

```
dg.roll(_3d6()); // returns an integer between 3…18
```
