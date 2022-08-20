let mongoose = require('mongoose');
let { CONNECTION_STRING } = require('./constants');

function initDb() {
    // return mongoose.connect(CONNECTION_STRING);
    return mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = initDb;