'use strict';

angular.module('admin').controller('InstagramController', ['$scope', 'InstagramApi',
	function($scope, InstagramApi) {
		// Instagram controller logic
		$scope.data = {};
		InstagramApi.fetchPopular(function(data){
			$scope.pics = data;
		});
	}
]);
