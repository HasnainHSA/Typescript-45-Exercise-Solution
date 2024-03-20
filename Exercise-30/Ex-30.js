// Declaring an array of usernames
var usernames = ['Sufiyan', 'admin', 'Hasnain', 'Ibrahim', 'Mustafa'];
// Declaring an array
usernames = [];
// checking if the array has values
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Welcome, ".concat(username, "!"));
        }
    }
}
