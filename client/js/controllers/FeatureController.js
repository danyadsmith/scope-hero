/* global angular */

angular.module('scopeHero.feature', [])
  .controller('FeatureController', function ($scope) {
    this.features = features;
  });

var features = [
  {
    'feature': 'Create Home Page',
    'description': '',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Create Project Page',
    'description': '',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Display Existing Features from Mock',
    'description': '',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Add New Features',
    'description': '',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Rate Features',
    'description': '',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Display Features on Matrix',
    'description': '',
    'area': 'Client',
    'category': 'AngularJS',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Create Server',
    'description': '',
    'area': 'Server',
    'category': 'Express',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Create Database Connection',
    'description': '',
    'area': 'Server',
    'category': 'MongoDB',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Send POST Request from Client to Create New Features',
    'description': '',
    'area': 'Client',
    'category': 'API',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Handle POST Request on Server to Create New Features',
    'description': '',
    'area': 'Router',
    'category': 'Express',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Persist New Feature Data to the Database',
    'description': '',
    'area': 'Mongoose',
    'category': 'Database',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Send GET Request from Client to Get All Features',
    'description': '',
    'area': 'Client',
    'category': 'API',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Handle GET Request on Server to Retrieve All Features',
    'description': '',
    'area': 'Router',
    'category': 'Express',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  },
  {
    'feature': 'Retrieve Features from the Database',
    'description': '',
    'area': 'Mongoose',
    'category': 'Database',
    'impact': 0,
    'effort': 0,
    'quadrant': null
  }
];
