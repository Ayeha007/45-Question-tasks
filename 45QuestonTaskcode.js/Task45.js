/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.It
should then accept an arbitrary number of keyword arguments. Call the
function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned
to make sure all the information was stored correctly.*/

//create object in funtion 
function cars(manufacturer, model, feature) {
    let cars_info = {
    manufacturer : manufacturer,
    model : model,
    feature : feature
    }
    return cars_info;
}

var result1 = cars("Toyota Carolla", "2021", "Silver");
console.table(result1);

var result2 = cars("Suzuki", "2020", "Blue");
console.table(result2);

var result3 = cars("Land Rover", "2023","Black");
console.table(result3);






