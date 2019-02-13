const express = require('express');
var bodyParser = require('body-parser');
var port = '8080';
var app = module.exports = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://alex:KingAM77@ds017584.mlab.com:17584/motas_db');
mongoose.connection.once('open', () => {
    console.log('Ligação com sucesso a BD');
});

app.listen(port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
})
