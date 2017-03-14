/* global angular */

angular.module('scopeHero', [
  'scopeHero.home',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../js/views/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
