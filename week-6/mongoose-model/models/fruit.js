const mongoose = require('mongoose');

let fruitSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Fruit', fruitSchema);