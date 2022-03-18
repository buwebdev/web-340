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
        title: 'Hello Views: Example',
        message: 'Welcome to the Hello Views Application!'
    })
});

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

