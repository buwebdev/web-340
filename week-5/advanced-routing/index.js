const express = require('express');
const path = require('path');
const Fruit = require('./fruit');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Advanced Routing: Home',
        cardTitle: 'Fruit List',
        fruits: Fruit.findFruits(),
        message: 'Welcome to the Advanced Routing App!'
    })
});

app.get('/fruits/:name', (req, res) => {
    let fruit = Fruit.findFruit(req.params.name);

    res.render('fruit-details', {
        title: 'Advanced Routing: Fruit Details',
        cardTitle: 'Fruit Details',
        fruit: fruit,
        message: 'Welcome to the Advanced Routing App!'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

