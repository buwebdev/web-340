/*
============================================
; Title:  functions.js
; Author: Professor Krasso
; Date:   1 August 2022
; Description: Function Examples
;===========================================
*/

function getName() {
    return "My name is Professor Krasso";
}

function getName(name) {
    return "My name is " + name;
}

function add(num1, num2) {
    return num1 + num2;
}

console.log(getName());
console.log(getName("Professor Krasso"));
console.log(add(2, 6));
