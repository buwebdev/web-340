const express = require('express');
const path = require('path');
const Fruit = require('./fruit');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Partial Views: Home',
        cardTitle: 'Fruit List',
        fruits: Fruit.findFruits(),
        message: 'Welcome to the Partial Views App!'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Partial Views: About',
        message: 'Welcome to the Partial Views App!',
        pageName: 'About Page'
    })
})

app.get('/contact', (req, res) => {
    res.render('about', {
        title: 'Partial Views: Contact',
        message: 'Welcome to the Partial Views App!',
        pageName: 'Contact Page'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

