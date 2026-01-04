// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2);



// NOTES: Comparison Operators *******************
//
// COMPARISON OPERATORS:
// >   → Greater than
// <   → Less than
// >=  → Greater than or equal to
// <=  → Less than or equal to
// ==  → Equal (loose equality - compares VALUE only, allows type coercion)
// === → Strict equal (compares VALUE + TYPE, no coercion)
// !=  → Not equal (loose)
// !== → Strict not equal
//
// ┌────────────────────────────────────────────────────────────────────┐
// │              == (Loose) vs === (Strict) Equality                   │
// ├────────────────────────────────────────────────────────────────────┤
// │   "2" == 2    → true   (string "2" converted to number 2)          │
// │   "2" === 2   → false  (different types: string vs number)         │
// │   0 == false  → true   (false converts to 0)                       │
// │   0 === false → false  (number vs boolean)                         │
// └────────────────────────────────────────────────────────────────────┘
// BEST PRACTICE: Always use === to avoid unexpected type coercion bugs!
//
//
// ⚠️ WEIRD BEHAVIOR: null & undefined comparisons
// ┌────────────────────────────────────────────────────────────────────┐
// │   null > 0    → false   (null converts to 0, 0 > 0 is false)       │
// │   null == 0   → false   (== treats null specially, doesn't convert)│
// │   null >= 0   → true    (null converts to 0, 0 >= 0 is true)       │
// └────────────────────────────────────────────────────────────────────┘
// WHY? == and comparison operators (>, <, >=, <=) work differently!
// - Comparisons (>, <, >=, <=) convert null to 0
// - Equality (==) does NOT convert null (null only equals null or undefined)
//
// ┌────────────────────────────────────────────────────────────────────┐
// │   undefined == 0  → false                                          │
// │   undefined > 0   → false   (undefined converts to NaN)            │
// │   undefined < 0   → false   (NaN compared to anything = false)     │
// └────────────────────────────────────────────────────────────────────┘
// undefined converts to NaN in comparisons, and NaN is NEVER equal to anything!
//
// SPECIAL CASES:
// null == undefined   → true  (they are loosely equal to each other)
// null === undefined  → false (different types)
//
// TIP: Avoid comparisons with null/undefined using >, <, >=, <= 
//      Use explicit checks: if (value === null) or if (value == null)
