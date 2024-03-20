var friendsArray = ["Sufiyan", "Ibrahim", "Ali", "Ahmed", "Umer"];
var custom_message = "How has your day been today? 😊";
var printArray = friendsArray.map(function (friendname, i) {
    console.log("".concat(friendname, ", ").concat(custom_message));
});
