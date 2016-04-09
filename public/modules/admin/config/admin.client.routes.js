'use strict';

//Setting up route
angular.module('admin').config(['$stateProvider', '$routeProvider',
	function($stateProvider, $routeProvider) {
		// Admin state routing
		$stateProvider.
		state('instagram', {
			url: '/instagram',
			templateUrl: 'modules/admin/views/instagram.client.view.html'
		}).
		state('admin', {
			url: '/admin',
			templateUrl: 'modules/admin/views/admin.client.view.html'
		}).
		state('admin.editlang', {
			url: '/admin/editlang',
			templateUrl: 'modules/admin/views/editlang.client.view.html'
		}).
		state('dashboard', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'DashboardController',
			title: 'simple',
			description: 'This is the simplest demo.'
		}).
		state('dashboard.resize', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'ResizeDemoController',
			title: 'simple',
			description: 'This is the simplest demo.'
		}).
		state('dashboard.custom-settings', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'CustomSettingsDemoController',
			title: 'custom widget settings',
			description: 'This demo showcases overriding the widget settings dialog/modal ' +
			'for the entire dashboard and for a specific widget. Click on the cog of each ' +
			'widget to see the custom modal. \n"configurable widget" has "limit" option in the modal ' +
			'that controls RandomDataModel.'
		}).
		state('dashboard.explicit-saving', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'ExplicitSaveDemoController',
			title: 'explicit saving',
			description: 'This demo showcases an option to only save the dashboard state '+
			'explicitly, e.g. by user input. Notice the "all saved" button in the controls ' +
			'updates as you make saveable changes.'
		}).
		state('dashboard.layouts', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/layouts.client.view.html',
			controller: 'LayoutsDemoController',
			title: 'dashboard layouts',
			description: 'This demo showcases the ability to have "dashboard layouts", ' +
			'meaning the ability to have multiple arbitrary configurations of widgets. For more ' +
			'information, take a look at [issue #31](https://github.com/DataTorrent/malhar-angular-dashboard/issues/31)'
		}).
		state('dashboard.layouts.explicit-saving', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/layouts.client.view.html',
			controller: 'LayoutsDemoExplicitSaveController',
			title: 'layouts explicit saving',
			description: 'This demo showcases dashboard layouts with explicit saving enabled.'
		});
	}
]);

angular.module('admin').value('defaultWidgets', [
	{ name: 'random' },
	{ name: 'time' },
	{ name: 'datamodel' },
	{
		name: 'random',
		style: {
			width: '50%'
		}
	},
	{
		name: 'time',
		style: {
			width: '50%'
		}
	}
]);
