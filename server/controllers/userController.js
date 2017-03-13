var Q = require('q');
var jwt = require('jwt-simple');
var User = require('../models/users.js');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
