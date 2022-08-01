/*
============================================
; Title:  ex3-arr.js
; Author: Professor Krasso
; Date:   1 August 2022
; Description: String Array Example
;===========================================
*/

const fruits = ['Apple', 'Orange', 'Banana', 'Grapes', 'Strawberries'];

fruits[5] = 'Watermelon';

fruits.push('Mango')

for (let fruit of fruits) {
    console.log(fruit);
}
