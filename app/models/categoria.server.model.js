'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Categoria Schema
 */
var CategoriaSchema = new Schema({
	translateId: {
		type: String,
		default: '',
		trim: true
	},
	mapId: {
		type: String,
		default: '',
		trim: true
	},
	clusterGeoLocation: {
		type: Array,
		default: ['20.325639, -74.891736']
	},
	templateUrl: {
		type: String,
		default: '',
		trim: true
	},
	urlmoreinfo: {
		type: String,
		default: '',
		trim: true
	},
	urlPdf: {
		type: String,
		default: '',
		trim: true
	},
	urlPost: {
		type: String,
		default: '',
		trim: true
	},
	urltripadvisor: {
		type: String,
		default: '',
		trim: true
	},
	imageUrl: {
		type: String,
		default: '',
		trim: true
	},
	color: {
		type: String,
		default: '',
		trim: true
	},
	icon: {
		type: String,
		default: '',
		trim: true
	},
	svg: {
		type: String,
		default: '',
		trim: true
	},
	class: {
		type: String,
		default: '',
		trim: true
	},
	isactive: {
		type: Boolean,
		default: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	lastCountDate: {
		type: Date,
		default: Date.now
	},
	countbookings: {
		type: Number
	},
	countlikes: {
		type: Number
	},
	countfollowers: {
		type: Number
	},
	countrecommended: {
		type: Number
	},
	ratingAverage: {
		type: Number,
		min: 1,
		max: 5,
		default: 4
	}
});

mongoose.model('Categoria', CategoriaSchema);
