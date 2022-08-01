let express = require('express');
let router = express.Router();

let { getQuizById } = require('../services/quiz');

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