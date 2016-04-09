'use strict';

angular.module('admin').controller('LayoutsDemoController', ['$scope', 'widgetDefinitions', 'defaultWidgets', 'LayoutStorage', '$interval',
	function($scope, widgetDefinitions, defaultWidgets, LayoutStorage, $interval) {
		// Layouts demo controller logic
		// ...
		$scope.layoutOptions = {
			storageId: 'demo-layouts',
			storage: localStorage,
			storageHash: 'fs4df4d51',
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			lockDefaultLayouts: true,
			defaultLayouts: [
			{ title: 'Layout 1', active: true , defaultWidgets: defaultWidgets },
			{ title: 'Layout 2', active: false, defaultWidgets: defaultWidgets },
			{ title: 'Layout 3', active: false, defaultWidgets: defaultWidgets, locked: false }
			]
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);
