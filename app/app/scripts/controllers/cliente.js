'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ClientecontrollerCtrl
 * @description
 * # ClientecontrollerCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ClienteCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     // Retorna todos os registros de pessoas do banco de dados
     $scope.load = function() {
     	//$scope.registros = homeService.query();

     	$scope.registros = [
							    {
							        "id": 2,
							        "nome": "Hello World!",
							        "sobrenome": "This is my first post!",
							        "telefone": "123456",
							        "apelido": "teste",
							        "dataCadastro": null
							    },
							    {
							        "id": 3,
							        "nome": "Hello World!",
							        "sobrenome": "This is my first post!",
							        "telefone": "123456",
							        "apelido": "teste",
							        "dataCadastro": null
							    },
							    {
							        "id": 4,
							        "nome": "Hello World!",
							        "sobrenome": "This is my first post!",
							        "telefone": "123456",
							        "apelido": "teste",
							        "dataCadastro": null
							    }
							]
	}


  });
