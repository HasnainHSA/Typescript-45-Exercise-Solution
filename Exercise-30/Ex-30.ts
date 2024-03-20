// Declaring an array of usernames
let usernames: string[] = ['Sufiyan', 'admin', 'Hasnain', 'Ibrahim', 'Mustafa'];

// Declaring an array
usernames = [];

// checking if the array has values
if(usernames.length === 0){
    console.log("We need to find some users!");
}
else{
// Loop through the array and print greetings
for (const username of usernames) {
  if (username === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Welcome, ${username}!`);
  }
}
}