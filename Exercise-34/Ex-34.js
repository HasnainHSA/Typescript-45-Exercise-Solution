// Declaring an array of Pets
var friendlyAnimals = ["dog", "cat", "rabbit"];
// loop through each index and print the message
for (var i = 0; i < friendlyAnimals.length; i++) {
    var animal = friendlyAnimals[i];
    console.log("".concat(animal.toUpperCase(), "s are friendly companions."));
}
console.log("Any of these animals would make a great pet!");
