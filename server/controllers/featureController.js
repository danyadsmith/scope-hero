var Q = require('q');
var Feature = require('../models/features.js');
//var bodyParser = require('body-parser');

//var findFeature = Q.nbind(Feature.findOne, Feature);
var createFeature = Q.nbind(Feature.create, Feature);
var findAllFeatures = Q.nbind(Feature.find, Feature);


module.exports = {
  allFeatures: function (req, res, next) {
    console.log('Starting MongoDB GET ALL FEATURES...');
    findAllFeatures({})
      .then(function (features) {
        console.log('RETURNED FEATURES: ', features);
        res.json(features);
      })
      .fail(function (error) {
        next(error);
      });
  },

  newFeature: function (req, res, next) {
    //console.log('Hello from newFeature function...', req.body);
    var feature = req.body;
    console.log(feature);
    createFeature(feature)
    .then(function (createdFeature) {
      if (createdFeature) {
        res.json(createdFeature);
        //console.log('The feature was created...', createdFeature);
      }
    })
    .fail(function (error) {
      next(error);
    });
  }
};
