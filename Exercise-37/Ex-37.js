// creating a function
function describeCity(city, country) {
    if (country === void 0) { country = "unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// calling the function
describeCity("Karachi", "Pakistan");
// Default country (unknown)
describeCity("Tokyo");
describeCity("Paris", "France");
