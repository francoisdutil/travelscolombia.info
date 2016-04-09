'use strict';

//Setting up route
angular.module('bookings').config(['$stateProvider',
	function($stateProvider) {
		// Bookings state routing
		$stateProvider.
		state('listBookings', {
			url: '/bookings',
			templateUrl: 'modules/bookings/views/list-bookings.client.view.html'
		}).
		state('createBooking', {
			url: '/bookings/create',
			templateUrl: 'modules/bookings/views/create-booking.client.view.html',
			controller: 'BookingsController',
		}).
		state('viewBooking', {
			url: '/bookings/:bookingId',
			templateUrl: 'modules/bookings/views/view-booking.client.view.html'
		}).
		state('editBooking', {
			url: '/bookings/:bookingId/edit',
			templateUrl: 'modules/bookings/views/edit-booking.client.view.html'
		}).

		// nested states
		// each of these sections will have their own view
		// url will be nested (/createBooking/step1)
		state('createBooking.step1', {
			url: '/step1',
			templateUrl: 'modules/bookings/views/form-step1.client.view.html'
		}).
		// url will be nested (/createBooking/step2)
		state('createBooking.step2', {
			url: '/step2',
			templateUrl: 'modules/bookings/views/form-step2.client.view.html'
		}).
		// url will be nested (/createBooking/step3)
		state('createBooking.step3', {
			url: '/step3',
			templateUrl: 'modules/bookings/views/form-step3.client.view.html'
		}).
		// url will be nested (/editBooking/step1)
		state('editBooking.step1', {
			url: '/step1',
			templateUrl: 'modules/bookings/views/form-step1.client.view.html'
		}).
		// url will be nested (/editBooking/step2)
		state('editBooking.step2', {
			url: '/step2',
			templateUrl: 'modules/bookings/views/form-step2.client.view.html'
		}).
		// url will be nested (/editBooking/step3)
		state('editBooking.step3', {
			url: '/step3',
			templateUrl: 'modules/bookings/views/form-step3.client.view.html'
		});
	}
]);
