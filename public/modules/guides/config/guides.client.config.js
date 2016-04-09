'use strict';

// Configuring the Guides module
angular.module('guides').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Guias', 'guides', 'dropdown', '/guides(/create)?');
		Menus.addSubMenuItem('topbar', 'guides', 'Lista de los guias', 'guides');
		Menus.addSubMenuItem('topbar', 'guides', 'Crear un guia', 'guides/create');
	}
]);

angular.module('guides').config(function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
});
