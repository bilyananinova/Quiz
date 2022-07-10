let express = require('express');
let { getQuizBySubject } = require('../services/quiz');
let router = express.Router();

router.get("/:id", (req, res) => {

    getQuizBySubject(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;