let score = null
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let isLoggedIn = "Pranjal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let somenumber = 33

let stringNumber = String(somenumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// NOTES: Type Conversion *******************
//
// Number() Conversion:
// ┌─────────────────┬─────────────┐
// │   Input         │   Output    │
// ├─────────────────┼─────────────┤
// │   "33"          │     33      │
// │   "33abc"       │     NaN     │
// │   true          │     1       │
// │   false         │     0       │
// │   null          │     0       │
// │   undefined     │     NaN     │
// │   ""            │     0       │
// └─────────────────┴─────────────┘
//
// Boolean() Conversion (Falsy vs Truthy):
// FALSY values (convert to false): 0, "", null, undefined, NaN, false
// TRUTHY values (convert to true): Everything else! (non-zero numbers, non-empty strings, objects, arrays)
//
// String() Conversion:
// - Converts any value to its string representation
// - 33 → "33", true → "true", null → "null"



// ******************* OPERATIONS *******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2*3);

let str1 = "hello"
let str2 = " pranjal"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
gameCounter++;
// console.log(gameCounter);


// NOTES: Operations *******************
//
// ARITHMETIC OPERATORS:
// +  → Addition        (2 + 2 = 4)
// -  → Subtraction     (2 - 2 = 0)
// *  → Multiplication  (2 * 2 = 4)
// /  → Division        (2 / 3 = 0.666...)
// %  → Modulus         (5 % 2 = 1) remainder
// ** → Exponentiation  (2 ** 3 = 8) power
//
// STRING CONCATENATION:
// "hello" + " world" → "hello world"
//
// ⚠️ TYPE COERCION (tricky!):
// "1" + 2      → "12"   (number converts to string)
// 1 + "2"      → "12"   (number converts to string)
// "1" + 2 + 2  → "122"  (left to right: "1"+2="12", "12"+2="122")
// 1 + 2 + "2"  → "32"   (left to right: 1+2=3, 3+"2"="32")
// RULE: If ANY operand is string, + does concatenation!
//
// UNARY + OPERATOR:
// +true → 1    (converts to number)
// +""   → 0    (converts to number)
// +"5"  → 5    (quick string to number conversion)
//
// INCREMENT/DECREMENT:
// ++x (prefix)  → Increments FIRST, then returns value
// x++ (postfix) → Returns value FIRST, then increments
// Example: let x = 5;
//   console.log(++x) → prints 6, x is 6
//   console.log(x++) → prints 6, x becomes 7
//
// CHAINED ASSIGNMENT:
// a = b = c = 5  → All variables get value 5 (right to left evaluation)
