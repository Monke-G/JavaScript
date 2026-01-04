//  PRIMITIVE

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// REFERENCE (NON-PRIMITIVE)

const heroes = ["spiderman", "doctor strange", "batman"];

let myObj = {
    name: "Pranjal",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// NOTES: Data Types Summary *******************
//
// ┌─────────────────────────────────────────────────────────────────────────┐
// │                     PRIMITIVE TYPES (7)                                 │
// ├──────────────┬──────────────────────────────────────────────────────────┤
// │   String     │   "hello", 'world', `template`                           │
// │   Number     │   100, 100.3, Infinity, NaN                              │
// │   Boolean    │   true, false                                            │
// │   null       │   Intentional empty value                                │
// │   undefined  │   Variable declared but not assigned                     │
// │   Symbol     │   Unique identifier: Symbol('desc')                      │
// │   BigInt     │   Large integers: 123456789n                             │
// └──────────────┴──────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────────────────────┐
// │                  NON-PRIMITIVE / REFERENCE TYPES                        │
// ├──────────────┬──────────────────────────────────────────────────────────┤
// │   Array      │   ["a", "b", "c"]                                        │
// │   Object     │   { name: "Pranjal", age: 19 }                           │
// │   Function   │   function() { } or () => { }                            │
// └──────────────┴──────────────────────────────────────────────────────────┘
//
// SYMBOL:
// - Each Symbol is UNIQUE, even with same description
// - Symbol('123') === Symbol('123')  → false (always unique!)
// - Used for creating unique object property keys



// ******************* MEMORY *******************

// STACK (Primitive), HEAP (Non-Primitive)

let myGithubname = "Monke-G"
let anothername = myGithubname
anothername = "Human-G"
console.log(myGithubname);
console.log(anothername);

let userOne = {
    Email: "user@google.com",
    UPI: "user@oksbi",
}
let userTwo = userOne
userTwo.Email = "pranjal@google.com"
console.log(userOne.Email);
console.log(userTwo.Email);


// NOTES: Stack vs Heap Memory *******************
//
// ┌─────────────────────────────────────────────────────────────────────────┐
// │         STACK (Primitives)      │        HEAP (Non-Primitives)          │
// ├─────────────────────────────────┼───────────────────────────────────────┤
// │  Stores actual VALUE            │  Stores actual object                 │
// │  Copy = new independent copy    │  Copy = reference to SAME object      │
// │  Changes don't affect original  │  Changes AFFECT original!             │
// └─────────────────────────────────┴───────────────────────────────────────┘
//
// STACK Example (Primitives - COPY BY VALUE):
// ┌────────────────────────────────────────────────────────────────────────┐
// │   let a = "Monke-G"                                                    │
// │   let b = a          // b gets a COPY of the value                     │
// │   b = "Human-G"      // changing b doesn't affect a                    │
// │   console.log(a)     // "Monke-G" (unchanged!)                         │
// │   console.log(b)     // "Human-G"                                      │
// └────────────────────────────────────────────────────────────────────────┘
//
// HEAP Example (Reference - COPY BY REFERENCE):
// ┌────────────────────────────────────────────────────────────────────────┐
// │   let userOne = { Email: "user@google.com" }                           │
// │   let userTwo = userOne    // userTwo points to SAME object in heap    │
// │   userTwo.Email = "pranjal@google.com"   // modifies the shared object │
// │   console.log(userOne.Email)  // "pranjal@google.com" (CHANGED!)       │
// │   console.log(userTwo.Email)  // "pranjal@google.com"                  │
// └────────────────────────────────────────────────────────────────────────┘
//
// VISUAL:
//   STACK                         HEAP
// ┌─────────┐                  ┌──────────────┐
// │ a: "X"  │                  │  { obj }     │ ← userOne & userTwo
// │ b: "Y"  │                  │              │   both point here!
// │userOne: ●────────────────► │              │
// │userTwo: ●────────────────► │              │
// └─────────┘                  └──────────────┘
//
// HOW TO CREATE TRUE COPY OF OBJECT (avoid reference):
// 1. Spread operator: let copy = { ...original }
// 2. Object.assign(): let copy = Object.assign({}, original)
// 3. JSON method: let copy = JSON.parse(JSON.stringify(original)) (deep copy)
//
// typeof RESULTS:
// typeof "hello"     → "string"
// typeof 100         → "number"
// typeof true        → "boolean"
// typeof undefined   → "undefined"
// typeof null        → "object"    ⚠️ (JS bug!)
// typeof Symbol()    → "symbol"
// typeof {}          → "object"
// typeof []          → "object"    (arrays are objects!)
// typeof function()  → "function"
