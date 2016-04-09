'use strict';

// Setting up route
angular.module('core').config([
	'cfpLoadingBarProvider',
	'$stateProvider',
	'$locationProvider',
	'$urlRouterProvider',
	'$translateProvider',
	'$compileProvider',
	'DEBUG_MODE',
	'LOCALES',
	'tmhDynamicLocaleProvider',
	'ngDialogProvider',
	'AngularyticsProvider',
	function(cfpLoadingBarProvider, $stateProvider, $locationProvider, $urlRouterProvider, $translateProvider, $compileProvider, DEBUG_MODE, LOCALES, tmhDynamicLocaleProvider, ngDialogProvider, AngularyticsProvider, uiGmapGoogleMapApiProvider) {

		// set defaults for cfpLoadingBarProvider
		cfpLoadingBarProvider.includeSpinner = true;

		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// use the HTML5 History API
		$locationProvider.html5Mode(false);

		// state routing
		$stateProvider.
		state('cookies', {
			url: '/cookies',
			templateUrl: 'modules/core/views/cookies.client.view.html'
		}).
		state('terms-conditions', {
			url: '/terms-conditions',
			templateUrl: 'modules/core/views/terms-conditions.client.view.html'
		}).
		state('privacy-policy', {
			url: '/privacy-policy',
			templateUrl: 'modules/core/views/privacy-policy.client.view.html'
		}).
		state('slideshow', {
			url: '/slideshow',
			templateUrl: 'modules/core/views/slideshow.client.view.html'
		}).
		state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact.client.view.html'
		}).
		state('contact/#msg', {
			url: '/contact/#msg',
			templateUrl: 'modules/core/views/contact.client.view.html'
		}).
		state('about', {
			url: '/about',
			templateUrl: 'modules/core/views/about.client.view.html',
			controller: 'AboutController'
		}).
		state('tours', {
			url: '/tours',
			templateUrl: 'modules/tours/views/list-tours.client.view.html',
			controller: 'ToursController'
		}).
		state('bookings', {
			url: '/bookings/create',
			templateUrl: 'modules/bookings/views/create-booking.client.view.html',
			controller: 'BookingsController'
		}).
		state('categorias', {
			url: '/categorias',
			templateUrl: 'modules/categorias/views/list-categorias.client.view.html',
			controller: 'CategoriasController'
		}).
		state('guides', {
			url: '/guides',
			templateUrl: 'modules/guides/views/list-guides.client.view.html',
			controller: 'GuidesController'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html',
			controller: 'HomeController'
		});

		// Initialize angular-translate
	    $translateProvider.useStaticFilesLoader({
	        prefix: 'i18n/',
	        suffix: '.json'
	    });

			$translateProvider.registerAvailableLanguageKeys(['en', 'es', 'fr', 'de'], {
		    'en_US': 'en',
		    'en_UK': 'en',
				'en_AU': 'en',
				'en_CA': 'en',
				'en_GB': 'en',
				'en_NZ': 'en',
				'es_AR': 'es',
				'es_BO': 'es',
				'es_CL': 'es',
				'es_CO': 'es',
				'es_CR': 'es',
				'es_CU': 'es',
				'es_DO': 'es',
				'es_EC': 'es',
				'es_ES': 'es',
				'es_GQ': 'es',
				'es_GT': 'es',
				'es_HN': 'es',
				'es_MX': 'es',
				'es_PA': 'es',
				'es_PE': 'es',
				'es_PR': 'es',
				'es_PY': 'es',
				'es_US': 'es',
				'es_UY': 'es',
				'es_VE': 'es',
		    'de_DE': 'de',
		    'de_CH': 'de',
				'fr_FR': 'fr',
				'fr_CA': 'fr',
				'fr_BE': 'fr',
				'fr_CH': 'fr'
		  });

			$translateProvider.preferredLanguage('en');

			// try to find out preferred language by yourself
			//$translateProvider.determinePreferredLanguage();
			//$translateProvider.useMissingTranslationHandler('myCustomHandlerFactory');

	    $translateProvider.useLocalStorage();

	    tmhDynamicLocaleProvider.localeLocationPattern('https://code.angularjs.org/1.3.15/i18n/angular-locale_{{locale}}.js');
	    tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

			if (!DEBUG_MODE) {
	      $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
	    }

			if (DEBUG_MODE) {
	      $translateProvider.useMissingTranslationHandlerLog();// warns about missing translates
	    }

			// Example of how to set default values for all dialog

			ngDialogProvider.setDefaults({
				className: 'ngdialog-theme-plain',
				plain: false,
				showClose: true,
				closeByDocument: true,
				closeByEscape: true,
				appendTo: true
			});

			ngDialogProvider.setForceBodyReload(true);


	    AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
	}
]);

angular.module('core').constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/);
angular.module('core').constant('VERSION_TAG', /*VERSION_TAG_START*/new Date().getTime()/*VERSION_TAG_END*/);
angular.module('core').constant('LOCALES', {
  'locales': {
    'es': 'Español',
		'en': 'English',
		'de': 'Deutsch',
    'fr': 'Français'
  },
  'preferredLocale': 'en'
});

// Angular debug info
angular.module('core').config(function ($compileProvider, DEBUG_MODE) {
  if (!DEBUG_MODE) {
    $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
  }
});

angular.module('core').run(function(Angularytics) {Angularytics.init();});
angular.module('core').value('duScrollDuration', 1000);
angular.module('core').value('duScrollOffset', 50);
angular.module('core').run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]);
