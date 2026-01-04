const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// NOTES: Numbers in JavaScript *******************
//
// NUMBER CREATION:
// 1. Literal: const num = 400
// 2. Number object: const num = new Number(100) (creates object)
//
// NUMBER METHODS:
// ┌─────────────────────────┬──────────────────────────────────────────────┐
// │   Method                │   Description                                │
// ├─────────────────────────┼──────────────────────────────────────────────┤
// │   .toString()           │   Converts number to string "100"            │
// │   .toFixed(digits)      │   Fixed decimal places: (100).toFixed(2)→"100.00"
// │   .toPrecision(digits)  │   Total significant digits: (123.89).toPrecision(4)→"123.9"
// │   .toLocaleString()     │   Formats with locale separators             │
// └─────────────────────────┴──────────────────────────────────────────────┘
//
// toLocaleString Examples:
// (1000000).toLocaleString('en-US')  → "1,000,000"  (US format)
// (1000000).toLocaleString('en-IN')  → "10,00,000"  (Indian format)
//
// toFixed vs toPrecision:
// - toFixed(2)     → exactly 2 digits AFTER decimal point
// - toPrecision(4) → exactly 4 TOTAL significant digits



// ******************* MATHS *******************

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



// NOTES: Math Object *******************
//
// Math is a built-in object with math constants and functions (not a constructor!)
//
// MATH CONSTANTS:
// Math.PI    → 3.141592653589793
// Math.E     → 2.718281828459045 (Euler's number)
//
// MATH METHODS:
// ┌─────────────────────────┬──────────────────────────────────────────────┐
// │   Method                │   Description                                │
// ├─────────────────────────┼──────────────────────────────────────────────┤
// │   Math.abs(x)           │   Absolute value: abs(-4) → 4                │
// │   Math.round(x)         │   Rounds to nearest integer: round(4.5) → 5  │
// │   Math.ceil(x)          │   Rounds UP: ceil(4.1) → 5                   │
// │   Math.floor(x)         │   Rounds DOWN: floor(4.9) → 4                │
// │   Math.min(a, b, c...)  │   Returns smallest value                     │
// │   Math.max(a, b, c...)  │   Returns largest value                      │
// │   Math.pow(x, y)        │   x to the power y: pow(2, 3) → 8            │
// │   Math.sqrt(x)          │   Square root: sqrt(16) → 4                  │
// │   Math.random()         │   Random decimal between 0 (inclusive) and 1 (exclusive)
// └─────────────────────────┴──────────────────────────────────────────────┘
//
// ⭐ RANDOM NUMBER FORMULA (IMPORTANT!):
// ┌─────────────────────────────────────────────────────────────────────────┐
// │   Math.floor(Math.random() * (max - min + 1)) + min                     │
// │                                                                         │
// │   This gives a random INTEGER between min and max (BOTH inclusive)      │
// └─────────────────────────────────────────────────────────────────────────┘
//
// Breaking it down:
// 1. Math.random()           → 0 to 0.999...
// 2. * (max - min + 1)       → 0 to (range)
// 3. Math.floor()            → 0 to (range - 1) as integer
// 4. + min                   → min to max
//
// Example: Random between 10 and 20
// Math.floor(Math.random() * 11) + 10  → gives 10, 11, 12... 20







