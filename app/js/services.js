'use strict';

/* Services */
'use strict';
angular.module('myApp.services', [])
.value('version', '0.1')
.factory('deezerConnect', [function () {
	var defaultToken  = 'frcE5cMznk538ee2ce928dcJEqOByIC538ee2ce92919RSsOif';
	var url    = 'http://api.deezer.com/user/17673156/personal_songs';
	var config = {
        access_token: defaultToken,
        callback: 'JSON_CALLBACK', 
        output: 'jsonp'
	};

	return {
        get: function(token, url, format) {
            this.token = token || defaultToken;
        },
        post: function() {}
    };
}]);