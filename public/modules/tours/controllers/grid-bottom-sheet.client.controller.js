'use strict';

angular.module('tours').controller('GridBottomSheetController', ['$scope', '$mdBottomSheet',
	function($scope, $mdBottomSheet) {
		// Grid bottom sheet controller logic
		$scope.items = [
			{ name: 'Hangout', icon: 'hangout' },
			{ name: 'Mail', icon: 'mail' },
			{ name: 'Message', icon: 'message' },
			{ name: 'Copy', icon: 'copy' },
			{ name: 'Facebook', icon: 'facebook' },
			{ name: 'Twitter', icon: 'twitter' }
		];
	}
]);
