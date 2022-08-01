const express = require('express');
const path = require('path');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'FMS: Landing',
        pageTitle: 'Landing Page'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'FMS: About',
        pageTitle: 'Our Story!'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

