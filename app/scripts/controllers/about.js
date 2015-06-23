'use strict';

/**
 * @ngdoc function
 * @name pmappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pmappApp
 */
angular.module('pmappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
