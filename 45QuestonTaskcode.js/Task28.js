/*Stages of Life: Write an if-else chain that determines a 
person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a 
message that the person is a baby.
• If the person is at least 2 years old but less than 4, 
print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13,
 print a message that the person is a kid.
• If the person is at least 13 years old but less than 20
  print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65
 print a message that the person is an adult.
• If the person is age 65 or older, print a message that 
the person is an elder.*/


let age1 = prompt("Enter your age?");
if (age1 < 2) {
  alert("You are Baby.");
} else if (age1 >= 2 && age < 4) {
  alert("You are Toddler.");
} else if (age1 >= 4 && age < 13) {
  alert("You are Kid.");
} else if (age1 >= 13 && age < 20) {
  alert("You are Teenage.");
} else if (age1 >= 20 && age < 65) {
  alert("You are Adult.");
} else if (age1 >= 65) {
  alert("You are Elder.");
}
