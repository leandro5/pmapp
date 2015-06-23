'use strict';

/**
 * @ngdoc function
 * @name pmappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pmappApp
 */
angular.module('pmappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
