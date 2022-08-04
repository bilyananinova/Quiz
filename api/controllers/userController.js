let express = require('express');
let router = express.Router();

let { jwtSign } = require('../utils/jwt');
let { COOKIE_NAME } = require('../config/constants');

let { register, login } = require('../services/auth');

router.post("/register", (req, res) => {
    let { name, email, password, rePassword } = req.body;

    register(name, email, password, rePassword)
        .then(user => {
            res.cookie(COOKIE_NAME, jwtSign(user), { httpOnly: true });
            res.json(user);
        })
        .catch(err => {
            if (err.errors) {
                if (err.errors.name) {
                    res.status(500).json(err.errors.name.message);
                }

                if (err.errors.email) {
                    res.status(500).json(err.errors.email.message);
                }
            }
            res.status(500).json(err);
        })
});

router.post("/login", (req, res) => {
    let { email, password } = req.body;

    login(email, password)
        .then(user => {
            res.cookie(COOKIE_NAME, jwtSign(user), { httpOnly: true });
            res.json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/logout', (req, res) => {

    res.clearCookie(COOKIE_NAME);
    return res.redirect('/');
});

module.exports = router;