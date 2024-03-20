// Function to get the ordinal suffix for a number
function getOrdinalSuffix(num) {
    if (num === 1) {
        return 'st';
    }
    else if (num === 2) {
        return 'nd';
    }
    else if (num === 3) {
        return 'rd';
    }
    else {
        return 'th';
    }
}
// Array to store numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print ordinal numbers
numbers.forEach(function (num) {
    console.log("".concat(num).concat(getOrdinalSuffix(num)));
});
