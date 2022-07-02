let bcrypt = require('bcrypt');
let { SALT } = require('../config/constants');

function createHash(plainPassword) {
    return bcrypt.hashSync(plainPassword, SALT);
}

function validatePassword(plainPassword, hash) {
    return bcrypt.compareSync(plainPassword, hash);
}

module.exports = { createHash, validatePassword };