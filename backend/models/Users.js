const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    message: { type: [String], default: [] } // Define message as an array of strings
});

const UserModel = mongoose.model('client', userSchema);

module.exports = UserModel;
