const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        //   called the databse cards as opposed to deck as deck may be more useful for the pile in the game
        const db = client.db('cards');
        const cardCollection = db.collection('cards');
        const cardRouter = createRouter(cardCollection);


    app.use('/', cardRouter);
    })
    .catch(console.error);

app.listen(9000, function() {
    console.log(`Covatar server running on port ${this.address().port}`);
});