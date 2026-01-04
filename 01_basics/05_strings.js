const name ="Pranjal"
const repoCount = 5
// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pranjal-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8, 10)
// console.log(anotherString);

const newStringOne = "   Pranjal   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://pranjal.com/pranjal%20singh%20pokhariya"
// console.log(url.replace('%20', '-'));
// console.log(url.replaceAll('%20', '-'));
// console.log(url.includes('sundar'));
// console.log(gameName.split('-'));



// NOTES: Strings in JavaScript *******************
//
// STRING CREATION:
// 1. Literal: const str = "hello" or 'hello'
// 2. Template literal: const str = `hello ${variable}` (backticks)
// 3. String object: const str = new String('hello') (creates object, not primitive)
//
// TEMPLATE LITERALS (backticks `):
// - Allows string interpolation: `Hello ${name}`
// - Can span multiple lines
// - Can embed expressions: `Sum is ${2 + 3}`
// - PREFERRED over concatenation: name + " is " + age
//
//
// ******************* STRING METHODS *******************
//
// ┌──────────────────────┬────────────────────────────────────────────────┐
// │   Method             │   Description                                  │
// ├──────────────────────┼────────────────────────────────────────────────┤
// │   .length            │   Property (not method!) - returns length      │
// │   .toUpperCase()     │   Returns string in UPPERCASE                  │
// │   .toLowerCase()     │   Returns string in lowercase                  │
// │   .charAt(index)     │   Returns character at index                   │
// │   .indexOf(str)      │   Returns first index of str, or -1 if not found│
// │   .lastIndexOf(str)  │   Returns last index of str                    │
// │   .includes(str)     │   Returns true/false if str exists             │
// └──────────────────────┴────────────────────────────────────────────────┘
//
// EXTRACTING SUBSTRINGS:
// ┌──────────────────────────────────────────────────────────────────────┐
// │   .substring(start, end)  │  Extracts from start to end (end excluded)│
// │                           │  Negative values treated as 0             │
// │   .slice(start, end)      │  Same as substring BUT supports negatives │
// │                           │  slice(-3) = last 3 characters            │
// └───────────────────────────┴──────────────────────────────────────────┘
// Example: "pranjal".substring(0, 4) → "pran"
// Example: "pranjal".slice(-3)       → "jal" (last 3 chars)
//
// MODIFYING STRINGS:
// ┌──────────────────────────────────────────────────────────────────────┐
// │   .trim()           │  Removes whitespace from BOTH ends             │
// │   .trimStart()      │  Removes whitespace from start only            │
// │   .trimEnd()        │  Removes whitespace from end only              │
// │   .replace(a, b)    │  Replaces FIRST occurrence of a with b         │
// │   .replaceAll(a, b) │  Replaces ALL occurrences of a with b          │
// └─────────────────────┴────────────────────────────────────────────────┘
//
// SPLITTING STRINGS:
// .split(separator) → Converts string to ARRAY
// "a-b-c".split('-')    → ["a", "b", "c"]
// "hello".split('')     → ["h", "e", "l", "l", "o"]
//
// IMPORTANT:
// - Strings are IMMUTABLE - methods return NEW strings, original unchanged
// - String indexes start at 0
// - new String() creates object (has __proto__), literal creates primitive
// - Access characters: str[0] or str.charAt(0)















