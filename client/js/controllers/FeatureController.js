/* global angular */

angular.module('scopeHero.feature', [])
  .controller('FeatureController', function ($scope) {
    this.features = features;
  })
  .directive('featureForm', function () {
    return {
      restrict: 'E',
      templateUrl: '../../partials/feature-form.html',
      controller: function () {
        this.showForm = false;
        this.addFeature = function(form) {
          this.feature = this.setQuadrant(this.feature);
          features.push(this.feature);
          this.feature = {};
          form.$setPristine();
        };
        this.setQuadrant = function(feature){
          if (feature.impact > 5) {
            if (feature.effort > 5) {
              feature.quadrant = 2;
            } else {
              feature.quadrant = 1;
            }
          } else {
            if (feature.effort > 5) {
              feature.quadrant = 4;
            } else {
              feature.quadrant = 3;
            }
          }
          return feature;
        };
      },
      controllerAs: 'featureFormController',
      scope: {
        features: '='
      }
    };
  });

var features = [
  {
    'feature': 'Create Home Page',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Create Project Page',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Display Existing Features from Mock',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Add New Features',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Rate Features',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Display Features on Matrix',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Create Server',
    'area': 'Server',
    'category': 'Express',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Create Database Connection',
    'area': 'Server',
    'category': 'MongoDB',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Send POST Request from Client to Create New Features',
    'area': 'Client',
    'category': 'API',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Handle POST Request on Server to Create New Features',
    'area': 'Router',
    'category': 'Express',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Persist New Feature Data to the Database',
    'area': 'Mongoose',
    'category': 'Database',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Send GET Request from Client to Get All Features',
    'area': 'Client',
    'category': 'API',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Handle GET Request on Server to Retrieve All Features',
    'area': 'Router',
    'category': 'Express',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Retrieve Features from the Database',
    'area': 'Mongoose',
    'category': 'Database',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  }
];
