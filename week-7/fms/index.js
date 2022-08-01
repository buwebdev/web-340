const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Fruit = require('./models/fruit');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // added during week 6 assignment
app.use(express.json()); // added during week 6 assignment

const PORT = process.env.PORT || 3000;

const conn = 'mongodb+srv://web340_user:admin@cluster0.lujih.mongodb.net/web340DB?retryWrites=true&w=majority'; // added in week 6

// added in week 6
mongoose.connect(conn).then(() => {
    console.log('Connection to the database was successful');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

app.get('/', (req, res) => {
    res.render('index', {
        title: 'FMS: Landing'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'FMS: About',
        pageTitle: 'Our Story!'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'FMS: Contact',
        pageTitle: 'Our Locations!'
    })
})

app.get('/fruit-create', (req, res) => {
    res.render('fruit-create', {
        title: 'FMS: Fruit Form',
        pageTitle: 'Create Fruit'
    })
})

app.post('/fruits', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.fruitName);
    const newFruit = new Fruit({
        name: req.body.fruitName
    })

    console.log(newFruit);

    Fruit.create(newFruit, function(err, fruit) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', {
                title: 'FMS: Landing'
            })
        }
    })
})

app.get('/fruits', (req, res) => {
    Fruit.find({}, function(err, fruits)  {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('fruit-list', {
                title: 'FMS: Fruit List',
                pageTitle: 'Our Inventory',
                fruits: fruits
            })
        }
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

