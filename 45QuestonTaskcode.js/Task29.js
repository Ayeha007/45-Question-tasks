/*Favorite Fruit: Make a array of your favorite fruits, and
 then write a series of independent if statements that 
 check for certain fruits in your array.
• Make a array of your three favorite fruits and call it 
favorite_fruits.
• Write five if statements. Each should check whether a 
certain kind of fruit is in your array. If the fruit is 
in your array, the if block should print a statement, 
such as You really like bananas!*/

let favorite_fruits = prompt("Enter your favorite fruit?");
if (favorite_fruits=== "peach") {
  alert("You really like peach's");
} else if (favorite_fruits=== "pineapple") {
  alert("You really like pineapple's");
} else if (favorite_fruits=== "mango") {
  alert("You really like mango's");
} else if (favorite_fruits=== 6) {
  alert("Wrong input");
} else {
  alert("fruit name is not in list");
}
