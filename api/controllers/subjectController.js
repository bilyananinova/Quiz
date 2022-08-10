let express = require('express');
let router = express.Router();

let { getQuizBySubject } = require('../services/quiz');
let { deleteSubjectById } = require('../services/categories');
let { isAdmin } = require('../middlewares/auth');

router.get("/:id", (req, res) => {

    getQuizBySubject(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
});

router.delete("/:id", isAdmin, (req, res) => {

    deleteSubjectById(req.params.id)
        .then(response => {
            return res.json(response);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;