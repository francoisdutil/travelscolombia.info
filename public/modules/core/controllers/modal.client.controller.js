'use strict';

angular.module('core').controller('ModalController', ['$scope', '$rootScope', '$translate', '$modal', 'ngDialog',
	function($scope, $rootScope, $translate, $modal, ngDialog) {
		// Modal controller logic
		// ...
		$scope.modalForgotPassword = function () {
			$rootScope.theme = 'ngdialog-theme-flat';
			ngDialog.open({
				template: '/modules/users/views/password/modal-forgot-password.client.view.html',
				controller: 'PasswordController',
				className: 'ngdialog-theme-flat'
			});
		};

		$scope.modalChangePassword = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/users/views/settings/modal-change-password.client.view.html',
				controller: 'SettingsController',
				className: 'ngdialog-theme-plain'
			});
		};

		$scope.modalEditProfile = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/users/views/settings/modal-edit-profile.client.view.html',
				controller: 'SettingsController',
				className: 'ngdialog-theme-plain'
			});
		};

		$scope.modalSocialAccounts = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/users/views/settings/modal-social-accounts.client.view.html',
				controller: 'SettingsController',
				className: 'ngdialog-theme-plain'
			});
		};
		//
		// Modal LoginCustomer
		$scope.loginCustomer = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/bookings/views/modal.signin.html',
				className: 'ngdialog-theme-plain',
				controller: 'AuthenticationController',
				preCloseCallback: function () {
				}
			});
		};

		$scope.modalLogin = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				controller: 'AuthenticationController',
				template: '/modules/users/views/authentication/modal-signin.client.view.html',
				className: 'ngdialog-theme-flat'
			});
		};


		$scope.registerCustomer = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				controller: 'AuthenticationController',
				template: '/modules/users/views/authentication/modal-signup.client.view.html',
				className: 'ngdialog-theme-flat',
				closeByDocument: true,
				closeByEscape: true
			});
		};

		$scope.openModalLatestChanges = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.latest.changes.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Tour View
		$scope.openTourView = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-view.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Tour Tips
		$scope.showTourTips = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-tips.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Details
		$scope.showTourDetails = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-details.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		// Modal Tour Confirm Delete
		$scope.confirmDeleteTour = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-delete.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Map
		$scope.showTourMap = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-map.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Included
		$scope.showTourIncluded = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.tour-included.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Itinerary
		$scope.showTourItinerary = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.tour-itinerary.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		// Modal contact Map
		$scope.showContactMap = function () {
			$scope.value = true;
			ngDialog.open({
				controller: 'ContactController',
				template: '/modules/core/modals/modal.contact-map.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal contact Map
		$scope.showOfficeSantaMarta = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.office.santamarta.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};
		// Modal contact Map
		$scope.showOfficeTaganga = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.office.taganga.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};
		// Modal contact Map
		$scope.showOfficeRiohacha = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.office.riohacha.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Guide Info
		$scope.showGuideInfo = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.guideInfo.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		$scope.showGuideInfoPublic = function () {
			$scope.value = true;
			$scope.locale = $translate.use();
			//console.log('locale: ' + $scope.locale);
			ngDialog.open({
				template: '/modules/core/modals/modal.guideInfoPublic.html',
				controller: 'GuidesController',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};


		$scope.deleteGuide = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.guide-delete.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Guide Confirm Delete
		$scope.confirmDeleteGuide = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.guide-delete.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		$scope.reportGuide = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.reportGuide.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Category Confirm Delete
		$scope.confirmDeleteCategory = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.category-delete.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		$scope.modalTerms = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.terms-conditions.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		$rootScope.$on('ngDialog.opened', function (e, $dialog) {
			//console.log('ngDialog opened: ' + $dialog.attr('id'));
		});

		$rootScope.$on('ngDialog.closed', function (e, $dialog) {
			//console.log('ngDialog closed: ' + $dialog.attr('id'));
		});
	}
]);
