'use strict';

angular.module('admin').controller('ResizableController', ['$scope',
	function($scope) {
		// Resizable controller logic
		// ...
		$scope.$on('widgetResized', function (event, size) {
			$scope.width = size.width || $scope.width;
			$scope.height = size.height || $scope.height;
		});
	}
]);
