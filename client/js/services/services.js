/* global angular */

angular.module('scopeHero.services', [])
  .factory('Features', function ($http) {
    var addFeature = function (feature) {
      //console.log('FEATURE: ', JSON.stringify(feature));
      return $http({
        method: 'POST',
        url: '/api/features',
        data: JSON.stringify(feature)
      });
    };

    var getAll = function () {
      //console.log('CLIENT: Initiating GET Request for Features');
      return $http({
        method: 'GET',
        url: '/api/features'
      }).then(function (resp) {
        //console.log('GET FEATURES:', resp.data);
        return resp.data;
      });
    };

    return {
      addFeature: addFeature,
      getAll: getAll
    };
  });
