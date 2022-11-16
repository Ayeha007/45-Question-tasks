/*Alien Colors #2: Choose a color for an alien as you did 
in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that 
the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement 
that the player just earned 10 points.
• Write one version of this program that runs the if 
block and another that runs the else block.*/

let alien2 = prompt("Enter Alien color?('green', 'yellow', 'red')");

if (alien2 === "green") {
  console.log("Wow!!! You earned 5 points");
} else {
  console.log("Wow!!! You earned 10 points");
}

let alien = prompt("Enter Alien color?('green', 'yellow', 'red')");

if (alien === "green") {
 console.log("Wow!!! You earned 5 points");
} else {
  console.log("Wow!!! you earned 10 points");
}
