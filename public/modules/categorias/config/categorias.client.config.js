'use strict';

// Configuring the Categorias module
angular.module('categorias').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Categoria', 'categorias', 'dropdown', '/categorias(/create)?');
		Menus.addSubMenuItem('topbar', 'categorias', 'Lista de las categorias', 'categorias');
		Menus.addSubMenuItem('topbar', 'categorias', 'Añadir una categoria', 'categorias/create');
	}
]);
