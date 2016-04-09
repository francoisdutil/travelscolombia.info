'use strict';

angular.module('admin').factory('InstagramApi', ['$http',
	function($http) {
		// Instagram api service logic
		var client_id = 'c1881e31004c4ddd810ff29f794e1931';
		return {
			fetchPopular: function(callback){
				var endpoint = 'https://api.instagram.com/v1/media/popular';
				endpoint += '?count=99';
				endpoint += '&client_id=' + client_id;
				endpoint += '&callback=JSON_CALLBACK';
				$http.jsonp(endpoint).success(function(response){
					callback(response.data);
				});
			}
		};
	}
]);
