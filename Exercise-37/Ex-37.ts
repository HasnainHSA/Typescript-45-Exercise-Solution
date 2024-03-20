// creating a function for city name
function describeCity(city: string, country: string = "unknown") {
    console.log(`${city} is in ${country}.`);
}

// calling the function
describeCity("Karachi", "Pakistan");

// Default country (unknown)
describeCity("Tokyo");

describeCity("Paris", "France");