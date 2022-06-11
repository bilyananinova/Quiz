const { json } = require('express');
let express = require('express');
let { register, login } = require('./services/auth');
let { newCategory, getAll } = require('./services/categories');
let { newQuiz, getQuizBySubject, getQuizById } = require('./services/quiz');
let router = express.Router();

router.get("/", (req, res) => {
    getAll()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            console.log(err);
        })
});

router.get("/subject/:id", (req, res) => {

    getQuizBySubject(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
});

router.get("/quiz/:id", (req, res) => {

    getQuizById(req.params.id)
        .then(result => {
            res.json(result)
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

router.post("/login", (req, res) => {
    let { email, password } = req.body;
    login(email, password)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post("/register", (req, res) => {
    let { name, email, password } = req.body;

    register(name, email, password)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;