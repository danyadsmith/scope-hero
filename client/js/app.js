/* global angular */

angular.module('scopeHero', [
  'scopeHero.services',
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
          templateUrl: '../partials/home.html'
        }
      }
    })
    .state('app', {
      url: '/project',
      views: {
        'projectPanelView': {
          controller: 'ProjectController',
          templateUrl: '../partials/project.html'
        },
        'matrixPanelView': {
          controller: 'MatrixController',
          templateUrl: '../partials/matrix.html'
        },
        'featuresPanelView': {
          controller: 'FeatureController',
          templateUrl: '../partials/feature.html'
        }
      }
    });
})
.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);
