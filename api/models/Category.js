let mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    link: {
        type: String
    }
});

module.exports = mongoose.model('Category', categorySchema);