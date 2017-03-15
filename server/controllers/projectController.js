var Q = require('q');
var Project = require('../models/projects.js');

var createProject = Q.nbind(Project.create, Project);
var findAllProjects = Q.nbind(Project.find, Project);

module.exports = {
  allProjects: function (req, res, next) {
    findAllProjects({})
      .then(function (projects) {
        res.json(projects);
      })
      .fail(function (error) {
        next(error);
      });
  },

  newProject: function (req, res, next) {
    var project = req.body;
    createProject(project)
      .then(function (createdProject) {
        if (createdProject) {
          res.json(createdProject);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }
};
