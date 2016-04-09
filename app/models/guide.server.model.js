'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Guide Schema
 */
var GuideSchema = new Schema({
	name: {
		type: String,
		trim: true,
		default: ''
	},
	nickName: {
		type: String,
		trim: true,
		default: ''
	},
	email: {
		type: String,
		trim: true,
		default: 'info@expotur-eco.com'
	},
	phone: {
		type: String,
		default: '',
		trim: true
	},
	locationName: {
		type: String,
		default: '',
		trim: true
	},
	yearsExperience: {
		type: Number,
		default: 1,
		min: 1
	},
	categories: [],
	available: {
		type: Boolean,
		default: true
	},
	dateTeamMember: {
		type: Date
	},
	dateLastTour: {
		type: Date,
		default: null
	},
	speaksEnglish: {
		type: Boolean,
		default: false
	},
	favoriteQuote: {
		type: String,
		default: '',
		trim: true
	},
	intro_en: {
		type: String,
		default: '',
		trim: true
	},
	intro_es: {
		type: String,
		default: '',
		trim: true
	},
	intro_fr: {
		type: String,
		default: '',
		trim: true
	},
	intro_de: {
		type: String,
		default: '',
		trim: true
	},
	pictureUrl: {
		type: String,
		default: 'https://res.cloudinary.com/travelscolombia/image/upload/v1427691084/guide-default.jpg',
		trim: true
	},
	reviewPostUrl: {
		type: String,
		default: '',
		trim: true
	},
	counterLikes: {
		type: Number,
		default	: 0
	},
	counterRecommended: {
		type: Number,
		default: 0
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Guide', GuideSchema);
