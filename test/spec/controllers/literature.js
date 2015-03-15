'use strict';

describe('Controller: LiteratureCtrl', function () {

  // load the controller's module
  beforeEach(module('mimelyApp'));

  var LiteratureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LiteratureCtrl = $controller('LiteratureCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
