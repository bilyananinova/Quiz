let Category = require('../models/Category');

async function getAll() {

    try {
        return await Category.find({}).lean();
    } catch (err) {
        throw new Error(err.message);
    }
}

async function newCategory(name) {
    let link = name.split(',').map(w => w.trim().toLowerCase()).join('-');

    try {
        return await Category.create({ name, link });
    } catch (err) {
        throw new Error(err.message);
    }
}

async function deleteSubjectById(id) {

    try {
        return await Category.findByIdAndDelete(id);
    } catch (err) {
        throw new Error(err.message);
    }
}


module.exports = { newCategory, getAll, deleteSubjectById }