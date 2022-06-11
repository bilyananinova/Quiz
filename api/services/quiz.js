let Quiz = require('../models/Quiz');

async function newQuiz(body) {
    let { subject, title, questions } = body

    try {
        await Quiz.create({ subject, title, questions });
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getQuizBySubject(id) {

    try {
        let quizzes = await Quiz.find({ subject: id }).populate('subject').lean();
        return quizzes;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getQuizById(id) {

    try {
        let quiz = await Quiz.findById(id).lean();
        return quiz;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { newQuiz, getQuizBySubject, getQuizById }