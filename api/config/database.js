let mongoose = require('mongoose');
let { CONNECTION_STRING } = require('./constants');

function initDb() {
    return mongoose.connect(CONNECTION_STRING);
}

module.exports = initDb;