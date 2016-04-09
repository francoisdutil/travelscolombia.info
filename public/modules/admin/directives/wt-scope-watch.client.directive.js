'use strict';

angular.module('admin').directive('wtScopeWatch', [
	function() {
		return {
			restrict: 'A',
			replace: true,
			template: '<div>Value<div class="alert alert-info">{{value}}</div></div>',
			scope: {
				value: '=value'
			}
		};
	}
]);
