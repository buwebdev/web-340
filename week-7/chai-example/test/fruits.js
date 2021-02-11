/*
============================================
; Title:  fruits.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

const fruits = require("../fruits");

const chai = require("chai");
const assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    const f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
