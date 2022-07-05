// require express for setting up the express server
const exp = require('constants');
const express = require('express');

// set up port number
const port = 8002;

const db = require('./config/mongoose');

const Task = require('./models/task');

//using express
const app = express();

app.use(express.static("./views"));

app.use(express.urlencoded());
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', function(req, res) {
    Task.find({}, function(err, task) {
        if (err) {
            console.log('Error in fetching data from Db')
            return;
        }

        return res.render('home', { title: "Home", task: task });
    })

})

// make the app for listen on given port number 8002
app.listen(port, function(err) {
    if (err) {
        console.log('Error in running the server', err);
    }

    console.log('server is running on port: ', port);
});