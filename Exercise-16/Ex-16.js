var namesArray = ["Milad", "Saad", "Anas"];
// Replace "Saad" with "Mustafa"
namesArray.splice(1, 1, "Mustafa");
var invite_message = "Good news, you are invited to the dinner.";
console.log("We found a bigger dinner table, so now more space is available \n");
namesArray.unshift("Owais");
namesArray.push("Hina");
var findMidIndex = Math.floor(namesArray.length / 2);
namesArray.splice(findMidIndex, 0, "Zainab");
var NewInvitedPerson = namesArray.map(function (personName, i) {
    console.log("".concat(personName, " ").concat(invite_message));
});
console.log("\n New dinner table won’t arrive in time for the dinner");
while (namesArray.length > 2) {
    var guest_removed = namesArray.pop();
    console.log("\n ".concat(guest_removed, " sorry you can\u2019t invite them to dinner"));
}
var new_message = "Luckly, you are invited to the dinner";
var invitedPerson = namesArray.map(function (personName) {
    console.log("\n ".concat(personName, " ").concat(new_message));
});
namesArray.pop();
namesArray.pop();
// now we get empty list
console.log(namesArray);
