/* global angular */

angular.module('scopeHero.matrix', ['chart.js'])
  .controller('MatrixController',
    function ($scope, Features) {

      $scope.series = ['Q1: Quick Wins/Proceed', 'Q2: Challenges/Investigate', 'Q3: Fill Ins/Consider', 'Q4: Thankless/Kill'];
      $scope.labels = ['Impact', 'Effort'];
      $scope.colors = ['rgb(0, 204, 0)', 'rgb(153, 235, 0)', 'rgb(255, 192, 0)', 'rgb(255, 0, 0)'];

      var generateMatrix = function (data, qNo) {
        var matrix = [];
        data.forEach(function (feature) {
          console.log('feature: ', feature);
          if(feature.quadrant === qNo) {
            matrix.push({
              x: feature.effort,
              y: feature.impact,
              z: getBubbleSize(qNo)
            });
          }
        });
        return matrix;
      };

      var getBubbleSize = function (qNo) {
        var size = 3;
        switch (qNo) {
        case 1:
          size = 9;
          break;
        case 2:
          size = 7;
          break;
        case 3:
          size = 5;
          break;
        default:
          break;
        }
        return size;
      };

      var q1, q2, q3, q4;

      Features.getAll()
      .then(function (features) {
        q1 = generateMatrix(features, 1);
        q2 = generateMatrix(features, 2);
        q3 = generateMatrix(features, 3);
        q4 = generateMatrix(features, 4);
      });

      setTimeout(function(){
        $scope.data = [
          q1,
          q2,
          q3,
          q4
        ];
      }, 2000)
    });
