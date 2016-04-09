'use strict';

// Guides controller
angular.module('guides').controller('GuidesController', ['$scope', '$rootScope', '$http', '$filter', '$timeout', '$translate', '$stateParams', '$location', '$anchorScroll', 'Authentication', 'Guides',
	function($scope, $rootScope, $http, $filter, $timeout, $translate, $stateParams, $location, $anchorScroll, Authentication, Guides ) {
		$scope.authentication = Authentication;

		$scope.preflang = $translate.use();

		$scope.action = 'createGuide';

		// ui-select test
		$scope.disabled = undefined;

		$scope.enable = function() {
			$scope.disabled = false;
		};

		$scope.disable = function() {
			$scope.disabled = true;
		};

		$scope.clear = function() {
			$scope.person.selected = undefined;
		};

		$scope.formData = {};
		$scope.person = {};
		$scope.listguides = function() {
			$scope.people = Guides.query();
		};

		$scope.canLike = true;
		$scope.addLike = function() {
			$scope.canLike = false;
			$scope.guide.counterLikes += 1;
		};
		$scope.canRecommend = true;
		$scope.addRecommended = function() {
			$scope.canRecommend = false;
			$scope.guide.counterRecommended += 1;
		};
		$scope.multipleDemo = {};
	  $scope.multipleDemo.cats = ['CiudadPerdida'];
	  $scope.multipleDemo.selectedCats = [];

		$scope.formatDate = function(dt) {
			$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd/MM/yyyy', 'shortDate'];
			$scope.format = $scope.formats[2];
			var date = dt;
			$scope.startDate = $filter('date') ($scope.dt, $scope.format);
			$scope.formData.dateTeamMember = $scope.startDate;
		};

		$scope.address = {};
		$scope.refreshAddresses = function(address) {
			var params = {address: address, sensor: false};
			return $http.get(
				'http://maps.googleapis.com/maps/api/geocode/json',
				{params: params}
			).then(function(response) {
				$scope.addresses = response.data.results;
			});
		};

		$scope.image = null;

		$scope.Images = [{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/ANTONIO-HIGUITA.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/ARGEMIRO-BONNET.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/ARIEL-GALLEGO.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/guia01.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/JHON-JAIRO-DE-LA-HOZ.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/MIGUEL-GOMEZ.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/SIGILFREDO-CAMACHO.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/SIXTO-RAMÍREZ.png'
		}];


		// Create new Guide
		$scope.create = function() {
			// Create new Guide object
			var guide = new Guides ({
				name: $scope.formData.name,
				nickName: $scope.formData.nickName,
				email: $scope.formData.email,
				phone: $scope.formData.phone,
				locationName: $scope.formData.locationname,
				intro_en: $scope.formData.introEN,
				intro_es: $scope.formData.introES,
				intro_fr: $scope.formData.introFR,
				intro_de: $scope.formData.introDE,
				speaksEnglish: $scope.formData.speakenglish,
				available: $scope.formData.available,
				pictureUrl: $scope.formData.pictureUrl,
				yearsExperience:  $scope.formData.yearsExperience,
				dateTeamMember:  $scope.formData.dateTeamMember,
				categories: $scope.multipleDemo.selectedCats,
				counterRecommended: $scope.formData.yearsExperience * 12,
				counterLikes: $scope.formData.yearsExperience * 24
			});

			// Redirect after save
			guide.$save(function(response) {
				$location.path('guides');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
			// Clear form fields
			$scope.formData.name = '';
			$scope.formData.email = '';
			$scope.formData.phone = '';
			$scope.formData.locationName = '';
			$scope.formData.introEN = '';
			$scope.formData.introES = '';
			$scope.formData.introFR = '';
			$scope.formData.introDE = '';
			$scope.formData.speakenglish = false;
			$scope.formData.available = true;
			$scope.formData.pictureUrl = '';
		};


		// Remove existing Guide
		$scope.remove = function( guide ) {
			if ( guide ) { guide.$remove();

				for (var i in $scope.guides ) {
					if ($scope.guides [i] === guide ) {
						$scope.guides.splice(i, 1);
					}
				}
			} else {
				$scope.guide.$remove(function() {
					$location.path('guides');
				});
			}
		};

		// Update existing Guide
		$scope.update = function() {
			$scope.action = 'editGuide';
			$scope.guide.categories = $scope.multipleDemo.selectedCats;
			var guide = $scope.guide;
			guide.$update(function() {
				$location.path('guides');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Guides
		$scope.find = function() {
			$scope.guides = Guides.query();
		};

		// Find existing Guide
		$scope.findOne = function() {
			$scope.action = 'editGuide';
			$scope.guide = Guides.get({
				guideId: $stateParams.guideId
			});
			//$scope.formData = $scope.guide;
		};

		$scope.layoutMode = 0;
		$scope.list = [];
		//$scope.currentAnimation;
		$scope.isShow = true;
		$scope.animations = ['toggle', 'rotate-in'];

		$scope.addItem = function (animation) {
			$scope.animation = animation;
			//for (var i = 0; i < 6; i++) {
			//	$timeout(function () {
			//		$scope.list.push({ title : 'item' });
			//	}, 100 * i);
			//};
		};

		$scope.removeItem = function (item) {
			var index = $scope.list.indexOf(item);
			$scope.list.remove(index);
		};

		$scope.cleanList = function () {
			//for (var i = 0; i < $scope.list.length; i++) {
			//	$timeout(function () {
			//		$scope.list.pop();
			//	}, 100 * i);
			//};
		};

		// Play all animation, it will auto clean item list.
		$scope.autoPlayAnimation = function (index) {
			var animation = $scope.animations[index];
			if (animation) {
				$scope.currentAnimation = animation;
				$scope.addItem(animation);
				$timeout(function () {
					$scope.cleanList();
				}, 1000);
				$timeout(function () {
					$scope.autoPlayAnimation(++index);
				}, 2000);
			}
			else {
				$scope.currentAnimation = $scope.animations[1];
			}
		};

		$scope.switchGridMode = function () {
			$scope.layoutMode = 0;
		};

		$scope.switchListMode = function () {
			$scope.layoutMode = 1;
		};

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		};

		$anchorScroll();
	}
]);
