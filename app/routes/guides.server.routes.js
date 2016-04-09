'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var guides = require('../../app/controllers/guides.server.controller');

	// Guides Routes
	app.route('/guides')
		.get(guides.list)
		.post(users.requiresLogin, guides.create);

	app.route('/guides/:guideId')
		.get(guides.read)
		.put(users.requiresLogin, guides.hasAuthorization, guides.update)
		.delete(users.requiresLogin, guides.hasAuthorization, guides.delete);

	// Finish by binding the Guide middleware
	app.param('guideId', guides.guideByID);
};
