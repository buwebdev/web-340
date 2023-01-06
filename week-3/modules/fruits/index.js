/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   5 January 2023
; Description: Main program for the fruits module
;===========================================
*/

// Imports the FruitManager module from the fruit-manager.js file
const FruitManager = require('./fruit-manager'); 

// Gets a an array of fruit objects from the fruit-manager.js file.
let fruits = FruitManager.getFruits();

// Displays the contents of the fruits array.
console.log('-- DISPLAYING TEAMS --');
for (let fruit of fruits) {
    console.log(FruitManager.displayFruit(fruit));
}

// Creates a variable named apple and calls the findFruit() function. 
const apple = FruitManager.getFruit('Apple');

// Creates a variable name orange and calls the findFruit() function.
const orange = FruitManager.getFruit('Orange')

// Displays the contents of the apple variable 
console.log('-- DISPLAYING A SINGLE FRUIT --');
console.log(FruitManager.displayFruit(apple));

// Displays the contents of the orange variable.
console.log('-- DISPLAYING A SINGLE FRUIT --');
console.log(FruitManager.displayFruit(orange));