let Category = require('../models/Category');

async function newCategory(name) {
    let link = name.split(',').map(w => w.trim().toLowerCase()).join('-');

    try {
        return await Category.create({ name, link });
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getAll() {

    try {
        return await Category.find({}).lean();
    } catch (err) {
        throw new Error(err.message);
    }
}



module.exports = { newCategory, getAll }