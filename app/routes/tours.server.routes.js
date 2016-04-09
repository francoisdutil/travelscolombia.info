'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var tours = require('../../app/controllers/tours.server.controller');

	// Services Routes
	app.route('/tours')
		.get(tours.list)
		.post(users.requiresLogin, tours.create);

	app.route('/tours/:tourId')
		.get(tours.read)
		.put(users.requiresLogin, tours.update)
		.delete(users.requiresLogin, tours.delete);

	// Finish by binding the Service middleware
	app.param('tourId', tours.tourByID);
};
