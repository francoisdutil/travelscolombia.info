'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		errorHandler = require('./errors.server.controller'),
		Guide = mongoose.model('Guide'),
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
				message = 'Guide already exists';
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
 * Create a Guide
 */
exports.create = function(req, res) {
	var guide = new Guide(req.body);
	guide.user = req.user;

	guide.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(guide);
		}
	});
};

/**
 * Show the current Guide
 */
exports.read = function(req, res) {
	res.jsonp(req.guide);
};

/**
 * Update a Guide
 */
exports.update = function(req, res) {
	var guide = req.guide ;

	guide = _.extend(guide , req.body);

	guide.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(guide);
		}
	});
};

/**
 * Delete an Guide
 */
exports.delete = function(req, res) {
	var guide = req.guide ;

	guide.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(guide);
		}
	});
};

/**
 * List of Guides
 */
exports.list = function(req, res) { Guide.find().sort('-created').populate('user', 'displayName').exec(function(err, guides) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(guides);
		}
	});
};

/**
 * Guide middleware
 */
exports.guideByID = function(req, res, next, id) { Guide.findById(id).populate('user', 'displayName').exec(function(err, guide) {
		if (err) return next(err);
		if (! guide) return next(new Error('Failed to load Guide ' + id));
		req.guide = guide ;
		next();
	});
};

/**
 * Guide authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.guide.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};
