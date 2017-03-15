var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
//var restful = require('node-restful');
var featuresController = require('./controllers/featureController.js');
var _ = require('lodash');

var app =  express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./config/db.js');


app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static('client'));
app.post('/api/features/', featuresController.newFeature);
app.get('/api/features/', featuresController.allFeatures);

var port = process.env.PORT || 5459;

app.listen(port);
console.log('Server now listening on port ' + port);
