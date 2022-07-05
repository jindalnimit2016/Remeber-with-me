// require the libraary
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/Todo_list');

// setup the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error in connection to Mongodb"));

// Up and running then print the message
db.once('open', function() {
    console.log('Connected to database');
});

// exporting the database
module.exports = db;