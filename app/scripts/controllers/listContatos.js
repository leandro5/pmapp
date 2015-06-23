'use strict';

angular.module('pmappApp')
  .controller('listContatosCtrl', function ($scope,services) {
  	

    services.getContatos().then(function (data) {
    	$scope.contatos = [];
 		$scope.contatos = data.data;
 		
 		console.log('carreguei lista');
 		console.log($scope.contatos);
 	});
  });