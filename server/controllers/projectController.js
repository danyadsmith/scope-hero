var Q = require('q');
var Project = require('../models/projects.js');

var findProject = Q.nbind(Project.findOne, Project);
var createProject = Q.nbind(Project.create, Project);
var findAllProjects = Q.nbind(Project.find, Project);
