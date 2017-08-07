angular.module(
	'provaWebApp',
	['clientesService', 'ngRoute']).config(
	['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.
			// if URL fragment is /home, then load the home partial, with the
			// ClientesCtrl controller
			when('/', {
				templateUrl: 'views/listagemCliente.html',
				controller: ClientesCtrl
			}).when('/cliente', {
				templateUrl: 'views/listagemCliente.html',
				controller: ClientesCtrl
				//controller : LoginCtrl
				// Add a default route
			}).when('/detalhe', {
				templateUrl: 'views/cadastroCliente.html',
				controller: ClientesCtrl
				//controller : LoginCtrl
				// Add a default route
			}).when('/manter', {
				templateUrl: 'views/manterCliente.html',
				controller: ClientesCtrl
				//controller : LoginCtrl
				// Add a default route
			}).when('/about', {
				templateUrl: 'views/about.html',
				controller: ClientesCtrl
				//controller : LoginCtrl
				// Add a default route
			}).otherwise({
				redirectTo: '/cliente'
			});
	}]);
