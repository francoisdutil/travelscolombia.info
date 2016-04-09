'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
	category: {
		type: String,
		default: '',
		trim: true
	},
	language: {
		type: String,
		default: '',
		trim: true
	},
	tourid: {
		type: String,
		default: '',
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
	likes: {
		type: Number,
		min: 0
	},
	tags: {
		type: [{
			type: String
		}],
		default: ['']
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Article', ArticleSchema);
