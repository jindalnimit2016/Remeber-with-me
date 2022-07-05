// require express for setting up the express server
const bodyParser = require('body-parser');
const exp = require('constants');
const express = require('express');
const path = require('path');

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
    Task.find({}, function(err, tasks) {
        if (err) {
            console.log('Error in fetching data from Db')
            return;
        }

        return res.render('home', { title: "Home", task: tasks });
    });

});

// Creating tasks for show
app.post('/create-task', function(req, res) {
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newtask) {
        if (err) {
            console.log('error  in creating new task ', err);
            return;
        }
        console.log('*****', newtask);
        return res.redirect('back');
    });
});

app.get('/delete-task', function(req, res) {
    var id = req.query;

    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        Task.findByIdAndDelete(Object.keys(id)[i], function(err) {
            if (err) {
                console.log('error in deleting task');
                return;
            }
        })
    }

    return res.redirect('back');
});

// make the app for listen on given port number 8002
app.listen(port, function(err) {
    if (err) {
        console.log('Error in running the server', err);
    }

    console.log('server is running on port: ', port);
});