function ClientesCtrl($scope, $http, $location, $resource, Clientes) {
	
  var resource = $resource('http://localhost:8080/clientes/:id');


	// Define a refresh function, that updates the data from the REST service
	$scope.refresh = function() {
		$scope.registros = Clientes.query();
	};
	
	$scope.get = function(registro) {
		$scope.registro = registro;
	};

	$scope.detalhe = function(registro) {
		//$scope.registro = registro;
		$location.path('http://localhost:9000/!#/about');
	};

	/*

	$scope.detalhe = function(registro) {
		$scope.registro = resource.get({id:registro.id});

		resource.get({id:id}, function(data) {
			$scope.successMessages = [ 'Cliente excluído' ];
			$scope.refresh();
			$scope.reset();
		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.errors = result.data;
			} else {
				$scope.errorMessages = [ 'Unknown  server error' ];
			}
			$scope.$apply();
		});

		alert($scope.registro.nome);
		$location.path('/detalhe');
	};

	
	$scope.detalhe = function(registro) {
		$scope.registro = resource.get({id:registro.id});

		resource.get({id:id}, function(data) {
			$scope.registro = data;
			alert($scope.registro.nome);
		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.errors = result.data;
			} else {
				$scope.errorMessages = [ 'Unknown  server error' ];
			}
			$scope.$apply();
		});
		$scope.$apply();
		$location.path('/detalhe');
	};
	*/

	// Define a reset function, that clears the prototype newTanque object, and
	// consequently, the form
	$scope.reset = function() {
		// clear input fields
		$scope.registro = {};
	};
	
	$scope.remove = function(id) {
		resource.delete({id:id}, function(data) {
			$scope.successMessages = [ 'Cliente excluído' ];
			$scope.refresh();
			$scope.reset();
		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.errors = result.data;
			} else {
				$scope.errorMessages = [ 'Unknown  server error' ];
			}
			$scope.$apply();
		});
    	
    	// Update the list of members
        $scope.refresh();  
        $scope.reset();
    };

	// Define a register function, which adds the tanque using the REST service,
	// and displays any error messages
	$scope.register = function() {
		$scope.successMessages = '';
		$scope.errorMessages = '';
		$scope.errors = {};

		Clientes.save($scope.registro, function(data) {

			// mark success on the registration form
			$scope.successMessages = [ 'Cliente Registered' ];

			$scope.refresh();

			// Clear the form
			$scope.reset();
		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.errors = result.data;
			} else {
				$scope.errorMessages = [ 'Unknown  server error' ];
			}
			$scope.$apply();
		});

	};

	// Call the refresh() function, to populate the list of tanquesf
	$scope.refresh();

	// Initialize newTanque here to prevent Angular from sending a request
	// without a proper Content-Type.
	$scope.reset();

	// Set the default orderBy to the name property
	$scope.orderBy = 'nome';
}