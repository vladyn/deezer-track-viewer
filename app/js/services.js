'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.value('version', '0.1')
// .provider('deezerConnect', [function () {

// 	var defaultToken  = 'frcE5cMznk538ee2ce928dcJEqOByIC538ee2ce92919RSsOif',
// 	cName  = 'X-XSRF-TOKEN',
// 	url    = 'http://api.deezer.com/user/17673156/personal_songs',
// 	config = {
// 		params: {
// 		  access_token: token,
// 		  callback: 'JSON_CALLBACK', 
// 		  output: 'jsonp'
// 		}
// 	};

// 	this.token = defaultToken;
	


// 	this.$get = [function() {
// 		return {
// 		};
// 	}];
// }])


