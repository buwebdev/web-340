const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    payment: { type: String , require: true },
    total: { type: Number, required: true }
})

module.exports = mongoose.model('Order', orderSchema);
