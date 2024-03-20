// Define an interface for properties types
interface CustomObject {
  favoriteColor: string;
  luckyNumber: number;
}

// Create an object using an object literal
const myCustomObject: CustomObject = {
  favoriteColor: "Yellow",
  luckyNumber: 7,
};

console.log("Favorite Color:", myCustomObject.favoriteColor);
console.log("Lucky Number:", myCustomObject.luckyNumber);
