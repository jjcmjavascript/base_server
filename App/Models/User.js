const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name : String,
    year: Number,
    email: String
})

module.exports = mongoose.model('User', User);