// Tests for equality and inequality with strings
var fruit1 = "apple";
var fruit2 = "banana";
console.log(fruit1 === fruit2);
// Tests using the lower case function
var inputString = "Hello, TypeScript!";
var lowerCaseString = inputString.toLowerCase();
console.log(lowerCaseString === "hello, typescript!");
// Numerical tests involving equality and inequality
var num1 = 10;
var num2 = 20;
console.log(num1 < num2);
// Greater than or equal to
var age = 18;
console.log(age >= 18);
// Logical AND
var isWeekend = true;
var hasSunshine = false;
var idealBeachDay = isWeekend && hasSunshine;
console.log(idealBeachDay);
// Logical OR
var isRaining = false;
var hasUmbrella = true;
var shouldTakeUmbrella = isRaining || hasUmbrella;
console.log(shouldTakeUmbrella);
// Test whether an item is in an array
var fruitsArray = ["apple", "banana", "cherry"];
var searchFruit = "banana";
console.log(fruitsArray.indexOf(searchFruit) === 1);
