'use strict';

angular.module('admin').directive('wtTime', [
	function($interval) {
		return {
			restrict: 'A',
			scope: true,
			replace: true,
			template: '<div>Time<div class="alert alert-success">{{time}}</div></div>',
			link: function (scope) {
				function update() {
					scope.time = new Date().toLocaleTimeString();
				}

				update();

				var promise = $interval(update, 500);

				scope.$on('$destroy', function () {
					$interval.cancel(promise);
				});
			}
		};
	}
]);
