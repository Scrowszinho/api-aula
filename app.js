const express = require('express');
const app = express();
const person = require('./routes/routes-person');

app.use('/person', person);

app.use((req,res) => {
    res.status(200).send({
        message: 'ok'
    });
})

module.exports = app;