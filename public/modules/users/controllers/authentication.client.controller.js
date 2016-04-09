'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$rootScope', '$modal', '$http', '$location', 'Authentication', 'ngDialog', '$translate', '$locale',
	function($scope, $rootScope, $modal, $http, $location, Authentication, ngDialog, $translate, $locale) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		//if ($scope.authentication.user) $location.path('/#!/bookings/create');


		$scope.modalSignup = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.openConfirm({
				controller: 'AuthenticationController',
				template: '/modules/users/views/authentication/modal-signup.client.view.html',
				className: 'ngdialog-theme-plain',
				closeByDocument: true,
				closeByEscape: true
			});
		};

		$scope.signup = function() {

			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;
				//ngDialog.close();
				// And redirect to the booking page
			 $location.path('/bookings/create');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		//$scope.language = $locale.id;

		//$scope.changeLanguage = function (lang) {
		//	$scope.locale = $translate.use(lang);
		//	$scope.language = lang;

		//};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;
				//ngDialog.close();
				// And redirect to the booking page
				$location.path('/bookings/create');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
