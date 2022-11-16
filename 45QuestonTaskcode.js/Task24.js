/*More Conditional Tests: You don’t have to limit the number of tests you 
create to 10. If you want to try more comparisons, write more tests. Have at 
least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less 
than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array.*/

let color = prompt("your favriot color?");
if (color === "red") {
  console.log("True Answer!!!");
} else {
  console.log("Sorry Wrong Answer");
}

let city = prompt("Write your city?");
if (city === city.toLowerCase()) {
  console.log("True Answer!!!");
} else {
  console.log("Sorry Wrong Answer");
}

let result = prompt("Enter one final marks?");
if (result >= 80) {
  console.log("Your grade is A");
} else if (result >= 70) {
  console.log("Your grade is B");
} else if (result >= 50) {
  console.log("Your grade is C, Need improvement");
} else if (result < 50) {
  console.log("Your grade is F :( TRY AGAIN");
} else {
  console.log("You entered a wrong input");
}

let visa = prompt("Enter your age, education & residency?");
let age = 25;
let edu = "masters";
if ((age > 25 || edu < "masters") && res === "Pakistan") {
  console.log("Welcome to U.S.!");
} else {
  console.log("Sorry, you are not eligible to apply for PHD Class.");
}
let a = prompt("Enter any fruit?");
let fruits1 = ["mango", "banana", "orange"];
if (fruits1[2] === a) {
  console.log("True");
} else {
  console.log("False");
}

var b = prompt("Enter any fruit?");
var fruits = ["mango", "banana", "orange"];
if (fruits[2] === b) {
  alert("True");
} else {
  alert("False");
}
