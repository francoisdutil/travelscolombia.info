'use strict';

angular.module('core').directive('activemenu', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Activemenu directive logic 
				// ...
				
				element.text('this is the activemenu directive');
			}
		};
	}
]);