let express = require('express');
let { register, login } = require('./services/auth');
let router = express.Router();

router.get("/", (req, res) => {
    res.json('Welcome from home');
});

router.get("/login", (req, res) => {
    res.json('Welcome from login');
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

router.get("/register", (req, res) => {
    res.json('Welcome from register');
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