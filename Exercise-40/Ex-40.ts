// creating a function
function showMagicians(magicianNames: string[]): void {
  for (let i = 0; i < magicianNames.length; i++) {
    const magicianName = magicianNames[i];
    console.log(magicianName);
  }
}

// Declaring an array of magician names
const magicians: string[] = ["David Copperfield", "Penn & Teller", "Houdini", "Dynamo"];

// calling the function
showMagicians(magicians);