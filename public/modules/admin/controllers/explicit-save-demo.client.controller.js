'use strict';

angular.module('admin').controller('ExplicitSaveDemoController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
	// Explicit save demo controller logic
		// ...
		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			storage: $window.localStorage,
			storageId: 'explicitSave',
			explicitSave: true
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);
