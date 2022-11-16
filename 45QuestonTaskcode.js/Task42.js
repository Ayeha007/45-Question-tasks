/*Great Magicians: Start with a copy of your program from 
Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call show_
magicians() to see that the list has actually been modified.*/

let magicianArray = ["john","adam","thomas","martha"];
function make_great() {
    let greatMagician = magicianArray
    greatMagician.forEach(function(i) {
        console.log("The Great " + i);
    })
}
//print names
make_great(magicianArray);