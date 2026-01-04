const accountId = 144553
let accountEmail = "pranjal@google.com"
var accountPassword = "12345"
accountCity = "Pithoragarh"
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



// NOTES: Variables in JavaScript *******************
//
// ┌────────────┬─────────────┬─────────────┬─────────────┬───────────────┐
// │  Keyword   │  Reassign?  │  Redeclare? │   Scope     │   Hoisting    │
// ├────────────┼─────────────┼─────────────┼─────────────┼───────────────┤
// │   const    │     ❌      │     ❌     │   Block     │ TDZ (error)   │
// │   let      │     ✅      │     ❌     │   Block     │ TDZ (error)   │
// │   var      │     ✅      │     ✅     │  Function   │ undefined     │
// │  (none)    │     ✅      │     ✅     │   Global    │ undefined     │
// └────────────┴─────────────┴─────────────┴─────────────┴───────────────┘
//
// KEY POINTS:
// - const: Must initialize at declaration, cannot reassign (use for constants)
// - let: Block-scoped, modern way to declare variables (preferred)
// - var: Function-scoped, can cause bugs due to hoisting (avoid!)
// - No keyword: Creates global variable (BAD PRACTICE - avoid!)
//
// HOISTING:
// - var → hoisted to top, initialized as undefined
// - let/const → hoisted but in "Temporal Dead Zone" (TDZ), accessing before declaration = ReferenceError
//
// SCOPE:
// - Block scope: {} - variables only accessible inside the block
// - Function scope: Variables accessible anywhere inside the function
//
// BEST PRACTICE: Use const by default, let when reassignment needed, never use var
//
// console.table() → Displays data in a nice table format in console