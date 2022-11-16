/* City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted
like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the
value that’s returned.*/

function city_country(city, country) {
    return('"'+ city +", " + country+ '"');
}
//call functions
var x = city_country("Multan", "Pakistan");
console.log(x);
var y = city_country("Newyork", "USA");
console.log(y);
var z = city_country("Paris", "France");
console.log(z);
