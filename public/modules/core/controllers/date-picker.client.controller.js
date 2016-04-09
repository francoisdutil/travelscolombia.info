'use strict';

angular.module('core').controller('DatePickerController', ['$scope',
	function($scope) {
		$scope.tomorrow = function() {
		$scope.dt = new Date();
		$scope.dt.setDate($scope.dt.getDate() + 1);
		};
		$scope.tomorrow();

		$scope.showWeeks = false;
		$scope.showButtonBar = false;

		$scope.clear = function () {
			$scope.dt = null;
		};

		$scope.minDate = $scope.dt.setDate($scope.dt.getDate());

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = true;
		};

		$scope.dateOptions = {
			'year-format': 'yy',
			'starting-day': 0
		};

		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
		$scope.format = $scope.formats[1];
	}
]);
