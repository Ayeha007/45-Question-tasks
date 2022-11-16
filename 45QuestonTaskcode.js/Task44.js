/*Sandwiches: Write a function that accepts a array of items 
a person wants on a sandwich. 
The function should have one parameter that collects as many
items as the function call provides, and it should print a 
summary of the sandwich that is being ordered. 
Call the function three times, using a different number of 
arguments each time.*/

function orderSandwich () {
// create array for storing order
  let items = [];
  let item = "This yummy sandwich contain ";
  for (let i = 0; i < arguments.length; i++) {
      item += arguments[i];
      items.push(item);
  }
  return item;
}

//1st order
var x = orderSandwich ("Meat, ", "Cheez ", "& Green olive.");
console.log(x);
//2nd order
var y = orderSandwich("Mashroom, ", "egg, ","black olive, ","corn ", "& tommato.");
console.log(y);
//3rd order
var z = orderSandwich("Capsicum, ", "Cheez & ","Green olive.");
console.log(z);