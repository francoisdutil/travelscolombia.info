'use strict';

//Setting up route
angular.module('guides').config(['$stateProvider',
	function($stateProvider) {
		// Guides state routing
		$stateProvider.
		state('listGuides', {
			url: '/guides',
			templateUrl: 'modules/guides/views/list-guides.client.view.html'
		}).
		state('createGuide', {
			url: '/guides/create',
			templateUrl: 'modules/guides/views/create-guide.client.view.html'
		}).
		state('viewGuide', {
			url: '/guides/:guideId',
			templateUrl: 'modules/guides/views/view-guide.client.view.html'
		}).
		state('editGuide', {
			url: '/guides/:guideId/edit',
			templateUrl: 'modules/guides/views/edit-guide.client.view.html'
		});
	}
]);
