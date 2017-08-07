angular.module(
		'provaWebApp',
		[ 'clientesService', 'ngRoute' ]).config(
		[ '$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
			
			$locationProvider.html5Mode(true);

			$routeProvider.
			// if URL fragment is /home, then load the home partial, with the
			// ClientesCtrl controller
			when('/', {
				templateUrl : 'views/cliente.html',
				controller : ClientesCtrl
			}).when('/cliente', {
				templateUrl : 'views/cliente.html',
				controller : ClientesCtrl
				//controller : LoginCtrl
			// Add a default route
			}).otherwise({
				redirectTo: '/cliente'
			});
		} ]);
