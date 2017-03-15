//var projectsController = require('../controllers/projectController.js');
var featuresController = require('../controllers/featureController.js');
//var userController = require('../controllers/userController.js');

module.exports = function (app, express) {

  app.post('/api/features/', featuresController.newFeature);

};
