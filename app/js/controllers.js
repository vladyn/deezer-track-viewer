'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])

  .controller('HelloCtrl', ['$scope', function ($scope) {
    $scope.helloMessage = "Hello World!";
  }])

  .controller('WidgetController', ['$http', '$log', '$scope', 'deezerConnect', function($http, $log, $scope, deezerConnect){
    // deezerConnect
  var token  = 'frcE5cMznk538ee2ce928dcJEqOByIC538ee2ce92919RSsOif',
      url    = 'http://api.deezer.com/user/17673156/tracks',
      config = {
          params: {
              access_token: token,
              callback: 'JSON_CALLBACK', 
              output: 'jsonp'
          }
      };

  	deezerConnect.get(url, config)
      .success(function(data) {
        $scope.songs       = data.data;
        $scope.total       = data.total;
        $scope.nextPageUrl = data.next;
    	})
      .error(function(data, status) {
        $log.info("Something went wrong: " + data + status);
      });

      $scope.switchItems = function(item) {
      };
  }]);


