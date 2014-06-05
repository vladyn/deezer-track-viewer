'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider.when('/app/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/app/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/app/deezer', {templateUrl: 'partials/deezer.html', controller: 'WidgetController'});
    $routeProvider.when('/app/', {templateUrl: 'partials/deezer.html', controller: 'WidgetController'});
    $routeProvider.otherwise({redirectTo: '/app/'});
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);