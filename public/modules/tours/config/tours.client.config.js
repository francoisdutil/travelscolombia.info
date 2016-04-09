'use strict';

// Configuring the Tours module
angular.module('tours').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Tours', 'tours', 'dropdown', '/tours(/create)?');
		Menus.addSubMenuItem('topbar', 'tours', 'Lista de los tours', 'tours');
		Menus.addSubMenuItem('topbar', 'tours', 'Crear un tour', 'tours/create');
	}
]);

angular.module('tours').config(function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
});
