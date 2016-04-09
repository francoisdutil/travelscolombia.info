'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * ExchangeRate Schema
 */
var ExchangeRateSchema = new Schema({
	// ExchangeRate model fields
	// ...
	// The time that the snapshot was taken
  time : { type : Date, default : Date.now },
  // Means that 'rates' can be anything
  rates : mongoose.Schema.Types.Mixed
});

mongoose.model('ExchangeRate', ExchangeRateSchema);
