/*Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the
array.*/

let magicianArray = ["john","adam","thomas","martha"];
function show_magicians(magicianArray) {
    magicianArray.forEach(function(item) {
        console.log(item);
    })
}
//print names
show_magicians(magicianArray);
