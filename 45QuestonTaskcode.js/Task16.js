/*More Guests: You just found a bigger dinner table, so now more space is 
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the 
end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one 
new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

let guests4 = ["Ahmad", "Mohad", "Faran"];
guests4.pop();
guests4.push("Amber");

alert("Hello everyone we got more space for 3 more people");
guests4.unshift("Hina");
guests4.splice(2, 0, "Imran");
guests4.push("Kamal");

alert(guests4[0] + " You are invited to Ana's 1st Birthday Party.");
alert(guests4[1] + " You are invited to Ana's 1st Birthday Party.");
alert(guests4[2] + " You are invited to Ana's 1st Birthday Party.");
alert(guests4[3] + " You are invited to Ana's 1st Birthday Party.");
alert(guests4[4] + " You are invited to Ana's 1st Birthday Party.");
alert(guests4[5] + " You are invited to Ana's 1st Birthday Party.");
