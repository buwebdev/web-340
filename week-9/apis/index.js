const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    let bookJsonFile = fs.readFileSync('./public/data/books.json');
    let books = JSON.parse(bookJsonFile);

    let publisherJsonFile = fs.readFileSync('./public/data/publishers.json');
    let publishers = JSON.parse(publisherJsonFile);

    res.render('index', {
        title: 'Week 8 | Advanced Forms',
        cardTitle: 'Book Form',
        message: 'Advanced Forms Example',
        books: books,
        publishers: publishers
    })
})

app.get('/api/books', async(req, res) => {
    let bookJsonFile = fs.readFileSync('./public/data/books.json');
    let books = JSON.parse(bookJsonFile);

    res.json(books);
})

app.get('/api/publishers', async(req, res) => {
    let publisherJsonFile = fs.readFileSync('./public/data/publishers.json');
    let publishers = JSON.parse(publisherJsonFile);

    res.json(publishers);
})

app.post('/books', (req, res) => {
    const newBook = {
        isbn: req.body.isbn,
        title: req.body.title,
        authors: req.body.authors,
        publisher: req.body.publisher
    };

    console.log(newBook);

    res.redirect('/');
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT: ' + PORT);
    console.log('\n  Press Ctrl+C to stop the server...')
})

