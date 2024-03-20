// Tests for equality and inequality with strings
let fruit1 = "apple";
let fruit2 = "banana";
console.log(fruit1 === fruit2); 

// Tests using the lower case function
const inputString = "Hello, TypeScript!";
const lowerCaseString = inputString.toLowerCase();
console.log(lowerCaseString === "hello, typescript!");

// Numerical tests involving equality and inequality
const num1 = 10;
const num2 = 20;
console.log(num1 < num2);

// Greater than or equal to
const age = 18;
console.log(age >= 18);

// Logical AND
const isWeekend = true;
const hasSunshine = false;

const idealBeachDay = isWeekend && hasSunshine;
console.log(idealBeachDay);

// Logical OR
let isRaining = false;
let hasUmbrella = true;

let shouldTakeUmbrella = isRaining || hasUmbrella;
console.log(shouldTakeUmbrella);

// Test whether an item is in an array
const fruitsArray :string[] = ["apple", "banana", "cherry"];
const searchFruit = "banana";
console.log(fruitsArray.indexOf(searchFruit) === 1);
