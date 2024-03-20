// creating a function
function showMagicians(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
// creating a function
function makeGreat(magicianNames) {
    // Create a new array to store the modified names
    var greatMagicians = [];
    //add " the Great" to each name
    for (var i = 0; i < magicianNames.length; i++) {
        greatMagicians.push(magicianNames[i] + " the Great");
    }
    return greatMagicians;
}
// Declaring an array of magician names
var magicians = ["David Copperfield", "Penn & Teller", "Houdini", "Dynamo"];
// Show the original list
console.log("Original magicians:");
showMagicians(magicians);
var greatMagicians = makeGreat(magicians.slice());
console.log("\nMagicians with the Great title:");
showMagicians(greatMagicians);
console.log("\nOriginal magicians (unchanged):");
showMagicians(magicians);
