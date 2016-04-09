'use strict';

angular.module('admin').controller('NavBarController', ['$scope', '$route',
	function($scope, $route) {
		// Nav bar controller logic
		// ...
		$scope.$route = $route;
	}
]);
