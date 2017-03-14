/* global angular */

angular.module('scopeHero.matrix', ['chart.js'])
  .controller('MatrixController',
    function ($scope) {
      // see examples/bubble.js for random bubbles source code
      $scope.series = ['Q1: Quick Wins/Proceed', 'Q2: Challenges/Investigate', 'Q3: Fill Ins/Consider', 'Q4: Thankless/Kill'];
      $scope.color = ['##00cc00', '#99eb00', '#ffc000', '#ff0000'];
      $scope.data = [
        [
          { x: 3, y: 9, r: 7},
          { x: 2, y: 9, r: 7},
          { x: 3, y: 8, r: 7},
          { x: 1, y: 6, r: 7},
          { x: 4, y: 7, r: 7},
          { x: 5, y: 6, r: 7},
          { x: 3, y: 8, r: 7},
          { x: 2, y: 7, r: 7},
          { x: 3, y: 8, r: 7},
          { x: 4, y: 9, r: 7},
          { x: 1, y: 5, r: 7},
          { x: 5, y: 8, r: 7},
          { x: 2, y: 10, r: 7}
        ],
        [
          { x: 7, y: 9, r: 6 },
          { x: 8, y: 9, r: 6 },
          { x: 9, y: 8, r: 6 },
          { x: 7, y: 6, r: 6 },
          { x: 8, y: 7, r: 6 },
          { x: 8, y: 5, r: 6 },
          { x: 9, y: 8, r: 6 },
          { x: 10, y: 7, r: 6,},
          { x: 9, y: 8, r: 6 },
          { x: 6, y: 9, r: 6 },
          { x: 7, y: 5, r: 6 },
          { x: 9, y: 8, r: 6 },
          { x: 8, y: 10, r: 6 }
        ],
        [
          { x: 2, y: 3, r: 5 },
          { x: 3, y: 4, r: 5 },
          { x: 1, y: 2, r: 5 },
          { x: 4, y: 3, r: 5 },
          { x: 5, y: 1, r: 5 },
          { x: 3, y: 3, r: 5 },
          { x: 2, y: 4, r: 5 },
          { x: 3, y: 3, r: 5,},
          { x: 4, y: 5, r: 5 },
          { x: 1, y: 2, r: 5 },
          { x: 5, y: 3, r: 5 },
          { x: 3, y: 2, r: 5 },
          { x: 2, y: 1, r: 5 }
        ],
        [
          { x: 8, y: 2, r: 3 },
          { x: 9, y: 3, r: 3 },
          { x: 7, y: 1, r: 3 },
          { x: 8, y: 4, r: 3 },
          { x: 8, y: 5, r: 3 },
          { x: 9, y: 3, r: 3 },
          { x: 10, y: 2, r: 3 },
          { x: 8, y: 3, r: 3,},
          { x: 9, y: 4, r: 3 },
          { x: 7, y: 1, r: 3 },
          { x: 8, y: 5, r: 3 },
          { x: 10, y: 3, r: 3 },
          { x: 6, y: 1, r: 3 }
        ]
      ];
    });
