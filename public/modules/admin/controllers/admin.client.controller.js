'use strict';

angular.module('admin').controller('AdminController', ['$scope', '$filter', '$stateParams', '$location', 'Authentication',
	function($scope, $filter, $stateParams, $location, Authentication) {
		// Controller Logic
		// ...
		// example JSON
		$scope.jsonData = {
			Name: 'Joe', 'Last Name': 'Miller', Address: {Street: 'Neverland 42'}, Hobbies: ['doing stuff', 'dreaming']
		};

		$scope.$watch('jsonData', function(json) {
			$scope.jsonString = $filter('json')(json);
		}, true);
		$scope.$watch('jsonString', function(json) {
			try {
				$scope.jsonData = JSON.parse(json);
				$scope.wellFormed = true;
			} catch(e) {
				$scope.wellFormed = false;
			}
		}, true);
	}
]);
