'use strict';

//Setting up route
angular.module('tours').config(['$stateProvider',
	function($stateProvider) {
		// Tours state routing
		$stateProvider.
		state('listTours', {
			url: '/tours',
			templateUrl: 'modules/tours/views/list-tours.client.view.html'
		}).
		state('listTours.list', {
			url: '/tours/list',
			templateUrl: 'modules/tours/views/list-tours.list.client.view.html'
		}).
		state('listTours.grid', {
			url: '/tours/grid',
			templateUrl: 'modules/tours/views/list-tours.grid.client.view.html'
		}).
		state('listTours.maps', {
			url: '/tours/maps',
			templateUrl: 'modules/tours/views/list-tours.maps.client.view.html'
		}).
		state('listTours.print', {
			url: '/tours/print',
			templateUrl: 'modules/tours/views/list-tours.print.client.view.html'
		}).
		state('createTour', {
			url: '/tours/create',
			templateUrl: 'modules/tours/views/create-tour.client.view.html',
			controller: 'ToursController',
		}).
    // nested states
    // each of these sections will have their own view
    // url will be nested (/createTour/info)
    state('createTour.info', {
        url: '/info',
        templateUrl: 'modules/tours/views/form-info.html'
    }).

    // url will be /createTour/detail
    state('createTour.detail', {
        url: '/detail',
        templateUrl: 'modules/tours/views/form-detail.html'
    }).

		// url will be /createTour/included
		state('createTour.included', {
				url: '/included',
				templateUrl: 'modules/tours/views/form-included.html'
		}).

		// url will be /form/itinerary
		state('createTour.itinerary', {
				url: '/itinerary',
				templateUrl: 'modules/tours/views/form-itinerary.html'
		}).

		// url will be /createTour/tips
		state('createTour.tips', {
				url: '/tips',
				templateUrl: 'modules/tours/views/form-tips.html'
		}).

    // url will be /createTour/layout
    state('createTour.layout', {
        url: '/layout',
        templateUrl: 'modules/tours/views/form-layout.html'
    }).

		// url will be /createTour/layout
		state('createTour.moreinfo', {
				url: '/moreinfo',
				templateUrl: 'modules/tours/views/form-moreinfo.html'
		}).

		// url will be /createTour/layout
		state('createTour.content', {
				url: '/content',
				templateUrl: 'modules/tours/views/form-content.html'
		}).

		// url will be /createTour/layout
		state('createTour.ratings', {
				url: '/ratings',
				templateUrl: 'modules/tours/views/form-ratings.html'
		}).

		// url will be /createTour/seo
		state('createTour.seo', {
				url: '/seo',
				templateUrl: 'modules/tours/views/form-seo.html'
		}).

		state('viewTour', {
			url: '/tours/:tourId',
			templateUrl: 'modules/tours/views/view-tour.client.view.html'
		}).
		state('editTour', {
			url: '/tours/:tourId/edit',
			templateUrl: 'modules/tours/views/edit-tour.client.view.html',
			controller: 'ToursController'
		}).
		// nested states
		// each of these sections will have their own view
		// url will be nested (/createTour/info)
		state('editTour.info', {
				url: '/info',
				templateUrl: 'modules/tours/views/form-info.html'
		}).

		// url will be /createTour/detail
		state('editTour.detail', {
				url: '/detail',
				templateUrl: 'modules/tours/views/form-detail.html'
		}).

		// url will be /createTour/included
		state('editTour.included', {
				url: '/included',
				templateUrl: 'modules/tours/views/form-included.html'
		}).

		// url will be /form/itinerary
		state('editTour.itinerary', {
				url: '/itinerary',
				templateUrl: 'modules/tours/views/form-itinerary.html'
		}).

		// url will be /createTour/tips
		state('editTour.tips', {
				url: '/tips',
				templateUrl: 'modules/tours/views/form-tips.html'
		}).

		// url will be /createTour/layout
		state('editTour.layout', {
				url: '/layout',
				templateUrl: 'modules/tours/views/form-layout.html'
		}).

		// url will be /createTour/moreinfo
		state('editTour.moreinfo', {
				url: '/moreinfo',
				templateUrl: 'modules/tours/views/form-moreinfo.html'
		}).

		// url will be /createTour/content
		state('editTour.content', {
				url: '/content',
				templateUrl: 'modules/tours/views/form-content.html'
		}).

		// url will be /createTour/ratings
		state('editTour.ratings', {
				url: '/ratings',
				templateUrl: 'modules/tours/views/form-ratings.html'
		}).

		// url will be /createTour/seo
		state('editTour.seo', {
				url: '/seo',
				templateUrl: 'modules/tours/views/form-seo.html'
		});

    // Redirect to home view when route not found
		//$urlRouterProvider.otherwise('/#!/');
	}
]);
