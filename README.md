# Dice Game

A tiny functional Javascript library for dice-based game mechanics.

## Usage

Include the library:

```
const dg = require('dice-game');
```

Create some die types. There are primitive types, and can be invoked directly (e.g. `d6()` will return a value between 1 and 6).

```
const d4 = dg.die(4);
const d6 = dg.die(6);
const d20 = dg.die(20);
```

Create some dice comboe for rolls. In other words, create a method for rolling multiple dice of the same type at once.

```
const _1d6 = dg.dice(d6, 1);
const _3d6 = dg.dice(d6, 3);
```

Roll some dice combos. This is done indirectly, with the `roll` function handling calling the specified dice objects invocation fuction.

```
dg.roll(_3d6()); // returns an integer between 3…18
```
