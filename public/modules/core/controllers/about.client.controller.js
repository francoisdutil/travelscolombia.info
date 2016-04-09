'use strict';

angular.module('core').controller('AboutController', ['$scope',
	function($scope) {
		$scope.oneAtATime = true;


    $scope.groups = [
      {
        title: 'aboutPage.about.story-label',
        content: 'story-content'
      },
      {
        title: 'mission-label',
        content: 'mission-content'
      },
      {
        title: 'community-label',
        content: 'community-content'
      },
      {
        title: 'progress-label',
        content: 'progress-content'
      },
      {
        title: 'team-label',
        content: 'team-content'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
	}
]);
