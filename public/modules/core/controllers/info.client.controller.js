'use strict';

angular.module('core').controller('InfoController', ['$scope', '$log',
	function($scope, $log) {
		// Info controller logic
		$scope.templateValue = 'hello from the template itself';
		$scope.clickedButtonInWindow = function () {
			var msg = 'clicked a window in the template!';
			$log.info(msg);
			alert(msg);
		};
	}
]);
