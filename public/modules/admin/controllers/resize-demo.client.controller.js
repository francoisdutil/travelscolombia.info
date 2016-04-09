'use strict';

angular.module('admin').controller('ResizeDemoController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
		// Resize demo controller logic
		// ...
		defaultWidgets = [
		{ name: 'fluid' },
		{ name: 'resizable' },
		{ name: 'random', style: { width: '50%' } },
		{ name: 'time', style: { width: '50%' } }
		];

		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			storage: $window.localStorage,
			storageId: 'demo_resize'
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);
