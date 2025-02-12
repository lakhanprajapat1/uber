const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); 
dotenv.config();
const app = express();
const connectToDb= require('./db/db');

connectToDb();

app.use(cors());

app.get('/', (req, res) => {
    res.send('iam server created by lakhan prajapati');
});

module.exports = app;
