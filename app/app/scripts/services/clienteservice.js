angular.module('clientesService', ['ngResource']).
    factory('Clientes', function($resource){
    	var path = "http://localhost:8080/clientes";

return $resource(path, {id: "@id"}, {
        update: {
            method: 'PUT'
        },

         excluir: {
            method: 'DELETE'
        },

         get: {
            method: 'DELETE'
        }
    });

});

    