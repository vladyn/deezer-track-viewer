'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/deezer', {templateUrl: 'partials/deezer.html', controller: 'WidgetController'});
    $routeProvider.when('/', {templateUrl: '/partials/deezer.html', controller: 'WidgetController'});
    $routeProvider.when('/hello-world', {templateUrl: 'partials/hello-world.html', controller: 'HelloCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $locationProvider.html5Mode(true);
}]);