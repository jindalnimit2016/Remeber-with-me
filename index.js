// require express for setting up the express server
const express = require('express');

// set up port number
const port = 8002;

//using express
const app = express();



app.listen(port, function(err) {
    if (err) {
        console.log('Error in running the server', err);
    }

    console.log('server is running on port: ', port);
})