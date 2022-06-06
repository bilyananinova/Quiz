let mongoose = require('mongoose')

let QuestionSchema = new mongoose.Schema({
    question: String,
    answers: [
        {
            answer: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model('Question', QuestionSchema)