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


console.log("\n New dinner table won’t arrive in time for the dinner");


while(namesArray.length > 2){
    let guest_removed = namesArray.pop()
    console.log(`\n ${guest_removed} sorry you can’t invite them to dinner`);
}


let new_message: string="Luckly, you are invited to the dinner"

let invitedPerson = namesArray.map((personName) => {
    console.log(`\n ${personName} ${new_message}`);
});


namesArray.pop()
namesArray.pop()

// now we get empty list
console.log(`the list is empty: ${namesArray}`)