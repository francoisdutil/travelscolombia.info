'use strict';

angular.module('core').directive('autoRefresh', [
	function($timeout) {
		return {
			restrict: 'A',

			link: function(scope, elem, attrs){

			}
		};
	}
]);
