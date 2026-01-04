"use strict";  

// alert( 3 + 3)        // we are using nodejs, not browser

console.log("Pranjal")

let name = "pranjal"
let age = 18
let isLoggedIn = false
let state;

console.log(typeof undefined);       // undefined
console.log(typeof null);       // object



// NOTES: Data Types in JavaScript *******************
//
// "use strict" → Enables strict mode (catches common mistakes, prevents unsafe actions)
//              → Must be at the TOP of the file or function
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │                     PRIMITIVE DATA TYPES (7)                        │
// ├──────────────┬──────────────────────────────────────────────────────┤
// │   Number     │ Integers & floats, range: -(2^53-1) to (2^53-1)      │
// │   BigInt     │ For numbers larger than Number limit (append n: 123n)│
// │   String     │ Text in quotes: "hello", 'hello', or `hello`         │
// │   Boolean    │ true or false                                        │
// │   Null       │ Intentional "empty" value (assigned by programmer)   │
// │   Undefined  │ Variable declared but not assigned any value         │
// │   Symbol     │ Unique identifier (ES6), used for object properties  │
// └──────────────┴──────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │                     NON-PRIMITIVE DATA TYPE                         │
// ├──────────────┬──────────────────────────────────────────────────────┤
// │   Object     │ Collections of key-value pairs: {name: "John"}       │
// │              │ Arrays & Functions are also objects internally!      │
// └──────────────┴──────────────────────────────────────────────────────┘
//
// typeof OPERATOR:
// - typeof "hello"    → "string"
// - typeof 42         → "number"
// - typeof true       → "boolean"
// - typeof undefined  → "undefined"
// - typeof null       → "object"   ⚠️ BUG! (historical JS mistake, null is NOT an object)
// - typeof Symbol()   → "symbol"
// - typeof {}         → "object"
// - typeof []         → "object"   (arrays are objects)
// - typeof function() → "function"
//
// NULL vs UNDEFINED:
// - null      → Intentional absence of value (you set it)
// - undefined → Variable exists but has no value yet (JS sets it)
//
// REMEMBER: JavaScript is DYNAMICALLY TYPED (variables can change type)