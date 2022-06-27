let mongoose = require('mongoose')

let QuizSchema = new mongoose.Schema({
    title: String,
    questions: [
        {
            question: String,
            answers: [
                {
                    type: String,
                    required: true
                }
            ],
            correctAnswer: {
                type: String,
                required: true
            }
        }
    ],
    subject: {
        required: true,
        ref: 'Category',
        type: mongoose.Schema.Types.ObjectId,
    }
})

module.exports = mongoose.model('Quiz', QuizSchema)