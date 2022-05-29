let Category = require('../models/Category');

async function newCategory(name) {

    try {

        return await Category.create({ name });

    } catch (err) {
        throw new Error('Error');
    }
}

module.exports = { newCategory }