/*Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of 
magicians’ names.
Because the original array will be unchanged, return the new
array and store it in a separate array.
Call show_magicians() with each array to show that you have
one array of the original names and one array with the
Great added to each magician’s name.*/


let magicianArray = ["john","adam","thomas","martha"];
function make_great() {
//create new empty array
    let newValue = [];
//call greatMagician array
    let greatMagician = magicianArray
    greatMagician.forEach(function(i) {
        let newArray = "The Great " + i;
//store value in separate array
        newValue.push(newArray);
    })
//return new array with greatMagician value
    return(newValue);
}
//Call show_magicians() with each array
let greatMagician = make_great();
function show_magicians(magicianArray, greatMagician) {
    console.log(magicianArray);
    console.log(greatMagician);
}
//Call show_magicians()
show_magicians(magicianArray,greatMagician);