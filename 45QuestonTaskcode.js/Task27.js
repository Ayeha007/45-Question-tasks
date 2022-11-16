/*Alien Colors #3: Turn your if-else chain from Exercise 
5-4 into an if-else chain.
• If the alien is green, print a message that the player 
earned 5 points.
• If the alien is yellow, print a message that the 
player earned 10 points.
• If the alien is red, print a message that the player 
earned 15 points.
• Write three versions of this program, making sure each 
message is printed for the appropriate color alien.
*/

let align3 = prompt("Enter Alien color?('green', 'yellow', 'red')");

if (align3 === "green") {
  alert("Wow!!! You earned 5 points");
} else {
  alert("Wrong Input");
}

let align4 = prompt("Enter Alien color?('green', 'yellow', 'red')");

if (align4 === "yellow") {
  alert("Wow!!! You earned 10 points");
} else {
  alert("Wrong Input");
}

let game = prompt("Enter Alien color?('green', 'yellow', 'red')");
if (game === "red") {
 console.log("Wow!!! You earned 15 points");
} else {
  console.log("Wrong Input");
}
