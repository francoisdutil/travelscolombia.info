'use strict';

angular.module('admin').controller('WidgetSpecificSettingsController', ['$scope', '$modalInstance', 'widget',
	function($scope, $modalInstance, widget) {
		// Widget specific settings controller logic
		// ...
		// add widget to scope
		$scope.widget = widget;

		// set up result object
		$scope.result = jQuery.extend(true, {}, widget);

		$scope.ok = function () {
			console.log('calling ok from widget-specific settings controller!');
			$modalInstance.close($scope.result);
		};

		$scope.cancel = function () {
			console.log('calling cancel from widget-specific settings controller!');
			$modalInstance.dismiss('cancel');
		};
	}
]);
