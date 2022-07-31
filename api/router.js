let express = require('express');
let router = express.Router();

let { isAdmin } = require('./middlewares/auth');

let { newCategory, getAll } = require('./services/categories');
let { newQuiz, getNewest, addQuestions, deleteQuiz } = require('./services/quiz');

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

router.get("/newest", (req, res) => {
    getNewest()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post("/create-quiz", isAdmin, (req, res) => {

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

router.post("/add-quiz/:id", isAdmin, (req, res) => {

    addQuestions(req.params.id, req.body)
        .then(response => {
            return res.json(response)
        })
        .catch(err => {
            console.log(err);
        })
});

router.delete("/quiz/:id", isAdmin, (req, res) => {

    deleteQuiz(req.params.id)
        .then(response => {
            return res.json(response);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;