'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Milestone Schema
 */
var MilestoneSchema = new Schema({
	serviceId: {
		type: String,
		default: '',
		trim: true
	},
	moduleName: {
		type: String,
		default: '',
		trim: true
	},
	overallStatus: {
		type: String,
		default: '',
		trim: true
	},
	internalNote: {
		type: String,
		default: '',
		trim: true
	},
	comment: {
		type: String,
		default: '',
		trim: true
	},
	estimatedDaysWork: {
		type: Number,
		min: 1,
		max: 90
	},
	minCost: {
		type: Number,
		min: 0,
		max: 2000000
	},
	devDiffLevelFactor: {
		type: Number,
		min: 1,
		max: 5
	},
	percentCompleted: {
		type: Number,
		min: 1,
		max: 100
	},
	quoteUrl: {
		type: String,
		default: '',
		trim: true
	},
	invoiceUrl: {
		type: String,
		default: '',
		trim: true
	},
	caseStudyUrl: {
		type: String,
		default: '',
		trim: true
	},
	imageUrl: {
		type: String,
		default: '',
		trim: true
	},
	screenShotUrl: {
		type: String,
		default: '',
		trim: true
	},
	firstDepositPaid: {
		type: Boolean,
		default: true
	},
	secondDepositPaid: {
		type: Boolean,
		default: false
	},
	balancePaid: {
		type: Boolean,
		default: false
	},
	firstDepositDate: {
		type: Date
	},
	secondDepositDate: {
		type: Date
	},
	balanceDate: {
		type: Date
	},
	startDate: {
		type: Date
	},
	approvedDate: {
		type: Date
	},
	publishDate: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
	isActive: {
		type: Boolean,
		default: true
	},
	hasBeenInvoiced: {
		type: Boolean,
		default: true
	},
	isCompleted: {
		type: Boolean,
		default: false
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Milestone', MilestoneSchema);
