/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Date:   5 January 2023
; Description: Fruit class 
;===========================================
*/

/**
 * Creates a Fruit class with properties for name and color.
 * Properties are initialized in the classes constructor.
 * Class is exported using Node's module system
 */
class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

// Uses Nodes module system to export the Fruit class.
// This makes the Fruit class accessible in other files.
module.exports = Fruit;