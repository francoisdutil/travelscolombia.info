'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Booking Schema
 */
var BookingSchema = new Schema({
	participants: [{
		name : String,
		nationality : String,
		docId : String,
		specialCare : String
	}],
	numParticipant: {
		type: Number,
		min: 1,
		max: 99,
		default: 1
	},
	departureDate: {
		type: String,
		default: '',
		trim: true
	},
	returnDate: {
		type: String,
		default: '',
		trim: true
	},
	tourId: {
		type: Schema.ObjectId,
		ref: 'Tour'
	},
	tourName: {
		type: String,
		trim: true,
		default: ''
	},
	tourPriceCOP: {
		type: Number
	},
	tourCategory: {
		type: String,
		default: '',
		trim: true
	},
	pictureUrl: {
		type: String,
		default: '',
		trim: true
	},
	payment: [{
		date : Date,
		type : String,
		amount : Number,
		reference : String,
		user: Schema.ObjectId,
		ref: 'User'
	}],
	hotel: {
		name : String,
		address : String,
		phone : String,
		note : String
	},
	pickupdropoff: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	userId: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Booking', BookingSchema);
