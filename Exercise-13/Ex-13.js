var namesArray = ["Milad", "Saad", "Anas"];
var invite_message = "your are invited to the dinner.";
var invitedPerson = namesArray.map(function (personName, i) {
    console.log("".concat(personName, " ").concat(invite_message, "."));
});
