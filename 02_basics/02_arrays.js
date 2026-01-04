const marvel_heroes = ["spiderman", "doctor strange", "iron man"]
const dc_heroes = ["batman","shazam", "flash" ]

// const marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const all_heroes_1 = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes_1);

const all_heroes_2 = [...marvel_heroes, ... dc_heroes]
// console.log(all_heroes_2);

const another_array = [1, 2, [3, 4], 5, [6, 7, [8, 9]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Pranjal"));
console.log(Array.from("Pranjal"));
console.log(Array.from({name: "Pranjal"}));    //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



// NOTES: Arrays (Combining & Utilities) *******************
//
// push vs concat vs spread:
// - push(array) mutates & nests: marvel_heroes.push(dc_heroes) → ["spiderman", ..., ["batman",...]]
// - concat returns NEW array (non-mutating): marvel_heroes.concat(dc_heroes)
// - spread is modern/flexible: [...marvel_heroes, ...dc_heroes]
//   Use spread for readability and adding more arrays: [...a, ...b, ...c]
//
// flat(depth):
// - Flattens nested arrays up to `depth` levels; use Infinity for full flatten
// - [1, [2, [3]]] -> flat(1) => [1, 2, [3]]; flat(2) => [1, 2, 3]
//
// Array.isArray(value): Checks if value is an array (reliable vs typeof)
// Array.from(iterable): Converts iterable/string to array → Array.from("hi") => ["h", "i"]
// Array.from(object): For array-like objects with length; plain object without length → [] (or custom mapping needed)
// Array.of(...items): Creates array from arguments → Array.of(1, 2) => [1, 2]
//
// When to use:
// - concat/spread when you need a new combined array (no mutation)
// - push when you want to modify existing array
// - flat when cleaning nested arrays
// - Array.from for strings/array-like; Array.of for safe construction from values



