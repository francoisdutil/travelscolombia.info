'use strict';

//Tours service used to communicate Tours REST endpoints
angular.module('tours').factory('Tours', ['$resource',
	function($resource) {
		return $resource('tours/:tourId', {
			tourId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
