// creating a function
function createSandwichSummary(ingredients: string[]): void {
  // Check if any ingredients are avaiable
  if (ingredients.length === 0) {
    console.log("You haven't chosen any ingredients for your sandwich.");
    return;
  }

  const sandwichSummary = `Your sandwich includes: ${ingredients.join(", ")}`;
  console.log(sandwichSummary);
}

// Call the function
createSandwichSummary(["bread", "cheese"]);
createSandwichSummary(["bread", "tomato", "lettuce"]);
createSandwichSummary([]);