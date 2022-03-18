const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const moment = require('moment');

// mongoose model imports
const Fruit = require('./models/fruit');
const User = require('./models/user');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true})); // needed to accept forms
app.use(express.json()); // needed to accept and return json objects

app.use(cookieParser()); // added in week 6
// added in week 6
app.use(session({
    secret: 's3cret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const PORT = 3000 || process.env.PORT;
const CONN = 'mongodb+srv://web340_user:admin@cluster0.lujih.mongodb.net/web340DB?retryWrites=true&w=majority'
const message = 'Welcome to the Fruit Management System';

mongoose.connect(CONN).then(() => {
    console.log('Connection to the database was successful');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

app.get('/', (req, res) => {
    let errorMessage = '';

    let fruits = Fruit.find({}, function(err, fruits) {
        if (err) {
            console.log(err)
            errorMessage = 'MongoDB Exception: ' + err;
        } else {
            errorMessage = null;
        }

        res.render('index', {
            title: 'FMS: Home',
            cardTitle: 'Fruit List',
            fruits: fruits,
            errorMessage: errorMessage,
            message: message
        })
    })

});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'FMS: About',
        message: message,
        pageName: 'About Page'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'FMS: Contact',
        message: message,
        pageName: 'Contact Page'
    })
})

app.get('/register', (req, res) => {
    User.find({}, function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.render('register', {
                title: 'FMS: Register',
                message: message,
                cardTitle: 'Registration Form',
                moment: moment,
                users: users
            })
        }
    })
})

app.post('/register', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.register(new User({username: username}), password, function(err, user) {
        if (err) {
            console.log(err);
            return res.redirect('/register');
        }

        passport.authenticate("local")(
            req, res, function () {
                res.redirect('/register')
            });
    })
})

app.post('/fruits', (req, res) => {
    const fruitName = req.body.fruitName;

    console.log(req.body);
    let fruit = new Fruit({
        name: fruitName
    })

    Fruit.create(fruit, function(err, fruit) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

