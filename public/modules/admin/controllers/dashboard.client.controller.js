'use strict';

angular.module('admin').controller('DashboardController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
		// Controller Logic
		// ...
		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			storage: $window.localStorage,
			storageId: 'demo_simple'
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);
