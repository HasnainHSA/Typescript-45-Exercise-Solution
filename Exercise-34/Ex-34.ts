// Declaring an array of Pets
let friendlyAnimals: string[] = ["dog", "cat", "rabbit"];

// loop through each index and print the message
for (let i = 0; i < friendlyAnimals.length; i++) {
  const animal = friendlyAnimals[i];
  console.log(`${animal.toUpperCase()}s are friendly companions.`);
}

console.log("Any of these animals would make a great pet!");
