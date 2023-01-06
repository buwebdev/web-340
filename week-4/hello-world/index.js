/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   6 January 2023
; Description: Server and route file for hello-world app
;===========================================
*/

// Express and Node.js import statements
const express = require('express');
const logger = require('pino')();
const path = require('path');

// Express app variable. Provides access to Express's built-in functions/classes.
// This creates the Express App
const app = express(); 

// Tells Express that the views (ejs pages) are in the views' folder.
app.set('views', path.join(__dirname, 'views')); 

// Tells Express to use ejs as it's view engine.
app.set('view engine', 'ejs'); 

// Constant variable to hold the server port value. The first part checks to see if
// the "process.env" variable already has a port defined. If it does, that will be used;
// otherwise, we will use port 3000. This code is necessary for deployments, because
// not all hosting environments use port 3000. The default port for Node.js is 3000.
const PORT = process.env.PORT || 3000;

/**
 * When visiting the site root, renders the homepage (at views/index.js).
 * For example, localhost:3000. This is considered the applications root.
 * The arguments' req, res, next are Express specific and are responsible for
 * handling the request, response, and potential callback.
 */
app.get('/', (req, res) => {
    res.render('index');
});

/**
 * Starts the server on port 3000.
 */
app.listen(PORT, () => {
    logger.info('Hello World application started and listening on port ' + PORT);
})