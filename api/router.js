let express = require('express');
let { newCategory, getAll } = require('./services/categories');
let { newQuiz } = require('./services/quiz');
let router = express.Router();

let quizController = require('./controllers/quizController');
let subjectController = require('./controllers/subjectController');
let userController = require('./controllers/userController');

router.use('/quiz', quizController);
router.use('/subject', subjectController);
router.use('/user', userController);

router.get("/", (req, res) => {
    getAll()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post("/create-quiz", (req, res) => {

    if (req.body.name) {
        newCategory(req.body.name)
            .then(category => {
                res.json(category);
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        newQuiz(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.log(err);
            })
    }
});


module.exports = router;