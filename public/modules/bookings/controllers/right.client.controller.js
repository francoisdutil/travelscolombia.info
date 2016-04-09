'use strict';

angular.module('bookings').controller('RightController', ['$scope', '$timeout', '$mdSidenav', '$log',
	function($scope, $timeout, $mdSidenav, $log) {
		// Left controller logic
		// ...
		$scope.close = function() {
    $mdSidenav('right').close()
      .then(function(){
        //$log.debug("close RIGHT is done");
      });
  	};
	}
]);
