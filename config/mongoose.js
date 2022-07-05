const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Todo_list');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connection to Mongodb"));

db.once('open', function() {
    console.log('Connected to database');
});

module.exports = db;