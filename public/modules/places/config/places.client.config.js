'use strict';

// Configuring the Articles module
angular.module('places').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Sitios', 'places', 'dropdown', '/places(/create)?');
		Menus.addSubMenuItem('topbar', 'places', 'Lista de los sitios', 'places');
		Menus.addSubMenuItem('topbar', 'places', 'Nuevo sitio', 'places/create');
	}
]);
