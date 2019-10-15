/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: File for the Fruit database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Fruit Schema
let FruitSchema = new Schema({
  name: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Fruit', FruitSchema);
