function isUsernameAvailable(username, currentUsers) {
    // Convert username to lowercase for case-insensitive comparison
    var usernameToCheck = username.toLowerCase();
    // Check if the username already exists in the current user list
    for (var _i = 0, currentUsers_1 = currentUsers; _i < currentUsers_1.length; _i++) {
        var currentUser = currentUsers_1[_i];
        if (currentUser.toLowerCase() === usernameToCheck) {
            return false; // Username already exists
        }
    }
    // If the loop completes without finding a match, the username is available
    return true;
}
function checkNewUsers(newUsers, currentUsers) {
    for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
        var newUser = newUsers_1[_i];
        if (isUsernameAvailable(newUser, currentUsers)) {
            console.log("".concat(newUser, " is available!"));
        }
        else {
            console.log("".concat(newUser, " is already taken. Please choose another username."));
        }
    }
}
// Sample usernames
var currentUsers = ["Ali", "Anas", "Hasnain123"];
var newUsers = ["Maheen", "anas", "Areesha", "Hasnain123"];
// Check usernames
checkNewUsers(newUsers, currentUsers);
