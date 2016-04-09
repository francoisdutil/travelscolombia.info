'use strict';

angular.module('core').controller('WindowCtrl', ['$scope',
	function($scope) {
		// Window controller logic
		$scope.place = {};
		$scope.showPlaceDetails = function(param) {
			$scope.place = param;
		};
	}
]);
