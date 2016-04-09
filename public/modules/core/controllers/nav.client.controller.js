'use strict';

angular.module('core').controller('NavController', ['$scope', 'offCanvas',
	function($scope, offCanvas) {
		// My off canvas controller logic
		// ...
		$scope.toggle = offCanvas.toggle;
	}
]);
