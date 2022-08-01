const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fruitSchema = new Schema({
    name: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('Fruit', fruitSchema);
