'use strict';

// Configuring the Articles module
angular.module('bookings').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Reserva', 'bookings', 'dropdown', '/bookings(/create)?');
		Menus.addSubMenuItem('topbar', 'bookings', 'Lista de las reservas', 'bookings');
		Menus.addSubMenuItem('topbar', 'bookings', 'Añadir una reserva', 'bookings/create');
	}
]);
