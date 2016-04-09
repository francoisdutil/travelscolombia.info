'use strict';

// Configuring the Guides module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Blog', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'Lista de los articulos', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'Añadir un articulo', 'articles/create');
	}
]);
