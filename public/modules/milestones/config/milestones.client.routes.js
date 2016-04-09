'use strict';

//Setting up route
angular.module('milestones').config(['$stateProvider',
function($stateProvider) {
	// Milestones state routing
	$stateProvider.
	state('listMilestones', {
		url: '/milestones',
		templateUrl: 'modules/milestones/views/list-milestones.client.view.html'
	}).
	state('createMilestone', {
		url: '/milestones/create',
		templateUrl: 'modules/milestones/views/create-milestone.client.view.html',
		controller: 'MilestonesController',
	}).
	state('viewMilestone', {
		url: '/milestones/:milestoneId',
		templateUrl: 'modules/milestones/views/view-milestone.client.view.html'
	}).
	state('editMilestone', {
		url: '/milestones/:milestoneId/edit',
		templateUrl: 'modules/milestones/views/edit-milestone.client.view.html'
	}).

	// nested states
	// each of these sections will have their own view
	// url will be nested (/createMilestone/content)
	state('createMilestone.content', {
		url: '/content',
		templateUrl: 'modules/milestones/views/form-content.client.view.html'
	}).
	// url will be nested (/createMilestone/development)
	state('createMilestone.development', {
		url: '/development',
		templateUrl: 'modules/milestones/views/form-development.client.view.html'
	}).
	// url will be nested (/createMilestone/billing)
	state('createMilestone.billing', {
		url: '/billing',
		templateUrl: 'modules/milestones/views/form-billing.client.view.html'
	}).
	// url will be nested (/createMilestone/preview)
	state('createMilestone.preview', {
		url: '/preview',
		templateUrl: 'modules/milestones/views/form-preview.client.view.html'
	}).
	// url will be nested (/editMilestone/info)
	state('editMilestone.content', {
		url: '/content',
		templateUrl: 'modules/milestones/views/form-content.client.view.html'
	}).
	// url will be nested (/editMilestone/development)
	state('editMilestone.development', {
		url: '/development',
		templateUrl: 'modules/milestones/views/form-development.client.view.html'
	}).
	// url will be nested (/editMilestone/billing)
	state('editMilestone.billing', {
		url: '/billing',
		templateUrl: 'modules/milestones/views/form-billing.client.view.html'
	}).
	// url will be nested (/editMilestone/preview)
	state('editMilestone.preview', {
		url: '/preview',
		templateUrl: 'modules/milestones/views/form-preview.client.view.html'
	});
}
]);
