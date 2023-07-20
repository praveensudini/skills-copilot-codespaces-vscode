// Create web server with express
// Create a route to get all comments
// Create a route to post a comment
// Create a route to delete a comment

// Require express and create an instance of it
const express = require('express');
const app = express();
// Require body-parser to parse the body of the request
const bodyParser = require('body-parser');
// Require morgan to log the requests
const morgan = require('morgan');

// Require the database
const db = require('./database');

// Require the routes
const commentsRoute = require('./routes/comments');

// Use body-parser and morgan
app.use(bodyParser.json());
app.use(morgan('dev'));

// Use the routes
app.use('/comments', commentsRoute);

// Start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});