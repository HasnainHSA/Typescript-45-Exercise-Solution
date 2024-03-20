// Declare friend names and a greeting message
let friendsArray: string[] = ["Sufiyan", "Ibrahim", "Ali", "Ahmed", "Umer"];
let custom_message: string = "How has your day been today? ";

// Print a greeting to each friend
printArray = friendsArray.map((friendname, i) => {
  console.log(`${friendname}, ${custom_message}`);
});
