'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
	return (this.provider !== 'local' || (password && password.length > 6));
};

/**
 * User Schema
 */
var UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		default: ''
	},
	lastName: {
		type: String,
		trim: true,
		default: ''
	},
	displayName: {
		type: String,
		trim: true
	},
	prefLang: {
		type: String,
		trim: true,
		default: ''
	},
	prefCurrency: {
		type: String,
		trim: true,
		default: 'COP'
	},
	nationality: {
		type: String,
		trim: true,
		default: ''
	},
	documentId: {
		type: String,
		trim: true
	},
	personcontactname: {
		type: String,
		trim: true
	},
	personcontactphone: {
		type: String,
		trim: true
	},
	hotel: {
		type: String,
		trim: true
	},
	isSubscribed: {
		type: Boolean,
		default: true
	},
	email: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'General.ErrorMsg.EmailRequired'],
		match: [/.+\@.+\..+/, 'General.ErrorMsg.EmailRequired']
	},
	username: {
		type: String,
		unique: 'testing error message',
		required: 'General.ErrorMsg.UserNameRequired',
		trim: true
	},
	avatar: {
		type: String,
		trim: true
	},
	logo: {
		type: String,
		trim: true
	},
	busName: {
		type: String,
		trim: true
	},
	slogan: {
		type: String,
		trim: true
	},
	website: {
		type: String,
		trim: true
	},
	password: {
		type: String,
		default: '',
		validate: [validateLocalStrategyPassword, 'General.ErrorMsg.PasswordLonger']
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	providerData: {},
	additionalProvidersData: {},
	roles: {
		type: [{
			type: String,
			enum: ['customer', 'user', '*']
		}],
		default: ['customer']
	},
	likes: {
		type: Number,
		min: 0
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
	/* For reset password */
	resetPasswordToken: {
		type: String
	},
  	resetPasswordExpires: {
  		type: Date
  	}
});

/**
 * Hook a pre save method to hash the password
 */
UserSchema.pre('save', function(next) {
	if (this.password && this.password.length > 6) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}

	next();
});

/**
 * Create instance method for hashing a password
 */
UserSchema.methods.hashPassword = function(password) {
	if (this.salt && password) {
		return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
	} else {
		return password;
	}
};

/**
 * Create instance method for authenticating user
 */
UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

/**
 * Find possible not used username
 */
UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne({
		username: possibleUsername
	}, function(err, user) {
		if (!err) {
			if (!user) {
				callback(possibleUsername);
			} else {
				return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

mongoose.model('User', UserSchema);
