let express = require('express');
let router = express.Router();

router.get("/", (req, res) => {
    res.json('Welcome from home');
});

router.get("/login", (req, res) => {
    res.json('Welcome from login');
});

router.get("/register", (req, res) => {
    res.json('Welcome from register');
});



module.exports = router;