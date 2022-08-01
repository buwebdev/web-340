/*
============================================
; Title:  ex1-objarr.js
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

for (let fruit of fruits) {
    console.log(fruit.name);
}
