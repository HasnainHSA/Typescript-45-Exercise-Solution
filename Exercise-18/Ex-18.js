var namesArray = ["Milad", "Saad", "Anas"];
var invite_message = "you are invited to the dinner.";
// printing previous guests with invitations message
var firstInvitedPerson = namesArray.map(function (personName, i) {
    console.log("".concat(personName, " ").concat(invite_message));
});
// guest who can't make it to the dinner
var guest_cannot_attend = "Saad";
//so declare a new name to replace the old one
var replace_guest = "Mustafa";
console.log("\n".concat(guest_cannot_attend, " can\u2019t make it to the dinner so the new guest is ").concat(replace_guest, "\n"));
// Replace "Saad" with "Mustafa"
namesArray.splice(1, 1, replace_guest);
// Now Generating the new invitations
var invitedPerson = namesArray.map(function (personName) {
    console.log("".concat(personName, " ").concat(invite_message));
});
console.log("".concat(namesArray.length, "  number of people are invited to the dinner"));
