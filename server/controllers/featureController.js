var Q = require('q');
var Feature = require('../models/features.js');

var findFeature = Q.nbind(Feature.findOne, Feature);
var createFeature = Q.nbind(Feature.create, Feature);
var findAllFeatures = Q.nbind(Feature.find, Feature);
