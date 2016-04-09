'use strict';

angular.module('tours').controller('ItineraryController', ['$scope',
	function($scope) {
		// Controller Logic
		// ...
		var waypoints = $scope.waypoints = [];

		$scope.sortableOptions = {
			axis: 'y'
		};

		$scope.removeWaypoint = function(waypoint) {
			waypoints.splice(waypoints.indexOf(waypoint), 1);
		};

		angular.extend($scope, {

		markers: {
				mtcsantamarta: {
						lat: 11.242283,
						lng: -74.212968,
						message: 'Expotur, Santa Marta',
						focus: true,
						draggable: false
						},
				mtctaganga: {
						lat: 11.267518,
						lng: -74.190874,
						message: 'Expotur, Taganga',
						focus: true,
						draggable: false
						}
				}
		});


	}
]);
