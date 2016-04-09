'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Booking = mongoose.model('Booking'),
	_ = require('lodash'),
	config = require('../../config/config'),
	nodemailer = require('nodemailer'),
	async = require('async'),
	crypto = require('crypto');

/**
 * Create a Booking
 */
exports.create = function(req, res) {
	var booking = new Booking(req.body);
	booking.user = req.user;

	booking.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(booking);
		}
	});
};

/**
 * Show the current Booking
 */
exports.read = function(req, res) {
	res.jsonp(req.booking);
};

/**
 * Update a Booking
 */
exports.update = function(req, res) {
	var booking = req.booking ;

	booking = _.extend(booking , req.body);

	booking.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(booking);
		}
	});
};

/**
 * Delete an Booking
 */
exports.delete = function(req, res) {
	var booking = req.booking ;

	booking.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(booking);
		}
	});
};

/**
 * List of Bookings
 */
exports.list = function(req, res) { Booking.find().sort('-created').populate('user', 'displayName').exec(function(err, bookings) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bookings);
		}
	});
};

/**
 * Booking middleware
 */
exports.bookingByID = function(req, res, next, id) { Booking.findById(id).populate('user', 'displayName').exec(function(err, booking) {
		if (err) return next(err);
		if (! booking) return next(new Error('Failed to load Booking ' + id));
		req.booking = booking ;
		next();
	});
};

/**
 * Booking authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.booking.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};

/**
 * Reset password POST from email token
 */
exports.emailBooking = function(req, res, next) {
	// Init Variables
	var bookingDetails = req.body;
	var message = null;

	async.waterfall([
		function(user, done) {
			res.render('templates/' + user.prefLang + '/booking-confirmed-email', {
				name: user.firstName,
				appName: config.app.title
			}, function(err, emailHTML) {
				done(err, emailHTML, user);
			});
		},
		// If valid email, send reset email using service
		function(emailHTML, user, done) {
			var smtpTransport = nodemailer.createTransport(config.mailer.options);
			var mailOptions = {
				to: user.email,
				from: config.mailer.from,
				subject: config.app.title,
				html: emailHTML
			};

			smtpTransport.sendMail(mailOptions, function(err) {
				done(err, 'done');
			});
		}
	], function(err) {
		if (err) return next(err);
	});
};
