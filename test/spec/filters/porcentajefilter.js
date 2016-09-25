'use strict';

describe('Filter: porcentajeFilter', function () {

  // load the filter's module
  beforeEach(module('tallerDadosApp'));

  // initialize a new instance of the filter before each test
  var porcentajeFilter;
  beforeEach(inject(function ($filter) {
    porcentajeFilter = $filter('porcentajeFilter');
  }));

  it('should return the input prefixed with "porcentajeFilter filter:"', function () {
    var text = 'angularjs';
    expect(porcentajeFilter(text)).toBe('porcentajeFilter filter: ' + text);
  });

});
