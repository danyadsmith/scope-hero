var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var app =  express();
mongoose.connect('mongodb://localhost/scope-hero');

app.use(bodyParser.json());
app.use(express.static('client'));

var port = 5459;

app.listen(port);
console.log('Server now listening on port ' + port);
