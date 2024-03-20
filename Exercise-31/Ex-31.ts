function isUsernameAvailable(username: string, currentUsers: string[]){
    // Convert username to lowercase for case-insensitive comparison
    const usernameToCheck = username.toLowerCase();
  
    // Check if the username already exists in the current user list
    for (const currentUser of currentUsers) {
      if (currentUser.toLowerCase() === usernameToCheck) {
        return false; // Username already exists
      }
    }
  
    // If the loop completes without finding a match, the username is available
    return true;
  }
  
  function checkNewUsers(newUsers: string[], currentUsers: string[]) {
    for (const newUser of newUsers) {
      if (isUsernameAvailable(newUser, currentUsers)) {
        console.log(`${newUser} is available!`);
      } else {
        console.log(`${newUser} is already taken. Please choose another username.`);
      }
    }
  }
  
  // Sample usernames
  const currentUsers = ["Ali", "Anas", "Hasnain123"];
  const newUsers = ["Maheen", "anas", "Areesha", "Hasnain123"];
  
  // Check usernames
  checkNewUsers(newUsers, currentUsers);
  