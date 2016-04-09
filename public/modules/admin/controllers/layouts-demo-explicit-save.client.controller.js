'use strict';

angular.module('admin').controller('LayoutsDemoExplicitSaveController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
	// Layouts demo explicit save controller logic
		// ...
		$scope.layoutOptions = {
			storageId: 'demo-layouts-explicit-save',
			storage: localStorage,
			storageHash: 'fs4df4d51',
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			explicitSave: true,
			defaultLayouts: [
			{ title: 'Layout 1', active: true , defaultWidgets: defaultWidgets },
			{ title: 'Layout 2', active: false, defaultWidgets: defaultWidgets },
			{ title: 'Layout 3', active: false, defaultWidgets: defaultWidgets }
			]
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);
