// creating a function
function createSandwichSummary(ingredients) {
    // Check if any ingredients are avaiable
    if (ingredients.length === 0) {
        console.log("You haven't chosen any ingredients for your sandwich.");
        return;
    }
    var sandwichSummary = "Your sandwich includes: ".concat(ingredients.join(", "));
    console.log(sandwichSummary);
}
// Call the function
createSandwichSummary(["bread", "cheese"]);
createSandwichSummary(["bread", "tomato", "lettuce"]);
createSandwichSummary([]);
