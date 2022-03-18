const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);