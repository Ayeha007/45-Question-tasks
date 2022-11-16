/*Album: Write a function called make_album() that builds a Object describing
a music album. 
The function should take in an artist name and an album title, and it should 
return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album 
information correctly. 
Add an optional parameter to make_album() that allows you to store the number 
of tracks on an album.
If the calling line includes a value for the number of tracks, add that value 
to the album’s Object. 
Make at least one new function call that includes the number of tracks on an 
album.*/

// create object in funtion 
function make_album(artist, album,) {
    this.artist = artist
    this.album = album
}
// save value in new variable 
let song = new make_album("Atif","Rabbta");
// print return value
console.table(song);

//function to make three dictionaries
let song1 = new make_album("HARRY STYLES","HARRY'S HOUSE");
let song2 = new make_album("WEEKND","THE HIGHLIGHTS");
let song3 = new make_album("ATIF ASLAM","RACE3");
// print return value
console.table(song1);
console.table(song2);
console.table(song3);

// adding new parameter in make_album store the number of tracks.
function make_album(artist, album,track) {
    this.artist = artist
    this.album = album
    this.track = track
}
// save value in new variable 
let song4 = new make_album("Atif","Rabbta","3");
// print return value
console.table(song4);