/*
============================================
; Title:  test-modules.js
; Author: Professor Krasso
; Date:   1 August 2022
; Description: Test file for modules example
;===========================================
*/

const myName = require('./ex1-modules');
const module2 = require('./ex2-modules')
const module3 = require('./ex3-modules');

console.log(myName());
console.log(module2.getName("Professor Krasso"));
console.log(module3.add(2, 6));

