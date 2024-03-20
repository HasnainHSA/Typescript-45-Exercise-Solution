// Declares a variable
let friendsArray: string[] = ["Sufiyan", "Ibrahim", "Ali", "Ahmed", "Umer"];

// Defines a constant named 
const printArray = friendsArray.map((friendname, i) => {
  console.log(`${i + 1}: ${friendname}`);
});
