'use strict';

/* Services */
'use strict';
angular.module('myApp.services', [])
.factory('deezerConnect', ['$http', function ($http) {
	return {
        get: function (url, config) {
            return $http.jsonp(url, config);
        },
        delete: function(item) {
            return $http.post(url, item, config);
        }
    };
}]);