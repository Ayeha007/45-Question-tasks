/*Dinner Guests: Working with one of the programs from Exercises 14 through 
18, print a message indicating the number of people you are inviting to 
dinner.*/

var guests = ["Ahmad", "Mohad", "Faran"];
guests.pop();
guests.push("Amber");

alert("Hello everyone we got more space for 3 more people");
guests.unshift("Hina");
guests.splice(2, 0, "Imran");
guests.push("Kamal");

alert("Sorry guys there is limited seats available, So I'm just inviting two people"
);

var notInvitedGuest = guests[5];
guests.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests[4];
guests.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests[3];
guests.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests[2];
guests.pop();
alert("Sorry you are not invited " + notInvitedGuest);

alert(guests[0] + " You are invited to Ana's 1st Birthday Party.");
alert(guests[1] + " You are invited to Ana's 1st Birthday Party.");

var notInvitedGuest = guests[1];
guests.pop();
alert("Sorry you are not invited " + notInvitedGuest);

var notInvitedGuest = guests[0];
guests.pop();
alert("Sorry you are not invited " + notInvitedGuest);

alert(0);
