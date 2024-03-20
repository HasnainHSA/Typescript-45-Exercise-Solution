let namesArray = ["Milad", "Saad", "Anas"];
let invite_message = "you are invited to the dinner.";

// printing previous guests with invitations message
let firstInvitedPerson = namesArray.map((personName, i) => {
    console.log(`${personName} ${invite_message}`)
})

// guest who can't make it to the dinner
let guest_cannot_attend = "Saad";

//so declare a new name to replace the old one
let replace_guest = "Mustafa";

console.log(`\n${guest_cannot_attend} can’t make it to the dinner so the new guest is ${replace_guest}\n`)


// Replace "Saad" with "Mustafa"
namesArray.splice(1, 1, replace_guest)

// Now Generating the new invitations
let invitedPerson = namesArray.map((personName) => {
    console.log(`${personName} ${invite_message}`);
});

console.log(`${namesArray.length}  number of people are invited to the dinner`)