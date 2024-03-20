// creating a function for city name
function cityCountry(city: string, country: string): string {
    return `"${city}, ${country}"`;
}

// calling the function
const city1 = cityCountry("Lahore", "Pakistan");
const city2 = cityCountry("Tokyo", "Japan");
const city3 = cityCountry("Paris", "France");

console.log(city1);
console.log(city2);
console.log(city3);