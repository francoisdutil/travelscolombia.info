'use strict';

// Configuring the Articles module
angular.module('schedules').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Itinerarios', 'schedules', 'dropdown', '/schedules(/create)?');
		Menus.addSubMenuItem('topbar', 'schedules', 'Lista de los Itinerarios', 'schedules');
		Menus.addSubMenuItem('topbar', 'schedules', 'New Itinerario', 'schedules/create');
	}
]);
