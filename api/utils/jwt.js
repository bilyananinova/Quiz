let jwt = require('jsonwebtoken');
let { SECRET } = require('../config/constants');

function jwtSign(user) {
    let payload = {
        name: user.name,
        id: user.id
    }

    return jwt.sign(payload, SECRET, { expiresIn: '1d' });

}

module.exports = {
    jwtSign
}