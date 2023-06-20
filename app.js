const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
    res.send('i am default route')
})

app.use((req, res) => {
    res.send('invalid api request')
})
module.exports = app;
