let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'All fields are required!'],
    },
    name: {
        type: String,
        required: [true, 'All fields are required!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'All fields are required!'],
        minlength: [5, 'The password should be at least 5 characters long'],
    }
});

module.exports = mongoose.model('User', userSchema);