let Quiz = require('../models/Quiz');
let Question = require('../models/Question');

async function newQuiz(body) {
    let { subject, title, questions } = body

    try {
        await Quiz.create({ subject, title, questions });
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { newQuiz }