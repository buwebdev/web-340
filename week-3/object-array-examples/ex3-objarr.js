/*
============================================
; Title:  ex3-objarr.js
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

let banana = new Fruit('Banana');
let grape = new Fruit('Grape');
let mango = new Fruit('Mango');
let strawberries = new Fruit('Strawberries');
let orange = new Fruit('Orange');

let fruits = [];

fruits[0] = banana;
fruits[1] = grape;
fruits[2] = mango;
fruits[3] = strawberries;
fruits[4] = orange

for (let fruit of fruits) {
    console.log(fruit.name);
}
