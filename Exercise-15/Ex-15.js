var namesArray = ["Milad", "Saad", "Anas"];
// Replace "Saad" with "Mustafa"
namesArray.splice(1, 1, "Mustafa");
var invite_message = "We found a bigger dinner table, you are invited to the dinner.";
console.log("We found a bigger dinner table, so now more space is available \n");
namesArray.unshift("Owais");
namesArray.push("Hina");
var findMidIndex = Math.floor(namesArray.length / 2);
namesArray.splice(findMidIndex, 0, "Zainab");
var NewInvitedPerson = namesArray.map(function (personName, i) {
    console.log("".concat(personName, " ").concat(invite_message));
});
