let jwt = require('jsonwebtoken');
let { SECRET, COOKIE_NAME } = require('../config/constants');

exports.auth = function (req, res, next) {
    let token = req.cookies[COOKIE_NAME];

    if (token) {

        let decoded = jwt.verify(token, SECRET);

        req.user = decoded;
        res.locals.user = decoded;

        next();
    }

    if (!token) {
        return next();
    }

}

exports.isAdmin = function (req, res, next) {
    
    if (req.user.id === '62926423f378a92432513373') {
        next();
    }
}