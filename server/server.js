var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
require('./config/db.js');
require('./config/router.js');

var app =  express();

app.use(bodyParser.json());
app.use(express.static('client'));


var port = 5459;

app.listen(port);
console.log('Server now listening on port ' + port);
