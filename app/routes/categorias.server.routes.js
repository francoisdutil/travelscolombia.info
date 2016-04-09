'use strict';

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users.server.controller'),
	categorias = require('../../app/controllers/categorias.server.controller');

module.exports = function(app) {
	// Categorias Routes
	app.route('/categorias')
		.get(categorias.list)
		.post(users.requiresLogin, categorias.create);

	app.route('/categorias/:categoriaId')
		.get(categorias.read)
		.put(users.requiresLogin, categorias.hasAuthorization, categorias.update)
		.delete(users.requiresLogin, categorias.hasAuthorization, categorias.delete);

	// Finish by binding the categoria middleware
	app.param('categoriaId', categorias.categoriaByID);
};
