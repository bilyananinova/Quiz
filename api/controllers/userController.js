let express = require('express');
let { register, login } = require('../services/auth');
let { jwtSign } = require('../utils/jwt');
let { COOKIE_NAME } = require('../config/constants');
let router = express.Router();

router.post("/login", (req, res) => {
    let { email, password } = req.body;

    login(email, password)
        .then(user => {
            res.cookie(COOKIE_NAME, jwtSign(user), { httpOnly: true });
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
            res.cookie(COOKIE_NAME, jwtSign(user), { httpOnly: true });
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })
});

router.get('/logout', (req, res) => {

    res.clearCookie(COOKIE_NAME);
    return res.redirect('/');
});

module.exports = router;