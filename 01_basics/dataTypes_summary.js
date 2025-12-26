//  PRIMITIVE
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



// REFERENCE (NON-PRIMITIVE)
// Array, Objects, Functions

const heroes = ["spiderman", "naagraj", "doga"];

let myObj = {
    name: "Pranjal",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// Documentation: https://262.ecma-international.org/5.1/#sec-11.4.3




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
