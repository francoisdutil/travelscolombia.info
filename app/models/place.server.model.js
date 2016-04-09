'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Place Schema
 */
var PlaceSchema = new Schema({
	type: { type: String, default: 'Feature'},
  geometry: {
		type: { type: String, default: 'Point' },
		coordinates: { type: [Number], index: '2dsphere'}
  },
	properties: {
    name: { type: String, required: true },
    description: { type: String },
		category: { type: String, default: '' },
		pictureUrl: { type: String, default: '/assets/img/logo-sm.png' },
		webPageUrl: { type: String },
		color: { type: String },
		icon: { type: String },
		zoom: { type: Number, min: 8, max: 16, default: 13 },
    created: { type:Date, default:Date.now }
  },
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
});

mongoose.model('Place', PlaceSchema);
