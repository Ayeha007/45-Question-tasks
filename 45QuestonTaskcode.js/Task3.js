/*Name Cases: Store a person’s name in a variable, and then print that 
person’s name in lowercase, uppercase, and titlecase.*/

// ask user name & store user name in variable.
let userName1 = prompt("Enter your name?");

// show user name in upper, lower case 
alert(userName1.toLowerCase());
alert(userName1.toUpperCase());

//title case.
let firstChar = userName1.slice(0, 1);
let otherChars = userName1.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
let cappedName = firstChar + otherChars;
alert(cappedName);
