/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

const assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
