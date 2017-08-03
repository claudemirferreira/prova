'use strict';

/**
 * @ngdoc service
 * @name appApp.ClienteService
 * @description
 * # ClienteService
 * Service in the appApp.
 */
angular.module('appApp')
            .factory('clienteService', ['$resource', function ($resource) {

                    return $resource('http://localhost:8080/clientes/');

            }]);

