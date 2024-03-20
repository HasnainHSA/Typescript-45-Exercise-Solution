// Declaring a variable 
var personName = "Hasnain";

// Printing the lowercase version of 'personName'
console.log("LowerCase: ".concat(personName.toLowerCase(), " \n"));

// Printing the uppercase version of 'personName'
console.log("UpperCase: ".concat(personName.toUpperCase(), " \n"));

// Printing the title case version of 'personName' 
// and concatenating it
console.log("TitleCase: ".concat(personName.charAt(0).toUpperCase()).concat(personName.slice(1)));
