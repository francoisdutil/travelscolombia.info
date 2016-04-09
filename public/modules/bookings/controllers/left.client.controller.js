'use strict';

angular.module('bookings').controller('LeftController', ['$scope', '$timeout', '$mdSidenav', '$log',
	function($scope, $timeout, $mdSidenav, $log) {
		// Left controller logic
		// ...
		$scope.close = function() {
    $mdSidenav('left').close()
      .then(function(){
        //$log.debug("close LEFT is done");
      });
  	};
	}
]);
