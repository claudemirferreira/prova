angular.module('clientesService', ['ngResource']).
    factory('Clientes', function($resource){
    	
  return $resource('http://localhost:8080/clientes/:id', 
  	{}

  	);

});
