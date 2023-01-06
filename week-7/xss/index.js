const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet.xssFilter());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Week 7 | Security',
        message: 'XSS Protection Example'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT: ' + PORT);
    console.log('\n  Press Ctrl+C twice to stop the server...')
})

