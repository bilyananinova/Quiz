let Quiz = require('../models/Quiz');

async function newQuiz(body) {
    let { subject, title } = body;

    try {
        await Quiz.create({ subject, title });
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getQuizBySubject(id) {

    try {
        let quizzes = await Quiz.find({ subject: id }).lean();

        return quizzes;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getQuizById(id) {

    try {
        let quiz = await Quiz.findById(id).populate('subject').lean();

        return quiz;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getNewest() {

    try {
        let quizzes = await Quiz.find({}).sort({ _id: -1 }).limit(10)

        return quizzes;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function addQuestions(id, questions) {

    try {
        return await Quiz.findByIdAndUpdate(id, questions);
    } catch (err) {
        throw new Error(err.message);
    }
}

async function deleteQuiz(id) {
    try {
        return await Quiz.findByIdAndDelete(id);
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { newQuiz, getQuizBySubject, getQuizById, getNewest, addQuestions, deleteQuiz }