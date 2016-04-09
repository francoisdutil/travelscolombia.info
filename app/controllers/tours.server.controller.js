'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
		errorHandler = require('./errors.server.controller'),
		Tour = mongoose.model('Tour'),
		_ = require('lodash');

/**
* Get the error message from error object
*/
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Tour already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
* Create a Tour
*/
exports.create = function(req, res) {
	var tour = new Tour(req.body);
	tour.user = req.user;

	tour.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tour);
		}
	});
};

/**
* Show the current Tour
*/
exports.read = function(req, res) {
	res.jsonp(req.tour);
};

/**
* Update a Tour
*/
exports.update = function(req, res) {
	var tour = req.tour ;

	tour = _.extend(tour , req.body);

	tour.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tour);
		}
	});
};

/**
* Delete an Tour
*/
exports.delete = function(req, res) {
	var tour = req.tour ;

	tour.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tour);
		}
	});
};

/**
* List of Tours
*/
exports.list = function(req, res) { Tour.find().sort('-created').populate('user', 'displayName').exec(function(err, tours) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(tours);
		}
	});
};


/**
* Tour middleware
*/
exports.tourByID = function(req, res, next, id) { Tour.findById(id).populate('user', 'displayName').exec(function(err, tour) {
		if (err) return next(err);
		if (! tour) return next(new Error('Failed to load Tour ' + id));
		req.tour = tour ;
		next();
	});
};

/**
* Tour authorization middleware
*/
exports.hasAuthorization = function(req, res, next) {
	if (req.tour.user.id !== req.user.id) {
		//return res.send(403, 'User is not authorized');
		return res.status(403).send('User is not authorized');
	}
	next();
};
