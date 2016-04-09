'use strict';

// Categorias controller
angular.module('categorias').controller('CategoriasController', ['$scope', '$stateParams', '$location', 'Authentication', 'Categorias',
	function($scope, $stateParams, $location, Authentication, Categorias ) {
		$scope.authentication = Authentication;

		$scope.preflang = $scope.authentication.user.prefLang;
		//$scope.sortorder = 'name';

		// ui-select test
		$scope.disabled = undefined;

		$scope.enable = function() {
			$scope.disabled = false;
		};

		$scope.disable = function() {
			$scope.disabled = true;
		};

		$scope.clear = function() {
			$scope.categoria.selected = undefined;
		};

		$scope.intro = true;
		$scope.formData = {};
		$scope.categoria = {};

		// Variable for Ratings
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

		// List Categories
		$scope.listCategories = function() {
			$scope.categorias = Categorias.query();
		};

		$scope.action = 'createCategoria';
		// Create new Categoria
		$scope.create = function() {
			// Create new Categoria object
			var categoria = new Categorias ({
				translateId: $scope.formData.translateId,
				mapId: $scope.formData.mapId,
				clusterGeoLocation: $scope.formData.clusterGeoLocation,
				content: $scope.formData.videoUrl,
				imageUrl: $scope.formData.ImageUrl,
				color: $scope.formData.color,
				icon: $scope.formData.icon,
				svg: $scope.formData.svg,
				class: $scope.formData.class,
				material: $scope.formData.material,
				active: $scope.formData.active,
				countbookings: $scope.formData.countbookings,
				countlikes: $scope.formData.countlikes,
				countfollowers: $scope.formData.countfollowers,
				countrecommended: $scope.formData.countrecommended,
				lastCountDate: $scope.formData.lastCountDate,
				ratingAverage: $scope.formData.ratingAverage,
				urlmoreinfo: $scope.formData.urlmoreinfo,
				urltripadvisor: $scope.formData.tripadvisor,
				urlarticle: $scope.formData.urlarticle,
				urlpdf: $scope.formData.urlpdf
			});
			// Redirect after save
			categoria.$save(function(response) {
				$location.path('categorias');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
			// Clear form fields
			$scope.formData.translateId = '';
			$scope.formData.mapId = '';
			$scope.formData.clusterGeoLocation = '';
			$scope.formData.videoUrl = '';
			$scope.formData.ImageUrl = '';
			$scope.formData.color = '';
			$scope.formData.icon = '';
			$scope.formData.svg = '';
			$scope.formData.class = '';
			$scope.formData.material = '';
			$scope.formData.active = '';
			$scope.formData.countbookings = '';
			$scope.formData.countlikes = '';
			$scope.formData.countfollowers= '',
			$scope.formData.countrecommended= '';
			$scope.formData.lastCountDate = '';
			$scope.formData.ratingAverage = 4;
			$scope.formData.urlmoreinfo = '';
			$scope.formData.urltripadvisor = '';
			$scope.formData.urlarticle = '';
			$scope.formData.urlpdf = '';

		};

		// Remove existing Categoria
		$scope.remove = function( categoria ) {
			if ( categoria ) { categoria.$remove();

				for (var i in $scope.categorias ) {
					if ($scope.categorias [i] === categoria ) {
						$scope.categorias.splice(i, 1);
					}
				}
			} else {
				$scope.categoria.$remove(function() {
					$location.path('categorias');
				});
			}
		};

		// Update existing Categoria
		$scope.update = function() {
			var categoria = $scope.formData;
			$scope.action = 'editCategoria';
			categoria.$update(function() {
				$location.path('categorias');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Categorias
		$scope.find = function() {
			$scope.categorias = Categorias.query();
		};

		// Find existing Categoria
		$scope.findOne = function() {
			$scope.action = 'editCategoria';
			$scope.categoria = Categorias.get({
				categoriaId: $stateParams.categoriaId
			});
			$scope.formData = $scope.categoria;
			$scope.formData.translateId = $scope.categoria.translateId;
			console.log('$scope.categoria: ' + $scope.categoria.translateId);
		};
	}
]);
