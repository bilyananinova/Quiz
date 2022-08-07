let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is a required field!'],
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Name is a required field!'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'All fields are required!'],
    },
    quizzes:
        [
            {
                quiz: {
                    required: true,
                    ref: 'Quiz',
                    type: mongoose.Schema.Types.ObjectId,
                },
                score: {
                    type: Number,
                }
            }
        ]




});

module.exports = mongoose.model('User', userSchema);