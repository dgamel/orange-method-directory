'use strict';
//Include the files we depend on (also called dependencies)
const app = require('express')();
const routes = require('./routes');
const port = process.env.PORT || 3000

//Attaching all of the routes to our web application
app.use('/', routes); //the routes from line 4

//Tell our app to listen on port 3000!
//In other words, turn on the server!
app.listen(port, () => console.log("Ready to serve."));
