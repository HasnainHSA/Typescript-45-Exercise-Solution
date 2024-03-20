// creating a function
function showMagicians(magicianNames: string[]) {
  for (let i = 0; i < magicianNames.length; i++) {
    console.log(magicianNames[i]);
  }
}

// creating a function
function makeGreat(magicianNames: string[]): string[] {
  // Create a new array to store the modified names
  const greatMagicians: string[] = [];

  //add " the Great" to each name
  for (let i = 0; i < magicianNames.length; i++) {
    greatMagicians.push(magicianNames[i] + " the Great");
  }

  return greatMagicians;
}

// Declaring an array of magician names
const magicians: string[] = ["David Copperfield", "Penn & Teller", "Houdini", "Dynamo"];

// Show the original list
console.log("Original magicians:");
showMagicians(magicians);

const greatMagicians = makeGreat(magicians.slice());

console.log("\nMagicians with the Great title:");
showMagicians(greatMagicians);

console.log("\nOriginal magicians (unchanged):");
showMagicians(magicians);
