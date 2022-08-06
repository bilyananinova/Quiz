let express = require('express');
let router = express.Router();

let { getQuizById, deleteQuiz, getNewest, addQuestions } = require('../services/quiz');
let { isAdmin } = require('../middlewares/auth');

router.get("/", (req, res) => { //newest
    getNewest()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post("/:id", isAdmin, (req, res) => { //add-quiz/:id

    addQuestions(req.params.id, req.body)
        .then(response => {
            return res.json(response)
        })
        .catch(err => {
            console.log(err);
        })
});

router.get("/:id", (req, res) => {

    getQuizById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
});

router.delete("/:id", isAdmin, (req, res) => {

    deleteQuiz(req.params.id)
        .then(response => {
            return res.json(response);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;