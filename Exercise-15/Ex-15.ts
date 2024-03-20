var namesArray :string[]= ["Milad", "Saad", "Anas"];

// Replace "Saad" with "Mustafa"
namesArray.splice(1,1,"Mustafa")

let invite_message = "Good news, you are invited to the dinner.";

console.log("We found a bigger dinner table, so now more space is available \n")

namesArray.unshift("Owais");

namesArray.push("Hina");

let findMidIndex = Math.floor(namesArray.length / 2);

namesArray.splice(findMidIndex,0,"Zainab")

let  NewInvitedPerson = namesArray.map((personName, i) => {
    console.log (`${personName} ${invite_message}`)
})