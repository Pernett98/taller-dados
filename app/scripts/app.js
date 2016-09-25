'use strict';

/**
* @ngdoc overview
* @name tallerDadosApp
* @description
* # tallerDadosApp
*
* Main module of the application.
*/
angular
.module('tallerDadosApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'chart.js',
  'ui.materialize'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .otherwise({
    redirectTo: '/'
  });
});
