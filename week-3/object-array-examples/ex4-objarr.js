/*
============================================
; Title:  ex4-objarr.js
; Author: Professor Krasso
; Date:   1 August 2022
; Description: Object Array Example
;===========================================
*/

class Fruit {
    constructor(name) {
        this.name = name;
    }
}

let fruits = [
    new Fruit('Banana'),
    new Fruit('Grape'),
    new Fruit('Mango'),
    new Fruit('Strawberries'),
    new Fruit('Orange')
]

function getFruits() {
    return fruits;
}

let myFruits = getFruits();

for (let fruit of myFruits) {
    console.log(fruit.name);
}
