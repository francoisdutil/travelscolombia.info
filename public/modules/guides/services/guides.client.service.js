'use strict';

//Guides service used to communicate Guides REST endpoints
angular.module('guides').factory('Guides', ['$resource',
	function($resource) {
		return $resource('guides/:guideId', { guideId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);