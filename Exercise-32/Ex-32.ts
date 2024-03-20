// Function to get the ordinal for a number
function getOrdinalSuffix(num: number): string {
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

// Declaring an array of number
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
numbers.forEach(num => {
    console.log(`${num}${getOrdinalSuffix(num)}`);
});