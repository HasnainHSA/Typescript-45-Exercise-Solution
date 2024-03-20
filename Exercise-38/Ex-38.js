// creating a function for city name
function cityCountry(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
// calling the function
var city1 = cityCountry("Lahore", "Pakistan");
var city2 = cityCountry("Tokyo", "Japan");
var city3 = cityCountry("Paris", "France");
console.log(city1);
console.log(city2);
console.log(city3);
