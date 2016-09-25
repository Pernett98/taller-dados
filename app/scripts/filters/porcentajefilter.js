/**
* @ngdoc filter
* @name tallerDadosApp.filter:porcentajeFilter
* @function
* @description
* # porcentajeFilter
* Filter in the tallerDadosApp.
*/

(function() {
  'use strict';

  angular
  .module('tallerDadosApp')
  .filter('porcentajeFilter', porcentajeFilter);

  porcentajeFilter.$inject = ['$filter'];


  function porcentajeFilter($filter) {
    return porcentajeFilter;

    function porcentajeFilter(number, decimals) {
      return $filter('number')(number * 100, decimals) + '%';
    }
  }
})();
