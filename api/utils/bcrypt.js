let bcrypt = require('bcrypt');
let salt = 10;

function createHash(plainPassword) {
    return bcrypt.hashSync(plainPassword, salt);
}

function validatePassword(plainPassword, hash) {
    return bcrypt.compareSync(plainPassword, hash);
}

module.exports = { createHash, validatePassword };