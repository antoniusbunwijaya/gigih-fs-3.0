require('dotenv').config();
const express = require('express');
const port = 3000;
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

console.log(mongoString);

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const routes = require('./routes/routes');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
       extended: true,
    }),
);
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});



