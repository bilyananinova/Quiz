const Category = require('../models/Category');
let Quiz = require('../models/Quiz');

async function newQuiz(body) {
    let { subject, title, questions } = body

    try {
        await Quiz.create({ subject, title, questions });
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getQuizBySubject(cat) {

    try {
        let category = await Category.findOne({ link: cat }).lean();
        let quizzes = await Quiz.find({ subject: category._id }).populate('subject').lean();
        return quizzes;
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = { newQuiz, getQuizBySubject }