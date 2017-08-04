function ClientesCtrl($scope, $http, Clientes) {
    $scope.registro = {};

    // Define a refresh function, that updates the data from the REST service
    $scope.refresh = function() {
        $scope.registros = Clientes.query();
    };

    // Define a clearMessages function that resets the values of the error and
    // success messages.
    $scope.clearMessages = function () {
        $scope.successMessages = '';
        $scope.errorMessages = '';
        $scope.errors = {};
    };

    // Define a reset function, that clears the prototype newMember object, and
    // consequently, the form
    $scope.reset = function() {
        // Sets the form to it's pristine state
        if($scope.regForm) {
            $scope.regForm.$setPristine();
        }
        // Clear input fields. If $scope.newMember was set to an empty object {},
        // then invalid form values would not be reset.
        // By specifying all properties, input fields with invalid values are also reset.
        $scope.newCliente = {nome: "", sobrenome: "", telefone: "", apelido: ""};

        // clear messages
        $scope.clearMessages();
    };

    // Define a register function, which adds the member using the REST service,
    // and displays any error messages
    $scope.register = function() {
        $scope.clearMessages();

        Clientes.save($scope.newCliente, function(data) {
            // Update the list of members
            $scope.refresh();
            // Clear the form
            $scope.reset();
            // mark success on the registration form
            $scope.successMessages = [ 'Cliente Registered' ];
        }, function(result) {
            if ((result.status == 409) || (result.status == 400)) {
                $scope.errors = result.data;
            } else {
                $scope.errorMessages = [ 'Unknown  server error' ];
            }
        });

    };

    // Define a register function, which adds the member using the REST service,
    // and displays any error messages
    $scope.delete = function(registro) {
        alert(registro.id);

        Clientes.excluir( {id:registro.id} , function(data) {
            //$scope.delete(5);

            // Update the list of members
            $scope.refresh();

            // Clear the form
            $scope.reset();



            // mark success on the registration form
            $scope.successMessages = [ 'Cliente Registered' ];
        }, function(result) {
            if ((result.status == 409) || (result.status == 400)) {
                $scope.errors = result.data;
            } else {
                $scope.errorMessages = [ 'Unknown  server error' ];
            }
        });
        

    };

    // Call the refresh() function, to populate the list of members
    $scope.refresh();

    // Initialize newMember here to prevent Angular from sending a request
    // without a proper Content-Type.
    $scope.reset();

    // Set the default orderBy to the name property
    $scope.orderBy = 'nome';
}