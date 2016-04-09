'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('./errors.server.controller'),
	config = require('../../config/config'),
	nodemailer = require('nodemailer'),
	async = require('async');

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

/**
* Send email from contact form
*/
exports.process = function process(req, res) {
  //handle request here
};


exports.sendEmail = function(req, res, next) {
	// Init Variables
	async.waterfall([

		function(done) {
			res.render('templates/en/reset-password-confirm-email', {
				name: req.name,
				appName: config.app.title
			}, function(emailHTML) {
				done(emailHTML);
			});
		},
		// If valid email, send reset email using service
		function(emailHTML, done) {
			var smtpTransport = nodemailer.createTransport(config.mailer.options);
			var mailOptions = {
				to: 'francois.dutil@gmail.com',
				from: req.email,
				subject: 'Message from MTC contact form',
				//html: req.message
				text: req.message
			};

			smtpTransport.sendMail(mailOptions, function(error, info) {
				if(error){
        	console.log(error);
		    }else{
		      console.log('Message sent: ' + info.response);
		    }
			});
		}
	]);
};
