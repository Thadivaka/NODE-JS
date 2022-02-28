const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/HanuDBex'

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con  =  mongoose.connection

con.on('open', () => {
    console.log("Connected");
});

app.use(express.json())

const dataRouter = require('./routes/data')
app.use('/data', dataRouter);

app.listen(2000, () => {
    console.log("server started");
});