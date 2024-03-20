function showMagicians(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
function makeGreat(magicianNames) {
    // adding " the Great"
    for (var i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + " the Great";
    }
}
// Declaring an array of magician names
var magicians = ["David Copperfield", "Penn & Teller", "Houdini", "Dynamo"];
// Show the original list
console.log("Original magicians:");
showMagicians(magicians);
makeGreat(magicians);
console.log("\nMagicians with the Great title:");
showMagicians(magicians);
