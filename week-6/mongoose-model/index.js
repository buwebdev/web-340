const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./models/fruit');

const app = express();

const CONN = 'mongodb+srv://web340_user:admin@cluster0.lujih.mongodb.net/web340DB?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

app.listen(PORT, () => {
    Fruit.find({}, function(err, fruits) {
        if (err) {
            console.log(err);
        } else {
            console.log('\n  --DISPLAYING FRUIT LIST--');
            for(let fruit of fruits) {
                console.log(`  Fruit name: ${fruit.name}`)
            }

            Fruit.findOne({'name': 'Apple'}, function(err, fruit) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('\n  --SELECTED FRUIT--');
                    console.log(`  Fruit name: ${fruit.name}`)

                    console.log('\n  Press Ctrl+C to stop the server...')
                }
            })
        }
    })
    console.log('Application started and listening on PORT: ' + PORT);
})