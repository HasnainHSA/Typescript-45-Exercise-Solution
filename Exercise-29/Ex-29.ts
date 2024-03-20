// Declaring an array of usernames
let usernames: string[] = ['Sufiyan', 'admin', 'Hasnain', 'Ibrahim', 'Mustafa'];

// Loop through the array and print greetings
for (const username of usernames) {
  if (username === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Welcome, ${username}!`);
  }
}