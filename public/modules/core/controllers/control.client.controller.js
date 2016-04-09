'use strict';

angular.module('core').controller('ControlController', ['$scope',
	function($scope) {
		// Control controller logic
		$scope.controlText = 'I\'m a custom control';
		$scope.danger = false;
		$scope.controlClick = function () {
			$scope.danger = !$scope.danger;
			alert('custom control clicked!');
		};
	}
]);
