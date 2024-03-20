var friendsArray = ["Sufiyan", "Ibrahim", "Ali", "Ahmed", "Umer"];
var printArray = friendsArray.map(function (friendname, i) {
    console.log("".concat(i + 1, ": ").concat(friendname));
});
