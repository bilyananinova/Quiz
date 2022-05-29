let express = require('express');
let { register, login } = require('./services/auth');
let { newCategory } = require('./services/categories');
let router = express.Router();

router.get("/", (req, res) => {
    res.json('Welcome from home');
});

router.post("/create-quiz", (req, res) => {
    newCategory(req.body.category)
        .then(category => {
            res.json(category);
        })
        .catch(err => {
            console.log(err);
        })
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