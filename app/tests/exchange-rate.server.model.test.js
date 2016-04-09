'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	ExchangeRate = mongoose.model('ExchangeRate');

/**
 * Globals
 */
var user, exchangeRate;

/**
 * Unit tests
 */
describe('Exchange rate Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			exchangeRate = new ExchangeRate({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return exchangeRate.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		ExchangeRate.remove().exec();
		User.remove().exec();

		done();
	});
});