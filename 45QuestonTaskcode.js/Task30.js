/*Hello Admin: Make a array of five or more usernames, including the name
'admin'. Imagine you are writing code that will print a greeting to each
user after they log in to a website. Loop through the array, and print a
greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
 would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for
logging in again.*/

let userNames = ["malik", "kamal", "jon", "kim", "admin"];
for (let i = 0; i < userNames.length; i++) {
  var titles = prompt("Enter any name from list? (malik, kamal, jon, kim, admin)");
  if (titles === userNames[4]) {
   console.log(" Hello admin, would you like to see a status report?");
    break;
  } else if (titles === userNames[0]) {
    console.log("Hello " + userNames[0] + " thank you for logging in again.");
    break;
  } else if (titles === userNames[1]) {
    console.log("Hello " + userNames[1] + " thank you for logging in again.");
    break;
  } else if (titles === userNames[2]) {
    console.log("Hello " + userNames[2] + " thank you for logging in again.");
    break;
  } else if (titles === userNames[3]) {
    console.log("Hello " + userNames[3] + " thank you for logging in again.");
    break;
  }
}
