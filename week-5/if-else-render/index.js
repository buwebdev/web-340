const express = require('express');
const path = require('path');
const Fruit = require('./fruit');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'If..Else..Render: Home',
        cardTitle: 'Fruit List',
        fruits: Fruit.findFruits(),
        message: 'Welcome to the If...Else...Render App!'
    })
});

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

