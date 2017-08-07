'use strict';

describe('Service: clienteService', function () {

  // load the service's module
  beforeEach(module('provaWebApp'));

  // instantiate service
  var clienteService;
  beforeEach(inject(function (_clienteService_) {
    clienteService = _clienteService_;
  }));

  it('should do something', function () {
    expect(!!clienteService).toBe(true);
  });

});
