/**
* @ngdoc function
* @name tallerDadosApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the tallerDadosApp
*/

(function() {
  'use strict';

  angular
  .module('tallerDadosApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope'];

  /* @ngInject */
  function MainCtrl($scope) {
    $scope.calculate = calculate;
    $scope.labels = ['1', '2', '3', '4', '5', '6'];
    $scope.series = ['Lanzamiento A', 'Lanzamiento B'];

    $scope.data = [
      [],
      []
    ];
    $scope.serieAnterior = [];

    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function calculate() {
      var serie = [0, 0, 0, 0, 0, 0];
      for (var i = 0; i < $scope.entry; i++) {
        var resultadoDado = getRandom(1,7);

        serie[resultadoDado-1] = serie[resultadoDado-1] + 1;
      }
      // console.log($scope.serieAnterior);
      if ($scope.serieAnterior.length) {
        $scope.data[1] = $scope.serieAnterior;
        $scope.data[0] = serie;
        $scope.serieAnterior = serie;
      }else {
        $scope.data[0] = serie;
        $scope.serieAnterior = serie;
      }
    }
  }
})();
