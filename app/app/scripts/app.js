'use strict';

  angular.module('kitchensink', ['ngRoute','clientesService']).config(
        [ '$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
            /*
             * Use a HTTP interceptor to add a nonce to every request to prevent MSIE from caching responses.
             */
            $httpProvider.interceptors.push('ajaxNonceInterceptor');

            $routeProvider.
            // if URL fragment is /home, then load the home partial, with the
            // MembersCtrl controller
            when('/', {
                templateUrl : 'views/cliente.html',
                controller : ClientesCtrl
            // Add a default route
            }).otherwise({
                redirectTo : '/home'
            });
        } ])
    .factory('ajaxNonceInterceptor', function() {
        // This interceptor is equivalent to the behavior induced by $.ajaxSetup({cache:false});

        var param_start = /\?/;

        return {

            request : function(config) {
                if (config.method == 'GET') {
                    // Add a query parameter named '_' to the URL, with a value equal to the current timestamp
                    config.url += (param_start.test(config.url) ? "&" : "?") + '_=' + new Date().getTime();
                }
                return config;
            }
        }
    });
