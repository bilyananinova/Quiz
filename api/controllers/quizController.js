let express = require('express');
let { getQuizById } = require('../services/quiz');
let router = express.Router();

router.get("/:id", (req, res) => {

    getQuizById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;