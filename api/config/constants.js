exports.PORT = process.env.NODE_ENV || 9000;
// exports.CONNECTION_STRING = 'mongodb://localhost:27017/quiz-react';
exports.CONNECTION_STRING = 'mongodb+srv://admin:adminpassword@cluster0.s6tf0pe.mongodb.net/quizDb?retryWrites=true&w=majority';
exports.SECRET = 'my_super_secret_secret';
exports.COOKIE_NAME = 'userCookie';
exports.SALT = 10;