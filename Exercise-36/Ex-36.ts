// creating a function
function makeShirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`T-Shirt size: ${size}`);
    console.log(`Message printed on the shirt: "${message}"`);
}

// calling the function
makeShirt();

makeShirt("medium");

// Small shirt with custom message
makeShirt("small", "Coding Master!"); 