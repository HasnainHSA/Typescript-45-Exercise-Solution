function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("T-Shirt size: ".concat(size));
    console.log("Message printed on the shirt: \"".concat(message, "\""));
}
// calling the function
makeShirt();
makeShirt("medium");
// Small shirt with custom message
makeShirt("small", "Custom message!");
