let User = require('../models/User');
let { createHash, validatePassword } = require('../utils/bcrypt');

async function register(name, email, plainPassword, rePassword) {

    let user = await User.findOne({ email });

    try {
        if (plainPassword !== rePassword) {
            throw new Error('Passwords missmatch!');
        }

        if (plainPassword.length < 5) {
            throw new Error('The password should be at least 5 characters long!');
        }

        if (user) {
            throw new Error('Wrong email or password!');
        }

        let password = createHash(plainPassword);

        return User.create({ name, email, password });

    } catch (err) {
        throw err.message;
    }
}

async function login(email, password) {

    let user = await User.findOne({ email });

    try {
        if (!email || !password) {
            throw new Error('All fields are required!');
        }

        if (!user) {
            throw new Error('Wrong email or password!');
        }

        let isValidate = validatePassword(password, user.password);

        if (!isValidate) {
            throw new Error('Wrong email or password!');
        }

        return user;
    } catch (err) {
        // console.log(err.message);
        throw err.message;
    }

}

module.exports = { register, login }
