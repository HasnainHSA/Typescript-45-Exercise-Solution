// Create an array of places
let placesArray: string[] = ["Egypt", "Rome", "Australia", "London", "Maldives"];

// Print the original order of the places array
console.log(`Array in Original order: ${placesArray}`);

// Create a copy of the places array, sort the copy, and print the sorted order
console.log(`Array in alphabetical order: ${placesArray.slice().sort()}`);

// Print the original order again to show the original array is not modified
console.log(`Array is still in its original order: ${placesArray}`);

// Create a copy of the places array, reverse the copy, and print the reversed order
console.log(`Array in reverse alphabetical order: ${placesArray.slice().reverse()}`);

// Print the original order again to show the original array is not modified
console.log(`Array is still again in its original order: ${placesArray}`);

// Reverse the original places array and print the reversed order 
console.log(`Original Array in reverse alphabetical order: ${placesArray.reverse()}`);

// Print the reversed order again
console.log(`Again Original Array in reverse alphabetical order: ${placesArray.reverse()}`);

// Sort the original places array and print the sorted order 
console.log(`Original Array in sorted alphabetical order: ${placesArray.sort()}`);

// Print the sorted order again
console.log(`Original Array in reverse alphabetical order: ${placesArray.reverse()}`);
