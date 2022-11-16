/*No Users: Add an if test to Exercise 28 to make sure the list of users is
not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct
message is printed.*/

let ages = prompt("Enter your age?");
if (ages < 2) {
  console.log("You are Baby.");
} else if (ages >= 2 && ages < 4) {
  aconsole.log("You are Toddler.");
} else if (ages >= 4 && ages < 13) {
  console.log("You are Kid.");
} else if (ages >= 13 && ages < 20) {
  console.log("You are Teenage.");
} else if (ages >= 20 && ages < 65) {
  console.log("You are Adult.");
} else if (ages >= 65) {
  console.log("You are Elder.");
} else {
  console.log("We need to find some users!");
}
