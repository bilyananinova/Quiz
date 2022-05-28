let User = require('../models/User');
let { createHash, validatePassword } = require('../utils/bcrypt');

async function register(name, email, plainPassword) {

    try {

        let user = await User.findOne({ email });

        if (user) {
            throw new Error('Wrong email or password!');
        }

        let password = createHash(plainPassword);

        return User.create({ name, email, password });

    } catch (err) {
        throw new Error('Wrong email or password!');
    }
}

async function login(email, password) {

    let user = await User.findOne({ email });

    if (!user) {
        throw new Error('Wrong email or password!');
    }

    let isValidate = validatePassword(password, user.password);

    if (!isValidate) {
        throw new Error('Wrong email or password!');
    } 

    return user;
}

module.exports = { register, login }
