/*
============================================
; Title:  fruit-manager.js
; Author: Professor Krasso
; Date:   5 January 2023
; Description: Fruit Manager module
;===========================================
*/

// Imports the Fruit class from the fruit.js file.
const Fruit = require('./fruit'); 

// Creates an array of five fruit objects and assigns it 
// to a variable named fruits.
let fruits = [
    new Fruit('Apple', 'red'),
    new Fruit('Orange', 'orange'),
    new Fruit('Pineapple', 'yellow'),
    new Fruit('Grape', 'green'),
    new Fruit('Plum', 'purple')
]

// Creates a function named getFruits that returns
// and array of fruit objects.
module.exports.getFruits = function() {
    return fruits;
}

// Creates a function named getFruit with a single parameter for name.
// Returns a single fruit object using JavaScript's built-in find() function.
module.exports.getFruit = function(name) {
    for (let fruit of fruits) {
        if (fruit.name === name) {
            return fruit
        }
    }
}

// Creates a function named displayFruit with a single parameter for fruit.
// Returns a formatted string using the fruit objects properties.  
module.exports.displayFruit = function(fruit) {
    return 'Name: ' + fruit.name + '\nColor: ' + fruit.color + '\n';
}
