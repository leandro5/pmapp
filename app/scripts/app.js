'use strict';

/**
 * @ngdoc overview
 * @name pmappApp
 * @description
 * # pmappApp
 *
 * Main module of the application.
 */
angular
  .module('pmappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .factory('services', ['$http', function ($http) {
    var serviceBase = 'http://localhost:8080/';
    var obj = {};
    obj.getContatos = function(){
      console.log('service -> getContatos');
      return $http.get(serviceBase + 'contatos/');
    };

    obj.getContato = function(id){
      return $http.get(serviceBase + 'contatos/' + id);
    };

    obj.insertContato = function (Contato) {
      var c = JSON.stringify(Contato);
      console.log('String ->');
      console.log(c);
      //return $http.post(serviceBase + 'contatos/', c,headers: {'content-type': 'application/json'}).then(function (results) {
        return $http.post(serviceBase + 'contatos/', c).then(function (results) {
        return results;
      });
    };
 
    obj.updateContato = function (id,Contato) {
      return $http.put(serviceBase + 'contatos/' + id, JSON.stringify(Contato))
          .then(function (status) {
        return status.data;
      });
    };
 
    obj.deleteContato = function (id) {
        return $http.delete(serviceBase + 'contatos/' + id).then(function (status) {
          return status.data;
        });
    };
 
    return obj;
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Contatos',
        templateUrl: 'views/contatos.html',
        controller: 'listContatosCtrl'
      })
      .when('/edit-contato/:id', {
        title: 'Edit Contatos',
        templateUrl: 'views/edit-contato.html',
        controller: 'editContatosCtrl',
        resolve: {
          Contato: function(services, $route){
            var id = $route.current.params.id;
            return services.getContato(id);
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
