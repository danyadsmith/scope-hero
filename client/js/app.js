/* global angular */

angular.module('scopeHero', [
  'scopeHero.home',
  'scopeHero.project',
  'scopeHero.feature',
  'scopeHero.matrix',
  'ui.router'
])
.config(function ($stateProvider, $locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
  $stateProvider
    .state('home', {
      name: 'home',
      url: '/',
      views: {
        'homePanelView': {
          controller: 'HomeController',
          templateUrl: '../js/views/home.html'
        }
      }
    })
    .state('app', {
      url: '/project',
      views: {
        'projectPanelView': {
          controller: 'ProjectController',
          templateUrl: '../js/views/project.html'
        },
        'matrixPanelView': {
          controller: 'MatrixController',
          templateUrl: '../js/views/matrix.html'
        },
        'featuresPanelView': {
          controller: 'FeatureController',
          templateUrl: '../js/views/feature.html'
        }
      }
    });
});
