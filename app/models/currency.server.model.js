'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Currency Schema
 */
var CurrencySchema = new Schema({
	// Currency model fields
	// ...
	name: {
		type: String,
		default: '',
		trim: true
	},
	country: {
		type: String,
		default: '',
		trim: true
	},
	symbol: {
		type: String,
		default: '',
		trim: true
	},
	format: {
		type: String,
		default: '',
		trim: true
	},
	decimals: {
		type: Number
	},
	exchangerate: {
		type: Number
	},
	lastmodified: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Currency', CurrencySchema);
