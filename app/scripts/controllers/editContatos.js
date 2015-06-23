'use strict';

angular.module('pmappApp')
  .controller('editContatosCtrl', function ($scope, $rootScope, $location, $window, $routeParams, services, Contato) {
    //var id = ($routeParams.id) ? parseInt($routeParams.id) : '0';
    var id = $routeParams.id;
	 $rootScope.title = (id !== '0') ? 'Editar Contato' : 'Novo Contato';
	 $scope.buttonText = (id !== '0') ? 'Atualizar' : 'Incluir';
	 var original = Contato.data;
	 //original.id = id;
	 $scope.contato = angular.copy(original);
	 //$scope.Contato.id = id;
	 
	$scope.isClean = function() {
	 	return angular.equals(original, $scope.Contato);
	 };
	 
	$scope.deleteContato = function(Contato) {
		
		//if(confirm('Are you sure to delete Contato number: ' + $scope.Contato.id)===true){
			services.deleteContato(Contato.id);	
		//}

		//$location.path('/');
		//Forçar reload da página
		var url = "http://" + $window.location.host + "/#/";
        console.log(url);
        $window.location.href = url;
        $window.location.reload();
	 };
	 
	$scope.saveContato = function(Contato) {
		 
		if (id === '0') {
			console.log(Contato);
			services.insertContato(Contato);

			
		}
		else {
			console.log('id -> ' + id);
			console.log(Contato);
			services.updateContato(Contato.id, Contato);
		}

		//$location.path('/');
		//Forçar reload da página
		var url = "http://" + $window.location.host + "/#/";
	    console.log(url);
	    $window.location.href = url;
		$window.location.reload();
	 };
  });