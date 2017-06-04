var express = require('express');
var getDataFromDb = require('./query');

var app = express();

app.get('/', function (req, res) {
    res.send('It works...');   
});

app.get('/lastterms', function (req, res) {    
    getDataFromDb(req, res, 1);
});

app.get('/term/:id', function (req, res) {
    getDataFromDb(req, res, 2);
});

app.get('/search/:term', function (req, res) {
    getDataFromDb(req, res, 3); 
});

app.listen(3000, function () {
    console.log('Приложение слушает 3000 порт!')
});