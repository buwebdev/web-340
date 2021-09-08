/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Server file for the fms application
;===========================================
*/

// Require statements.
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');
const Fruit = require('./models/fruit');

// database connection string to MongoDB Atlas
const conn = 'mongodb+srv://admin:admin@cluster0-lujih.mongodb.net/fms?retryWrites=true&w=majority';

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connection to the database instance was successful');
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
});


/**
 * Sets up CSRF protection.
 */
let csrfProtection = csrf({ cookie: true });

/**
 * Initializes the express application.
 */
let app = express();

/**
 * Configures the dependency libraries.
 */
// Morgan logger
app.use(logger('short'));
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// CSRF protection
app.use(csrfProtection);
/**
 * Intercepts all incoming requests and adds a CSRF token to the response.
 */
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Fruit[]
 * URL: localhost:8080
 */
app.get('/', function(req, res) {
  Fruit.find({}, function(err, fruits) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(fruits);
      res.render('index', {
        title: 'FMS | Home',
        fruits: fruits
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'FMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(req, res) {
  // console.log(request.body.txtName);
  if (!req.body.txtName) {
    res.status(400).send('Entries must have a name');
    return;
  }

  // get the request's form data
  const fruitName = req.body.txtName;
  console.log(fruitName);

  // create a fruit model
  let fruit = new Fruit({
    name: fruitName
  });

  // save
  fruit.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(fruitName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Fruit[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params['queryName'];

  Fruit.find({'name': queryName}, function(err, fruits) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(fruits);

      if (fruits.length > 0) {
        res.render('view', {
          title: 'FMS | View',
          fruit: fruits
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

app.get('/fruits/delete/:id', function(req, res) {
  const fruitId = req.params.id; 
  Fruit.findByIdAndDelete({'_id': fruitId}, function(err, fruits) {
    if (err) {
      console.log(err);
      throw err;
    }
    else {
      console.log(fruits);
      res.redirect('/');
    }
  })
})

/**
 * Creates a new Node.js server and listens on local port 8080.
 */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Application started on port ' + app.get('port'));
});
