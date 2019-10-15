// required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define the fruitSchema
var fruitSchema = new Schema({
  name: String
});

// define the fruit model
var Fruit = mongoose.model("Fruit", fruitSchema);

// expose the fruit to calling files
module.exports = Fruit;
