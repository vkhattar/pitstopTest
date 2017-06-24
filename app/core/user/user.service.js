'use strict';

angular.
  module('core.user').
  factory('User', ['$http',
    function($http) {
      return {
        getAllUsers: function() {
          return $http.get('users/sampleData.json').then(function(response){
            return response.data;
          });
        }
      };
    }
  ])
