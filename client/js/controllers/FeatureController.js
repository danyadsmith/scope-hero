/* global angular */

angular.module('scopeHero.feature', [])
  .controller('FeatureController', function ($scope, Features) {
    $scope.data = {};

    Features.getAll().then(function (features) {
      $scope.data.features = features;
      //console.log('ALL FEATURES: ', features);
    });
  })
  .directive('featureForm', function (Features) {
    return {
      restrict: 'E',
      templateUrl: '../../partials/feature-form.html',
      controller: function () {
        this.showForm = false;
        this.addFeature = function (form) {
          this.feature = this.setQuadrant(this.feature);
          Features.addFeature(this.feature);
          features.push(this.feature);
          this.feature = {};
          form.$setPristine();
        };
        this.setQuadrant = function (feature) {
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

];
