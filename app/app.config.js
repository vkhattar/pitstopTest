'use strict';

angular.
  module('userApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        otherwise('/users');
    }
  ]);
