/*
============================================
; Title:  url-module.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/

const url = require("url");

const parsedURL = url.parse("https://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
