angular.module('scopeHero.services', [])
  .factory('Features', function ($http) {
    var addFeature = function (feature) {
      console.log('FEATURE: ', feature);
      return $http({
        method: 'POST',
        url: '/api/features',
        data: JSON.stringify(feature)
      });
    };

    return {
      addFeature: addFeature
    };
  });
