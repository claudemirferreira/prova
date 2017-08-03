'use strict';

describe('Controller: ClientecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ClientecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientecontrollerCtrl = $controller('ClientecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
