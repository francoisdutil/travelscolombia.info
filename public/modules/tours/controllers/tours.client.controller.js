'use strict';

// Tours controller
angular.module('tours').controller('ToursController', ['$scope', '$rootScope', '$modal', '$timeout', '$translate', '$filter', '$http', '$stateParams', '$location', '$anchorScroll', 'Authentication', 'Tours', 'Guides', 'Categorias', 'ngDialog', '$mdBottomSheet',
	function($scope, $rootScope, $modal, $timeout, $translate, $filter, $http, $stateParams, $location, $anchorScroll, Authentication, Tours, Guides, Categorias, ngDialog, $mdBottomSheet) {
		$scope.authentication = Authentication;
		$scope.preflang = $translate.use();
		$scope.intro = true;
		$scope.formData = {};
		$scope.person = {};
		$scope.categoria = {};
		$scope.image = null;
		$scope.isCollapsed = true;
		// animations
		$scope.isShow = true;
		$scope.alert = '';

		$scope.rate = 4;
		$scope.max = 5;
		$scope.isReadonly = false;

		$scope.hoveringOver = function(value) {
			$scope.overStar = value;
			$scope.percent = 100 * (value / $scope.max);
		};

		$scope.ratingStates = [
		{stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
		{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
		{stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
		{stateOn: 'glyphicon-heart'},
		{stateOff: 'glyphicon-off'}
		];

		// ui-select test
		$scope.disabled = undefined;

		$scope.enable = function() {
			$scope.disabled = false;
		};

		$scope.disable = function() {
			$scope.disabled = true;
		};

		$scope.clear = function() {
			$scope.seltour.selected = undefined;
		};

		$scope.selectedTourCategory = [];
		$scope.selectedTourDiffLevel = [];
		$scope.selectedTourDuration = [];
		$scope.categoryList = [{
				id: 'ciudadPerdida',
				name: 'ciudadPerdida'
		}, {
				id: 'parqueSierraNevada',
				name: 'parqueSierraNevada'
		},{
				id: 'parqueTayrona',
				name: 'parqueTayrona'
		},{
				id: 'unDiaExcursion',
				name: 'unDiaExcursion'
		},{
				id: 'upcomingEvent',
				name: 'upcomingEvent'
		},{
				id: 'peninsulaGuajira',
				name: 'peninsulaGuajira'
		},{
				id: 'xTremo',
				name: 'xTremo'
		},{
				id: 'toursEcoTurismo',
				name: 'toursEcoTurismo'
		},{
			id: 'toursBicicleta',
			name: 'toursBicicleta'
		}];

		$scope.diffLevelList = [
		{
			translateId: 'DifficultyLevel1',
			name: 'DifficultyLevel1'
		},
		{
			translateId: 'DifficultyLevel2',
			name: 'DifficultyLevel2'
		},
		{
			translateId: 'DifficultyLevel3',
			name: 'DifficultyLevel3'
		},
		{
			translateId: 'DifficultyLevel4',
			name: 'DifficultyLevel4'
		}];

		$scope.setSelectedTour = function () {
				var id = this.category.id;
				if (_.contains($scope.selectedTourCategory, id)) {
						$scope.selectedTourCategory = _.without($scope.selectedTourCategory, id);
				} else {
						$scope.selectedTourCategory.push(id);
				}
				$scope.category = this.category.id;
				return false;
		};

		$scope.setSelectedTourDiffLevel = function () {
			var translateId = this.diffLevel.translateId;

			if (_.contains($scope.selectedTourDiffLevel, translateId)) {
				$scope.selectedTourDiffLevel = _.without($scope.selectedTourDiffLevel, translateId);
			} else {
				$scope.selectedTourDiffLevel.push(translateId);
			}
			$scope.diffLevel = this.diffLevel.translateId;
			return false;
		};

		$scope.setTourDuration = function (tours, values) {
				var floor = values.low;
				//console.log(values);
				return false;
		};

		$scope.isChecked = function (id) {
				if (_.contains($scope.selectedTourCategory, id)) {
						return 'glyphicon glyphicon-ok pull-right';
				}
				return false;
		};

		$scope.checkAll = function () {
				$scope.selectedTourCategory = _.pluck($scope.categoryList, 'id');
		};

		$scope.isCheckedDiffLevel = function (translateId) {
			if (_.contains($scope.selectedTourDiffLevel, translateId)) {
				return 'glyphicon glyphicon-ok pull-right';
			}
			return false;
		};

		$scope.checkAllDiffLevels = function () {
			$scope.selectedTourDiffLevel = _.pluck($scope.difflevelList, 'translateId');
		};

		$scope.clearAllFilters = function () {
			$scope.selectedTourCategory = [];
			$scope.selectedTourDiffLevel = [];
			$scope.values = {
				low : 1,
				high: 6
			};
		};

		$scope.seltour = {};
		$scope.listtours = function() {
			$scope.alltours = Tours.query();
		};

		$scope.images = [{
			'title': 'Ciudad Perdida 1',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/0.jpg'
		},
		{
			'title': 'Ciudad Perdida 2',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/1.jpg'
		},
		{
			'title': 'Ciudad Perdida 3',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/2.jpg'
		},
		{
			'title': 'Ciudad Perdida 4',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/3.jpg'
		},
		{
			'title': 'Ciudad Perdida 5',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/4.jpg'
		},
		{
			'title': 'Ciudad Perdida 6',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/5.jpg'
		},
		{
			'title': 'Ciudad Perdida 7',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/6.jpg'
		},
		{
			'title': 'Ciudad Perdida 8',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/7.jpg'
		},
		{
			'title': 'Ciudad Perdida 9',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/8.jpg'
		},
		{
			'title': 'Ciudad Perdida 10',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/9.jpg'
		},
		{
			'title': 'Ciudad Perdida 11',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/10.jpg'
		},
		{
			'title': 'Ciudad Perdida 12',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/11.jpg'
		},
		{
			'title': 'Ciudad Perdida 13',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/12.jpg'
		},
		{
			'title': 'Sierra Nevada 1',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/0.jpg'
		},
		{
			'title': 'Sierra Nevada 2',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/1.jpg'
		},
		{
			'title': 'Sierra Nevada 3',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/2.jpg'
		},
		{
			'title': 'Sierra Nevada 4',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/3.jpg'
		},
		{
			'title': 'Sierra Nevada 5',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/4.jpg'
		},
		{
			'title': 'Sierra Nevada 6',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/5.jpg'
		},
		{
			'title': 'Sierra Nevada 7',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/6.jpg'
		},
		{
			'title': 'Sierra Nevada 8',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/7.jpg'
		},
		{
			'title': 'Sierra Nevada 9',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/8.jpg'
		},
		{
			'title': 'Sierra Nevada 10',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/9.jpg'
		},
		{
			'title': 'Sierra Nevada 11',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/10.jpg'
		},
		{
			'title': 'Sierra Nevada 12',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/11.jpg'
		},
		{
			'title': 'Tayrona 1',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/0.jpg'
		},
		{
			'title': 'Tayrona 2',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/1.jpg'
		},
		{
			'title': 'Tayrona 3',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/2.jpg'
		},
		{
			'title': 'Tayrona 4',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/3.jpg'
		},
		{
			'title': 'Tayrona 5',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/4.jpg'
		},
		{
			'title': 'Tayrona 6',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/5.jpg'
		},
		{
			'title': 'Tayrona 7',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/6.jpg'
		},
		{
			'title': 'Tayrona 8',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/7.jpg'
		},
		{
			'title': 'Tayrona 9',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/8.jpg'
		},
		{
			'title': 'Tayrona 10',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/9.jpg'
		},
		{
			'title': 'Tayrona 11',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/10.jpg'
		},
		{
			'title': 'Tayrona 12',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/11.jpg'
		},
		{
			'title': 'Tayrona 13',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/12.jpg'
		},
		{
			'title': 'Tayrona 14',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/13.jpg'
		},
		{
			'title': 'Playa 1',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/0.jpg'
		},
		{
			'title': 'Playa 2',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/1.jpg'
		},
		{
			'title': 'Playa 3',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/2.jpg'
		},
		{
			'title': 'Playa 4',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/3.jpg'
		},
		{
			'title': 'Playa 5',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/4.jpg'
		},
		{
			'title': 'Playa 6',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/5.jpg'
		},
		{
			'title': 'Playa 7',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/6.jpg'
		},
		{
			'title': 'Playa 8',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/7.jpg'
		},
		{
			'title': 'Playa 9',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/8.jpg'
		},
		{
			'title': 'Playa 10',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/9.jpg'
		},
		{
			'title': 'Santa Marta 1',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/0.jpg'
		},
		{
			'title': 'Santa Marta 2',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/1.jpg'
		},
		{
			'title': 'Santa Marta 3',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/2.jpg'
		},
		{
			'title': 'Santa Marta 4',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/3.jpg'
		},
		{
			'title': 'Santa Marta 5',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/4.jpg'
		},
		{
			'title': 'Santa Marta 6',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/5.jpg'
		},
		{
			'title': 'Santa Marta 7',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/6.jpg'
		},
		{
			'title': 'Santa Marta 8',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/7.jpg'
		},
		{
			'title': 'Santa Marta 9',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/8.jpg'
		},
		{
			'title': 'Santa Marta 10',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/9.jpg'
		},
		{
			'title': 'Santa Marta 11',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/10.jpg'
		},
		{
			'title': 'Santa Marta 12',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/11.jpg'
		},
		{
			'title': 'Santa Marta 13',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/12.jpg'
		},
		{
			'title': 'Santa Marta 14',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/13.jpg'
		},
		{
			'title': 'Santa Marta 15',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/14.jpg'
		},
		{
			'title': 'Santa Marta 16',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/15.jpg'
		},
		{
			'title': 'Santa Marta 17',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/16.jpg'
		},
		{
			'title': 'Santa Marta 18',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/17.jpg'
		},
		{
			'title': 'Santa Marta 19',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/18.jpg'
		},
		{
			'title': 'Santa Marta 20',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/19.jpg'
		},
		{
			'title': 'Santa Marta 21',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/20.jpg'
		},
		{
			'title': 'Santa Marta 22',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/21.jpg'
		},
		{
			'title': 'Santa Marta 23',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/23.jpg'
		},
		{
			'title': 'Santa Marta 9',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/22.jpg'
		},
		{
			'title': 'Guajira 1',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/0.jpg'
		},
		{
			'title': 'Guajira 2',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/1.jpg'
		},
		{
			'title': 'Guajira 3',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/2.jpg'
		},
		{
			'title': 'Guajira 4',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/3.jpg'
		},
		{
			'title': 'Guajira 5',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/4.jpg'
		},
		{
			'title': 'Guajira 6',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/5.jpg'
		},
		{
			'title': 'Guajira 7',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/6.jpg'
		},
		{
			'title': 'Guajira 8',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/7.jpg'
		},
		{
			'title': 'Guajira 9',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/8.jpg'
		},
		{
			'title': 'Guajira 10',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/9.jpg'
		},
		{
			'title': 'Guajira 11',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/10.jpg'
		},
		{
			'title': 'Guajira 12',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/11.jpg'
		},
		{
			'title': 'Guajira 13',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/12.jpg'
		},
		{
			'title': 'Guajira 14',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/13.jpg'
		},
		{
			'title': 'Guajira 15',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/14.jpg'
		},
		{
			'title': 'Guajira 16',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/15.jpg'
		},
		{
			'title': 'Sports 1',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/0.jpg'
		},
		{
			'title': 'Sports 2',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/1.jpg'
		},
		{
			'title': 'Sports 3',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/2.jpg'
		},
		{
			'title': 'Sports 4',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/3.jpg'
		},
		{
			'title': 'Sports 5',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/4.jpg'
		},
		{
			'title': 'Sports 6',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/5.jpg'
		},
		{
			'title': 'Sports 7',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/6.jpg'
		},
		{
			'title': 'Sports 8',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/7.jpg'
		},
		{
			'title': 'Sports 9',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/8.jpg'
		},
		{
			'title': 'Sports 10',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/9.jpg'
		},
		{
			'title': 'EcoTourism 1',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/0.jpg'
		},
		{
			'title': 'EcoTourism 2',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/1.jpg'
		},
		{
			'title': 'EcoTourism 3',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/2.jpg'
		},
		{
			'title': 'EcoTourism 4',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/3.jpg'
		},
		{
			'title': 'EcoTourism 5',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/4.jpg'
		},
		{
			'title': 'EcoTourism 6',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/5.jpg'
		},
		{
			'title': 'EcoTourism 7',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/6.jpg'
		},
		{
			'title': 'EcoTourism 8',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/7.jpg'
		}];

		$scope.selectedType = $scope.images[0].title;
		//$scope.selectedUrl = $scope.images[0].url;

		// begin slider logic

		$scope.scopes = [];
		$scope.value = 1;
		$scope.values = {
			low : 1,
			high: 6
		};
		$scope.floor = 1;
		$scope.ceiling = 6;
		$scope.step = 1;
		$scope.precision = 0;
		$scope.buffer = 1;
		$scope.stickiness = 2;
		$scope.sliderWidth = '100%';

		$scope.sliderDuration = function() {
			$scope.scopes = [];
			$scope.value = 1;
			$scope.values = {
				low : 1,
				high: 6
			};
			$scope.floorDuration = 1;
			$scope.ceilingDuration = 6;
			$scope.stepDuration = 1;
			$scope.precisionDuration = 0;
			$scope.bufferDuration = 2;
			$scope.stickinessDuration = 3;
			$scope.sliderWidth = '100%';
		};

    $scope.scale = function(value) {
	    return Math.pow(value, 3);
    };
    $scope.inverseScale = function(value) {
	    var sign = value === 0?1:(value / Math.abs(value));
	    return sign * Math.pow(Math.abs(value), 1 / 3);
    };

    $scope.addScope = function() {
	    $scope.scopes.push({
		    values: {
			    low : 1,
			    high: 6
		    },
		    value : 1
	    });
    };

		$scope.translate = function(value) {
			return '$' + value;
		};

		$scope.translateCombined = function(low, high) {
			return $scope.translate(low.toFixed($scope.precision)) + ' *** ' + $scope.translate(high.toFixed($scope.precision));
		};

		$scope.translateRange = function(low, high) {
			return $scope.translate((high - low).toFixed($scope.precision));
		};

		$scope.fireResizeEvent = function() {
			$scope.$broadcast('refreshSlider');
		};
		// end slider logic

		$scope.action = 'createTour';

		$scope.days = {0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true };

		// Create new Tour
		$scope.create = function() {
			$scope.background = $scope.formData.colorbg;
			$scope.color = $scope.formData.colorfont;
			// Create new Tour object
			var tour = new Tours ({
				categorytour: $scope.formData.categorytour,
				tourtitle: $scope.formData.tourtitle,
				subtitle: $scope.formData.subtitle,
				description: $scope.formData.description,
				summary: $scope.formData.summary,
				additionalservices: $scope.formData.additionalservices,
				language: $scope.formData.language,
				duration: $scope.formData.duration,
				difficultylevel: $scope.formData.difficultylevel,
				leadername: $scope.formData.leadername,
				groupminsize: $scope.formData.groupminsize,
				groupmaxsize: $scope.formData.groupmaxsize,
				groupsize: $scope.formData.groupsize,
				sellingprice: $scope.formData.sellingprice,
				percentdeposit: $scope.formData.percentdeposit,
				currency: $scope.formData.currency,
				daysavailable: $scope.days,
				datestart: $scope.formData.startDate,
				dateend: $scope.formData.endDate,
				datesdisabled: $scope.formData.datesdisabled,
				includedinsurance: $scope.formData.includedinsurance,
				includedtransportprivate: $scope.formData.includedtransportprivate,
				includedtransportterrestre: $scope.formData.includedtransportterrestre,
				included4x4: $scope.formData.included4x4,
				includedguide: $scope.formData.includedguide,
				includedboating: $scope.formData.includedboating,
				includedaccommodation: $scope.formData.includedaccommodation,
				includedmeals: $scope.formData.includedmeals,
				includedentrancefee: $scope.formData.includedentrancefee,
				includedgift: $scope.formData.includedgift,
				tips: $scope.formData.tips,
				colorbg: $scope.formData.colorbg,
				colorfont: $scope.formData.colorfont,
				//uploadfolder: $scope.selectedUrl,
				pictureurl: $scope.formData.pictureurl,
				picturecaption: $scope.formData.picturecaption,
				picturecredits: $scope.formData.picturecredits,
				review: $scope.formData.review,
				comments: $scope.formData.comments,
				mapId: $scope.formData.mapId,
				itinerary: $scope.formData.itinerary,
				tags: $scope.formData.tags,
				seokeywords: $scope.formData.seokeywords,
				seodescription: $scope.formData.seodescription,
				urlmoreinfo: $scope.formData.urlmoreinfo,
				urlgoogle: $scope.formData.urlgoogle,
				urlfacebook: $scope.formData.urlfacebook,
				urlyoutube: $scope.formData.urlyoutube,
				urltripadvisor: $scope.formData.tripadvisor,
				urlanalytics: $scope.formData.urlanalytics,
				urlarticle: $scope.formData.urlarticle,
				urlpdf: $scope.formData.urlpdf,
				countbookings: $scope.formData.countbookings,
				countlikes: $scope.formData.countlikes,
				countfollowers: $scope.formData.countfollowers,
				countrecommended: $scope.formData.countrecommended,
				//ratingAverage: scope.formData.ratingAverage;
				locationdeparture: $scope.formData.locationdeparture,
				locationaimv: $scope.formData.locationaimv,
				locationreturn: $scope.formData.locationreturn
			});


			// Redirect after save
			tour.$save(function(response) {
				$location.path('tours');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


		// Remove existing Tour
		$scope.remove = function( tour ) {
			if ( tour ) { tour.$remove();

				for (var i in $scope.tours ) {
					if ($scope.tours [i] === tour ) {
						$scope.tours.splice(i, 1);
					}
				}
			} else {
				$scope.tour.$remove(function() {
					$location.path('tours');
				});
			}
		};
		// Update category field
		$scope.updateCategory = function(name) {
			$scope.formData.categorytour = name;
			//console.log('$scope.formData.categorytour: ' + name);
		};

		// Update guide field
		$scope.updateLeader = function(name) {
			$scope.person = name;
			$scope.formData.leadername = name;
			//$scope.selectedUrl = $scope.images[0].url;
		};
		// Update pictureurl field
		$scope.updatePictureUrl = function(type) {
			$scope.formData.pictureurl = type;
			//$scope.selectedUrl = $scope.images[0].url;
		};

		// Update existing Tour
		$scope.update = function() {

			$scope.action = 'editTour';
			var tour = $scope.formData ;
			tour.$update(function() {
				$location.path('tours');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Tours
		$scope.find = function() {
			$scope.sortorder = 'tourtitle';
			$scope.preflang = $translate.use();
			$scope.tours = Tours.query();
		};

		$scope.findTour = function(tourId) {
				$scope.tour = Tours.get({
				tourId: tourId
			});
		};

		$scope.showTour = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-view.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		$scope.loadMore = function() {
			var last = $scope.tours[$scope.tours.length - 1];
			for(var i = 1; i <= 8; i++) {
				$scope.tours.push(last + i);
			}
		};
		$scope.changeLanguage = function (langKey) {
			$scope.preflang = langKey;
			$translate.use(langKey);
			$scope.formData.language = langKey;
			//console.log('preflang: ' + $scope.preflang);
		};
		$scope.changeDifficultyLevel = function (DiffLevel) {
			$scope.formData.Difficultylevel = DiffLevel;
			//console.log('DiffLevel: ' + DiffLevel);
		};
		// Find existing Tour
		$scope.findOne = function() {
				$scope.action = 'editTour';
				$scope.tour = Tours.get({
				tourId: $stateParams.tourId
			});

			$scope.formData = $scope.tour;
			$scope.formData.leadername = $scope.tour.leadername;
			$scope.colorbg = $scope.formData.colorbg;
			$scope.colorfont = $scope.formData.colorfont;
			$scope.formData.categorytour = $scope.tour.categorytour;
			$scope.categoria.selected = $scope.tour.categorytour;
			//$scope.categoria.selected.name = $scope.tour.categorytour;
			$scope.formData.difficultylevel = $scope.tour.difficultylevel;
			$scope.formData.language = $scope.tour.language;

		};

		$scope.showGridBottomSheet = function($event) {
			$scope.alert = '';
			$mdBottomSheet.show({
				templateUrl: '/modules/tours/views/bottom-sheet-grid-template.html',
				controller: 'GridBottomSheetController',
				targetEvent: $event
			}).then(function(clickedItem) {
				$scope.alert = clickedItem.name + ' clicked!';
			});
		};

		//$anchorScroll();

		// Find next product created
		// db.products.find({_id: {$gt: ObjectId("4fdbaf608b446b0477000142") }}).limit(1)
	}
]);
