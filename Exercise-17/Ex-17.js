var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesArray = ["Egypt", "Rome", "Australia", "London", "Maldives"];
console.log("Array in Original order: ".concat(placesArray));
console.log("Array in alphabetical order: ".concat(__spreadArray([], placesArray, true).sort()));
console.log("Array in alphabetical order: ".concat(placesArray.slice().sort()));
console.log("Array is still in its original order: ".concat(placesArray));
console.log("Aarray in reverse alphabetical order: ".concat(placesArray.slice().reverse()));
console.log("Array is still again in its original order: ".concat(placesArray));
console.log("Original Aarray in reverse alphabetical order: ".concat(placesArray.reverse()));
console.log("Again Original Aarray in reverse alphabetical order: ".concat(placesArray.reverse()));
console.log("Original Aarray in sorted alphabetical order: ".concat(placesArray.sort()));
console.log("Original Aarray in reverse alphabetical order: ".concat(placesArray.reverse()));
