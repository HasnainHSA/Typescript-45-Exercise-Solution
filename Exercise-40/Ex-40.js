function showMagicians(magicianNames) {
    // Use a for loop to iterate through each magician name
    for (var i = 0; i < magicianNames.length; i++) {
        var magicianName = magicianNames[i];
        console.log(magicianName);
    }
}
// Declaring an array of magician names
var magicians = ["David Copperfield", "Penn & Teller", "Houdini", "Dynamo"];
// calling the function
showMagicians(magicians);
