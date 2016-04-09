'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Schedule Schema
 */
var ScheduleSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Place name',
		trim: true
	},
	geometry: {
		type: [{
			type: String,
			default: 'Polygone',
			trim: true
		}],
		coords: [],
		default: ['20.325639, -74.891736']
	},
	url: {
		type: String,
		default: '',
		trim: true
	},
	Info: {
		type: String,
		default: '<div class="container row" <div class "col-xs-6 text-center"><h1>{{place.name}}</h1><p>{{place.content}}</p><h5>{{place.url}}</h5><h4>{{place.rating}}</h4></div></div>',
		trim: true
	},
	translateKey: {
		type: String,
		default: 'schedule.langKey.',
		trim: true
	},
	title: {
		type: String,
		default: '',
		trim: true
	},
	pictureurl: {
		type: String,
		default: '',
		trim: true
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	origin: {
		type: String,
		default: '',
		trim: true
	},
	destination: {
		type: String,
		default: '',
		trim: true
	},
	visits: {
		type: Number,
		min: 0
	},
	likes: {
		type: Number,
		min: 0
	},
	tweets: {
		type: Number,
		min: 0
	},
	rating: {
		type: Number,
		min: 0
	},
	tags: {
		type: [{
			type: String
		}],
		default: ['']
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

mongoose.model('Schedule', ScheduleSchema);
