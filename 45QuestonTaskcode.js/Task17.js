/*Shrinking Guest List: You just found out that your new dinner table won’t 
arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a 
message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in
your list. Each time you pop a name from your list, print a message to that
person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting 
them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of 
your program.*/

let guests0 = ["Ahmad", "Mohad", "Faran"];
guests0.pop();
guests0.push("Amber");

alert("Hello everyone we got more space for 3 more people");
guests0.unshift("Hina");
guests0.splice(2, 0, "Imran");
guests0.push("Kamal");

alert(
  "Sorry guys there is limited seats available, So I'm just inviting two people"
);

var notInvitedGuest = guests0[5];
guests0.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests0[4];
guests0.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests0[3];
guests0.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests0[2];
guests0.pop();
alert("Sorry you are not invited " + notInvitedGuest);

alert(guests0[0] + " You are invited to Ana's 1st Birthday Party.");
alert(guests0[1] + " You are invited to Ana's 1st Birthday Party.");

var notInvitedGuest = guests0[1];
guests0.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests0[0];
guests0.pop();
alert("Sorry you are not invited " + notInvitedGuest);
