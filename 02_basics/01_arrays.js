// ******************* ARRAYS *******************

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = [" Spiderman", "Doctor Strange"]
const myArr2 = new Array(1, 2, 3, 4)   
// console.log(myArr[1]);


// NOTES: Arrays *******************
// - Arrays are ordered, indexed collections (index starts at 0)
// - Two ways to create: literal [] or new Array()
// - new Array(1,2,3) → [1,2,3] (multiple args = elements)
// - new Array(5) → [ <5 empty items> ] (single number = length)
// - Arrays can hold mixed types: [1, "hello", true, null]



// ******************* ARRAY METHODS *******************

myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexof(3));

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


// NOTES: Array Methods *******************
// - push(element)    → Adds to END, returns new length (mutates array)
// - pop()            → Removes from END, returns removed element (mutates array)
// - unshift(element) → Adds to START, returns new length (mutates array)
// - shift()          → Removes from START, returns removed element (mutates array)
// - includes(value)  → Returns true/false if value exists
// - indexOf(value)   → Returns index of value, or -1 if not found (case-sensitive!)
// - join(separator)  → Converts array to STRING (default separator: comma)



// ******************* SLICE & SPLICE *******************

console.log("A ", myArr);
const myN1 = myArr.slice(1, 3)
console.log(myN1);

console.log("B ", myArr);
const myN2 = myArr.splice(1, 3)
console.log(myN2);

console.log("C ", myArr);

// NOTES: Slice vs Splice *******************
// ┌─────────────────────────────────────────────────────────────────┐
// │  slice(start, end)         │  splice(start, deleteCount, ...items)
// ├─────────────────────────────────────────────────────────────────┤
// │  Does NOT modify original  │  MODIFIES original array           │
// │  Returns new array (copy)  │  Returns removed elements          │
// │  end index NOT included    │  deleteCount = how many to remove  │
// │  Safe for copying          │  Can also INSERT new elements      │
// └─────────────────────────────────────────────────────────────────┘
// Example: arr = [0,1,2,3,4,5]
// slice(1,3)  → returns [1,2], arr unchanged
// splice(1,3) → returns [1,2,3], arr becomes [0,4,5]
// TIP: "slice" = safe copy, "splice" = surgery (modifies!)

