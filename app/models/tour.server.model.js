'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
* Tour Schema
*/
var TourSchema = new Schema({
	categorytour: {
		type: String,
		default: '',
		trim: true
	},
	tourtitle: {
		type: String,
		default: '',
		trim: true
	},
	subtitle: {
		type: String,
		default: '',
		trim: true
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	summary: {
		type: String,
		default: '',
		trim: true
	},
	additionalservices: {
		type: String,
		default: '',
		trim: true
	},
	groupsize: {
		type: String,
		default: '',
		trim: true
	},
	urlmoreinfo: {
		type: String,
		default: '',
		trim: true
	},
	urlpdf: {
		type: String,
		default: '',
		trim: true
	},
	urlarticle: {
		type: String,
		default: '',
		trim: true
	},
	urlgoogle: {
		type: String,
		default: '',
		trim: true
	},
	urlfacebook: {
		type: String,
		default: '',
		trim: true
	},
	urlyoutube: {
		type: String,
		default: '',
		trim: true
	},
	urltripadvisor: {
		type: String,
		default: '',
		trim: true
	},
	urlanalytics: {
		type: String,
		default: '',
		trim: true
	},
	language: {
		type: String,
		default: 'es',
		trim: true
	},
	groupminsize: {
		type: Number,
		min: 1
	},
	groupmaxsize: {
		type: Number,
		max: 15
	},
	daysavailable: [],
	datestart: {
		type: Date,
		default: Date.now
	},
	dateend: {
		type: Date,
		default: null
	},
	datesdisabled: [],
	tags: [],
	includedinsurance: {
		type: Boolean,
		default: true
	},
	includedtransportterrestre: {
		type: Boolean,
		default: true
	},
	includedtransportprivate: {
		type: Boolean,
		default: true
	},
	included4x4: {
		type: Boolean,
		default: true
	},
	includedboating: {
		type: Boolean,
		default: true
	},
	includedguide: {
		type: Boolean,
		default: true
	},
	includedentrancefee: {
		type: Boolean,
		default: true
	},
	includedaccommodation: {
		type: Boolean,
		default: true
	},
	includedmeals: {
		type: Boolean,
		default: true
	},
	includedgift: {
		type: Boolean,
		default: true
	},
	isactive: {
		type: Boolean,
		default: true
	},
	isfeature: {
		type: Boolean,
		default: true
	},
	duration: {
		type: Number,
		min: 1,
		max: 7
	},
	sellingprice: {
		type: Number,
		min: 1,
		max: 10000000
	},
	price : {
    price : Number,
    currency : String
  },
	percentdeposit: {
		type: Number,
		min: 1,
		max: 100,
		default: 25
	},
	currency: {
		type: String,
		default: '',
		trim: true
	},
	lastcountdate: {
		type: Date
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
	mapId: {
		type: String,
		default: '',
		trim: true
	},
	latitude: {
		type: String,
		default: '',
		trim: true
	},
	longitude: {
		type: String,
		default: '',
		trim: true
	},
	places : [{
    latitude : String,
    longitude : String,
    name : String,
		info : String,
		photo: String
  }],
	locationaim : [{
		lat : String,
		lng : String
	}],
	locationreturn : [{
		lat : String,
		lng : String
	}],
	tips: {
		type: String,
		default: '',
		trim: true
	},
	leadername: {
		type: String,
		default: '',
		trim: true
	},
	difficultylevel: {
		type: String,
		default: 'DifficultyLevel1',
		trim: true
	},
	seokeywords: [],
	seodescription: {
		type: String,
		default: '',
		trim: true
	},
	uploadfolder: {
		type: String,
		default: '',
		trim: true
	},
	pictureurl: {
		type: String,
		default: '',
		trim: true
	},
	pictureurl1: {
		type: String,
		default: '',
		trim: true
	},
	pictureurl2: {
		type: String,
		default: '',
		trim: true
	},
	image: {
		type: String,
		default: '',
		trim: true
	},
	picturecaption: {
		type: String,
		default: '',
		trim: true
	},
	picturecredits: {
		type: String,
		default: '',
		trim: true
	},
	colorbg: {
		type: String,
		default: '#65481C',
		trim: true
	},
	colorfont: {
		type: String,
		default: '#FFFFFF',
		trim: true
	},
	ratingaverage: {
		type: Number,
		min: 1,
		max: 5,
		default: 4
	},
	review: {
		type: String,
		default: '',
		trim: true
	},
	comments: {
		type: String,
		default: '',
		trim: true
	},
	categoria: {
		type: Schema.ObjectId,
		ref: 'Categoria'
	},
	place: {
		type: Schema.ObjectId,
		ref: 'Place'
	},
	guide: {
		type: Schema.ObjectId,
		ref: 'Guide'
	},
	created: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Tour', TourSchema);
