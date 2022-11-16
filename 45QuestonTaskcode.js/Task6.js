/*Stripping Names: Store a person’s name, and include some whitespace 
characters at the beginning and end of the name. Make sure you use each 
character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after 
striping the white spaces*/

// Store a person’s name
let userName2 =prompt("Enter your name?");

// user name With Whitespace
let nameWithWhiteSpace = "\t" + userName2 + " \n";
console.log(nameWithWhiteSpace);

//user name without whitespace
console.log(userName2.trim());
