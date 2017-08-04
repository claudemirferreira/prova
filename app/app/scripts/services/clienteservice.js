angular.module('clientesService', ['ngResource']).
    factory('Clientes', function($resource){
    	var path = "http://localhost:8080/clientes";
    	
  return $resource(path, { id: '@id' },
  {
  	excluir: {
  		url: path+"/",
  		method: "DELETE",
  		params: {id:"@id"}
  	}
  }
  	

    );
});
    /*

    delete: { 
  		method: 'DELETE',
  		url: 'http://localhost:8080/clientes/:id'
    }
    */