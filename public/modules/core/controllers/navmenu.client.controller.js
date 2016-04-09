'use strict';

angular.module('core')
  .controller('NavmenuController', ['$scope', function ($scope) {
    $scope.sideMenu = [{
      'title': 'Top',
      'icon': 'home',
      'link': '/'
    }, {
      'title': 'About',
      'icon': 'zoom-in',
      'link': '/about'
    }, {
      'title': 'Services',
      'icon': 'globe',
      'link': '/#section-3'
    }, {
      'title': 'Booking',
      'icon': 'shopping-cart',
      'link': '/#section-4'
    }, {
      'title': 'Images',
      'icon': 'picture',
      'link': '/#section-5'
    }, {
      'title': 'Reviews',
      'icon': 'pencil',
      'link': '/#section-6'
    }, {
      'title': 'Latest',
      'icon': 'paperclip',
      'link': '/#section-7'
    }, {
      'title': 'Social',
      'icon': 'share',
      'link': '/#section-8'
    }, {
      'title': 'Feedback',
      'icon': 'send',
      'link': '/#section-9'
    }
   ];

    $scope.isOpen = false;

    $scope.open = function () {
      $scope.isOpen = true;
    };

    $scope.toggle = function () {
      $scope.isOpen = !$scope.isOpen;
    };

    $scope.close = function () {
      $scope.isOpen = false;
    };
   }
]);
