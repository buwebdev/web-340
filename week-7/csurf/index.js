const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

const app = express();
const csurfProtection = csurf({ cookie: true });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(csurfProtection);

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    const token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Week 7 | Security',
        cardTitle: 'Fruit Form',
        message: 'CSURF Example'
    })
})

app.post('/fruits', (req, res) => {
    console.log(`\n  CSRF protected value: ${req.body.fruitName}`);
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT: ' + PORT);
    console.log('\n  Press Ctrl+C to stop the server...')
})

