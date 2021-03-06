'use strict';

describe('Controller: ClienteCtrl', function () {

  // load the controller's module
  beforeEach(module('provaWebApp'));

  var ClientecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientecontrollerCtrl = $controller('ClienteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
