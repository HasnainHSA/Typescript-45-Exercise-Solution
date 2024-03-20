
// creating a function
function showMagicians(magicianNames: string[]) {
  for (let i = 0; i < magicianNames.length; i++) {
    console.log(magicianNames[i]);
  }
}

function makeGreat(magicianNames: string[]): void {
  // adding " the Great"
  for (let i = 0; i < magicianNames.length; i++) {
    magicianNames[i] = magicianNames[i] + " the Great";
  }
}

// Declaring an array of magician names
const magicians: string[] = ["David Copperfield", "Penn & Teller", "Houdini", "Dynamo"];

// Show the original list
console.log("Original magicians:");
showMagicians(magicians);

makeGreat(magicians);

console.log("\nMagicians with the Great title:");
showMagicians(magicians);