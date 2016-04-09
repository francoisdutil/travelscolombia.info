'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'expotur-eco.com';
	var applicationModuleVendorDependencies = [
		'angular-loading-bar',
		'leaflet-directive',
		'ngResource',
		'ngRoute',
		'ngLocale',
		'ngTouch',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'angular.filter',
		'ui.router',
		'ui.utils',
		'ui.select',
		'ui.bootstrap',
		'pascalprecht.translate',
		'tmh.dynamicLocale',
		'angularytics',
		'ngDialog',
		'colorpicker.module',
		'growlNotifications',
		'duScroll',
		'td.easySocialShare',
		'ngSocial',
		'JSONedit',
		'ngMaterial',
		'ngAria',
		'angular-flexslider'
		];

	// Add a new vertical module
	var registerModule = function(moduleName) {
		// Create angular module
		angular.module(moduleName, []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();
