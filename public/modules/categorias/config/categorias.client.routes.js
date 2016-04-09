'use strict';

//Setting up route
angular.module('categorias').config(['$stateProvider',
	function($stateProvider) {
		// Categorias state routing
		$stateProvider.
		state('listCategorias', {
			url: '/categorias',
			templateUrl: 'modules/categorias/views/list-categorias.client.view.html'
		}).
		state('createCategoria', {
			url: '/categorias/create',
			templateUrl: 'modules/categorias/views/create-categoria.client.view.html',
			controller: 'CategoriasController',
		}).
		state('viewCategoria', {
			url: '/categorias/:categoriaId',
			templateUrl: 'modules/categorias/views/view-categoria.client.view.html'
		}).
		state('editCategoria', {
			url: '/categorias/:categoriaId/edit',
			templateUrl: 'modules/categorias/views/edit-categoria.client.view.html'
		}).

		// nested states
		// each of these sections will have their own view
		// url will be nested (/createCategoria/info)
		state('createCategoria.info', {
			url: '/info',
			templateUrl: 'modules/categorias/views/form-info.client.view.html'
		}).
		// url will be nested (/createCategoria/content)
		state('createCategoria.content', {
			url: '/content',
			templateUrl: 'modules/categorias/views/form-content.client.view.html'
		}).
		// url will be nested (/createCategoria/layout)
		state('createCategoria.layout', {
			url: '/layout',
			templateUrl: 'modules/categorias/views/form-layout.client.view.html'
		}).
		// url will be nested (/createCategoria/map)
		state('createCategoria.map', {
			url: '/map',
			templateUrl: 'modules/categorias/views/form-map.client.view.html'
		}).
		// url will be nested (/createCategoria/ratings)
		state('createCategoria.ratings', {
			url: '/ratings',
			templateUrl: 'modules/categorias/views/form-ratings.client.view.html'
		}).
		// url will be nested (/createCategoria/preview)
		state('createCategoria.preview', {
			url: '/preview',
			templateUrl: 'modules/categorias/views/form-preview.client.view.html'
		}).
		// url will be nested (/editCategoria/info)
		state('editCategoria.info', {
			url: '/info',
			templateUrl: 'modules/categorias/views/form-info.client.view.html'
		}).
		// url will be nested (/editCategoria/content)
		state('editCategoria.content', {
			url: '/content',
			templateUrl: 'modules/categorias/views/form-content.client.view.html'
		}).
		// url will be nested (/editCategoria/layout)
		state('editCategoria.layout', {
			url: '/layout',
			templateUrl: 'modules/categorias/views/form-layout.client.view.html'
		}).
		// url will be nested (/editCategoria/map)
		state('editCategoria.map', {
			url: '/map',
			templateUrl: 'modules/categorias/views/form-map.client.view.html'
		}).
		// url will be nested (/editCategoria/ratings)
		state('editCategoria.ratings', {
			url: '/ratings',
			templateUrl: 'modules/categorias/views/form-ratings.client.view.html'
		}).
		// url will be nested (/editCategoria/preview)
		state('editCategoria.preview', {
			url: '/preview',
			templateUrl: 'modules/categorias/views/form-preview.client.view.html'
		});
	}
]);
