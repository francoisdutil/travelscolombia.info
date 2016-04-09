'use strict';

angular.module('admin').directive('wtFluid', [
	function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'template/fluid.html',
			scope: true,
			controller: function ($scope) {
				$scope.$on('widgetResized', function (event, size) {
					$scope.width = size.width || $scope.width;
					$scope.height = size.height || $scope.height;
				});
			}
		};
	}
]);
