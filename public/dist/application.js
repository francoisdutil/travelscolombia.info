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

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('admin');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('articles');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('bookings');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('categorias');
'use strict';

// Use Application configuration module to register a new module
ApplicationConfiguration.registerModule('core');

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('guides');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('milestones');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('places');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('schedules');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('todos');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('tours');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');

'use strict';

//Setting up route
angular.module('admin').config(['$stateProvider', '$routeProvider',
	function($stateProvider, $routeProvider) {
		// Admin state routing
		$stateProvider.
		state('instagram', {
			url: '/instagram',
			templateUrl: 'modules/admin/views/instagram.client.view.html'
		}).
		state('admin', {
			url: '/admin',
			templateUrl: 'modules/admin/views/admin.client.view.html'
		}).
		state('admin.editlang', {
			url: '/admin/editlang',
			templateUrl: 'modules/admin/views/editlang.client.view.html'
		}).
		state('dashboard', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'DashboardController',
			title: 'simple',
			description: 'This is the simplest demo.'
		}).
		state('dashboard.resize', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'ResizeDemoController',
			title: 'simple',
			description: 'This is the simplest demo.'
		}).
		state('dashboard.custom-settings', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'CustomSettingsDemoController',
			title: 'custom widget settings',
			description: 'This demo showcases overriding the widget settings dialog/modal ' +
			'for the entire dashboard and for a specific widget. Click on the cog of each ' +
			'widget to see the custom modal. \n"configurable widget" has "limit" option in the modal ' +
			'that controls RandomDataModel.'
		}).
		state('dashboard.explicit-saving', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/dashboard.client.view.html',
			controller: 'ExplicitSaveDemoController',
			title: 'explicit saving',
			description: 'This demo showcases an option to only save the dashboard state '+
			'explicitly, e.g. by user input. Notice the "all saved" button in the controls ' +
			'updates as you make saveable changes.'
		}).
		state('dashboard.layouts', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/layouts.client.view.html',
			controller: 'LayoutsDemoController',
			title: 'dashboard layouts',
			description: 'This demo showcases the ability to have "dashboard layouts", ' +
			'meaning the ability to have multiple arbitrary configurations of widgets. For more ' +
			'information, take a look at [issue #31](https://github.com/DataTorrent/malhar-angular-dashboard/issues/31)'
		}).
		state('dashboard.layouts.explicit-saving', {
			url: '/admin/dashboard',
			templateUrl: 'modules/admin/views/layouts.client.view.html',
			controller: 'LayoutsDemoExplicitSaveController',
			title: 'layouts explicit saving',
			description: 'This demo showcases dashboard layouts with explicit saving enabled.'
		});
	}
]);

angular.module('admin').value('defaultWidgets', [
	{ name: 'random' },
	{ name: 'time' },
	{ name: 'datamodel' },
	{
		name: 'random',
		style: {
			width: '50%'
		}
	},
	{
		name: 'time',
		style: {
			width: '50%'
		}
	}
]);

'use strict';

angular.module('admin').controller('AdminController', ['$scope', '$filter', '$stateParams', '$location', 'Authentication',
	function($scope, $filter, $stateParams, $location, Authentication) {
		// Controller Logic
		// ...
		// example JSON
		$scope.jsonData = {
			Name: 'Joe', 'Last Name': 'Miller', Address: {Street: 'Neverland 42'}, Hobbies: ['doing stuff', 'dreaming']
		};

		$scope.$watch('jsonData', function(json) {
			$scope.jsonString = $filter('json')(json);
		}, true);
		$scope.$watch('jsonString', function(json) {
			try {
				$scope.jsonData = JSON.parse(json);
				$scope.wellFormed = true;
			} catch(e) {
				$scope.wellFormed = false;
			}
		}, true);
	}
]);

'use strict';

angular.module('admin').controller('CustomSettingsDemoController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets', 'RandomDataModel',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets, RandomDataModel) {
		// Custom settings demo controller logic
		// ...
		// Add an additional widget with setting overrides
		var definitions = [{
			name: 'congfigurable widget',
			directive: 'wt-scope-watch',
			dataAttrName: 'value',
			dataModelType: RandomDataModel,
			dataModelOptions: {
				limit: 10
			},
			settingsModalOptions: {
				partialTemplateUrl: 'template/configurableWidgetModalOptions.html'
			},
			onSettingsClose: function (result, widget) {
				if (widget.dataModel && widget.dataModel.updateLimit) {
					widget.dataModel.updateLimit(result.dataModelOptions.limit);
				}
			}
		}, {
			name: 'override modal widget',
			directive: 'wt-scope-watch',
			dataAttrName: 'value',
			dataModelType: RandomDataModel,
			settingsModalOptions: {
				templateUrl: 'template/WidgetSpecificSettings.html',
				controller: 'WidgetSpecificSettingsCtrl',
				backdrop: false
			},
			onSettingsClose: function(result, widget) {
				console.log('Widget-specific settings resolved!');
				jQuery.extend(true, widget, result);
			},
			onSettingsDismiss: function(reason, scope) {
				console.log('Settings have been dismissed: ', reason);
				console.log('Dashboard scope: ', scope);
			}
		}];

		var defaultWidgets1 = [
		{ name: 'congfigurable widget' },
		{ name: 'override modal widget' }
	];

		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: definitions,
			defaultWidgets: defaultWidgets,
			storage: $window.localStorage,
			storageId: 'custom-settings',

			/*
			// Overrides default $modal options.
			// This can also be set on individual
			// widget definition objects (see above).
			settingsModalOptions: {
			// This will completely override the modal template for all widgets.
			// You also have the option to add to the default modal template with settingsModalOptions.partialTemplateUrl (see "configurable widget" above)
			templateUrl: 'template/customSettingsTemplate.html'
			// We could pass a custom controller name here to be used
			// with the widget settings dialog, but for this demo we
			// will just keep the default.
			//
			// controller: 'CustomSettingsModalCtrl'
			//
			// Other options passed to $modal.open can be put here,
			// eg:
			//
			// backdrop: false,
			// keyboard: false
			//
			// @see http://angular-ui.github.io/bootstrap/#/modal  <-- heads up: routing on their site was broken as of this writing
		},
		*/

			// Called when a widget settings dialog is closed
			// by the "ok" method (i.e., the promise is resolved
			// and not rejected). This can also be set on individual
			// widgets (see above).
			onSettingsClose: function(result, widget, scope) {
				console.log('Settings result: ', result);
				console.log('Widget: ', widget);
				console.log('Dashboard scope: ', scope);
				jQuery.extend(true, widget, result);
			},

			// Called when a widget settings dialog is closed
			// by the "cancel" method (i.e., the promise is rejected
			// and not resolved). This can also be set on individual
			// widgets (see above).
			onSettingsDismiss: function(reason, scope) {
				console.log('Settings have been dismissed: ', reason);
				console.log('Dashboard scope: ', scope);
			}
		};
	}
]);

'use strict';

angular.module('admin').controller('DashboardController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
		// Controller Logic
		// ...
		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			storage: $window.localStorage,
			storageId: 'demo_simple'
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);

'use strict';

angular.module('admin').controller('ExplicitSaveDemoController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
	// Explicit save demo controller logic
		// ...
		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			storage: $window.localStorage,
			storageId: 'explicitSave',
			explicitSave: true
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);

'use strict';

angular.module('admin').controller('InstagramController', ['$scope', 'InstagramApi',
	function($scope, InstagramApi) {
		// Instagram controller logic
		$scope.data = {};
		InstagramApi.fetchPopular(function(data){
			$scope.pics = data;
		});
	}
]);

'use strict';

angular.module('admin').controller('LayoutsDemoExplicitSaveController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
	// Layouts demo explicit save controller logic
		// ...
		$scope.layoutOptions = {
			storageId: 'demo-layouts-explicit-save',
			storage: localStorage,
			storageHash: 'fs4df4d51',
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			explicitSave: true,
			defaultLayouts: [
			{ title: 'Layout 1', active: true , defaultWidgets: defaultWidgets },
			{ title: 'Layout 2', active: false, defaultWidgets: defaultWidgets },
			{ title: 'Layout 3', active: false, defaultWidgets: defaultWidgets }
			]
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);

'use strict';

angular.module('admin').controller('LayoutsDemoController', ['$scope', 'widgetDefinitions', 'defaultWidgets', 'LayoutStorage', '$interval',
	function($scope, widgetDefinitions, defaultWidgets, LayoutStorage, $interval) {
		// Layouts demo controller logic
		// ...
		$scope.layoutOptions = {
			storageId: 'demo-layouts',
			storage: localStorage,
			storageHash: 'fs4df4d51',
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			lockDefaultLayouts: true,
			defaultLayouts: [
			{ title: 'Layout 1', active: true , defaultWidgets: defaultWidgets },
			{ title: 'Layout 2', active: false, defaultWidgets: defaultWidgets },
			{ title: 'Layout 3', active: false, defaultWidgets: defaultWidgets, locked: false }
			]
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);

'use strict';

angular.module('admin').controller('NavBarController', ['$scope', '$route',
	function($scope, $route) {
		// Nav bar controller logic
		// ...
		$scope.$route = $route;
	}
]);

'use strict';

angular.module('admin').controller('ResizableController', ['$scope',
	function($scope) {
		// Resizable controller logic
		// ...
		$scope.$on('widgetResized', function (event, size) {
			$scope.width = size.width || $scope.width;
			$scope.height = size.height || $scope.height;
		});
	}
]);

'use strict';

angular.module('admin').controller('ResizeDemoController', ['$scope', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $interval, $window, widgetDefinitions, defaultWidgets) {
		// Resize demo controller logic
		// ...
		defaultWidgets = [
		{ name: 'fluid' },
		{ name: 'resizable' },
		{ name: 'random', style: { width: '50%' } },
		{ name: 'time', style: { width: '50%' } }
		];

		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			storage: $window.localStorage,
			storageId: 'demo_resize'
		};
		$scope.randomValue = Math.random();
		$interval(function () {
			$scope.randomValue = Math.random();
		}, 500);
	}
]);

'use strict';

angular.module('admin').controller('WidgetSpecificSettingsController', ['$scope', '$modalInstance', 'widget',
	function($scope, $modalInstance, widget) {
		// Widget specific settings controller logic
		// ...
		// add widget to scope
		$scope.widget = widget;

		// set up result object
		$scope.result = jQuery.extend(true, {}, widget);

		$scope.ok = function () {
			console.log('calling ok from widget-specific settings controller!');
			$modalInstance.close($scope.result);
		};

		$scope.cancel = function () {
			console.log('calling cancel from widget-specific settings controller!');
			$modalInstance.dismiss('cancel');
		};
	}
]);

'use strict';

angular.module('admin').directive('wtFluid', [
	function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'template/fluid.html',
			scope: true,
			controller: ["$scope", function ($scope) {
				$scope.$on('widgetResized', function (event, size) {
					$scope.width = size.width || $scope.width;
					$scope.height = size.height || $scope.height;
				});
			}]
		};
	}
]);

'use strict';

angular.module('admin').directive('wtScopeWatch', [
	function() {
		return {
			restrict: 'A',
			replace: true,
			template: '<div>Value<div class="alert alert-info">{{value}}</div></div>',
			scope: {
				value: '=value'
			}
		};
	}
]);

'use strict';

angular.module('admin').directive('wtTime', [
	function($interval) {
		return {
			restrict: 'A',
			scope: true,
			replace: true,
			template: '<div>Time<div class="alert alert-success">{{time}}</div></div>',
			link: function (scope) {
				function update() {
					scope.time = new Date().toLocaleTimeString();
				}

				update();

				var promise = $interval(update, 500);

				scope.$on('$destroy', function () {
					$interval.cancel(promise);
				});
			}
		};
	}
]);

'use strict';

angular.module('admin').factory('InstagramApi', ['$http',
	function($http) {
		// Instagram api service logic
		var client_id = 'c1881e31004c4ddd810ff29f794e1931';
		return {
			fetchPopular: function(callback){
				var endpoint = 'https://api.instagram.com/v1/media/popular';
				endpoint += '?count=99';
				endpoint += '&client_id=' + client_id;
				endpoint += '&callback=JSON_CALLBACK';
				$http.jsonp(endpoint).success(function(response){
					callback(response.data);
				});
			}
		};
	}
]);

'use strict';

angular.module('admin').factory('RandomDataModel', ["$interval", "WidgetDataModel", function ($interval, WidgetDataModel) {
	function RandomDataModel() {
	}

	RandomDataModel.prototype = Object.create(WidgetDataModel.prototype);
	RandomDataModel.prototype.constructor = WidgetDataModel;

	angular.extend(RandomDataModel.prototype, {
		init: function () {
			var dataModelOptions = this.dataModelOptions;
			this.limit = (dataModelOptions && dataModelOptions.limit) ? dataModelOptions.limit : 100;

			this.updateScope('-');
			this.startInterval();
		},

		startInterval: function () {
			$interval.cancel(this.intervalPromise);

			this.intervalPromise = $interval(function () {
				var value = Math.floor(Math.random() * this.limit);
				this.updateScope(value);
			}.bind(this), 500);
		},

		updateLimit: function (limit) {
			this.dataModelOptions = this.dataModelOptions ? this.dataModelOptions : {};
			this.dataModelOptions.limit = limit;
			this.limit = limit;
		},

		destroy: function () {
			WidgetDataModel.prototype.destroy.call(this);
			$interval.cancel(this.intervalPromise);
		}
	});

	return RandomDataModel;
}]);

'use strict';

angular.module('admin').factory('widgetDefinitions', [
	function() {
		// Widget definitions service logic
		// ...

		// Public API
		return [
		{
			name: 'random',
			directive: 'wt-scope-watch',
			attrs: {
				value: 'randomValue'
			}
		},
		{
			name: 'time',
			directive: 'wt-time'
		},
		{
			name: 'datamodel',
			directive: 'wt-scope-watch',
			dataAttrName: 'value'
			//dataModelType: RandomDataModel
		},
		{
			name: 'resizable',
			templateUrl: 'template/resizable.html',
			attrs: {
				class: 'demo-widget-resizable'
			}
		},
		{
			name: 'fluid',
			directive: 'wt-fluid',
			size: {
				width: '50%',
				height: '250px'
			}
		}
		];
	}
]);

'use strict';

// Configuring the Guides module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Blog', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'Lista de los articulos', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'Añadir un articulo', 'articles/create');
	}
]);

'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listArticles', {
			url: '/articles',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('createArticle', {
			url: '/articles/create',
			templateUrl: 'modules/articles/views/create-article.client.view.html'
		}).
		state('viewArticle', {
			url: '/articles/:articleId',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('editArticle', {
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		});
	}
]);
'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);
'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('articles/:articleId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('bookings').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Reserva', 'bookings', 'dropdown', '/bookings(/create)?');
		Menus.addSubMenuItem('topbar', 'bookings', 'Lista de las reservas', 'bookings');
		Menus.addSubMenuItem('topbar', 'bookings', 'Añadir una reserva', 'bookings/create');
	}
]);

'use strict';

//Setting up route
angular.module('bookings').config(['$stateProvider',
	function($stateProvider) {
		// Bookings state routing
		$stateProvider.
		state('listBookings', {
			url: '/bookings',
			templateUrl: 'modules/bookings/views/list-bookings.client.view.html'
		}).
		state('createBooking', {
			url: '/bookings/create',
			templateUrl: 'modules/bookings/views/create-booking.client.view.html',
			controller: 'BookingsController',
		}).
		state('viewBooking', {
			url: '/bookings/:bookingId',
			templateUrl: 'modules/bookings/views/view-booking.client.view.html'
		}).
		state('editBooking', {
			url: '/bookings/:bookingId/edit',
			templateUrl: 'modules/bookings/views/edit-booking.client.view.html'
		}).

		// nested states
		// each of these sections will have their own view
		// url will be nested (/createBooking/step1)
		state('createBooking.step1', {
			url: '/step1',
			templateUrl: 'modules/bookings/views/form-step1.client.view.html'
		}).
		// url will be nested (/createBooking/step2)
		state('createBooking.step2', {
			url: '/step2',
			templateUrl: 'modules/bookings/views/form-step2.client.view.html'
		}).
		// url will be nested (/createBooking/step3)
		state('createBooking.step3', {
			url: '/step3',
			templateUrl: 'modules/bookings/views/form-step3.client.view.html'
		}).
		// url will be nested (/editBooking/step1)
		state('editBooking.step1', {
			url: '/step1',
			templateUrl: 'modules/bookings/views/form-step1.client.view.html'
		}).
		// url will be nested (/editBooking/step2)
		state('editBooking.step2', {
			url: '/step2',
			templateUrl: 'modules/bookings/views/form-step2.client.view.html'
		}).
		// url will be nested (/editBooking/step3)
		state('editBooking.step3', {
			url: '/step3',
			templateUrl: 'modules/bookings/views/form-step3.client.view.html'
		});
	}
]);

'use strict';

// Bookings controller
angular.module('bookings').controller('BookingsController', ['$scope', '$rootScope', '$http', '$timeout', '$filter', 'dateFilter', '$modal', '$mdSidenav', '$mdBottomSheet', '$log', '$stateParams', '$location', '$anchorScroll','Authentication', 'ngDialog', 'Bookings', 'Tours', 'CurrencyConverter',
	function($scope, $rootScope, $http, $timeout, $filter, dateFilter, $modal, $mdSidenav, $mdBottomSheet, $log, $stateParams, $location, $anchorScroll, Authentication, ngDialog, Bookings, Tours, CurrencyConverter) {
		$scope.authentication = Authentication;
		$scope.currentUser = $scope.authentication.user._id;

		//$http.get('http://jsonrates.com/convert/?base=COP&amount=1&apiKey=jr-0e8637927e2fd98b9986697495f83a86').success(function(response){
		//	$scope.exchangeRatesData = response;
			//console.log('ratesjson: ', $scope.exchangeRatesData);
		//});

		$scope.formData = {};
		//$scope.selTour = {};
		$scope.action = 'createBooking';
		$scope.counter = 1;
		$scope.duration = 1;
		$scope.notAlone = false;
		$scope.intro = true;
		$scope.ctr = 0;
	  $scope.someFunction = function (item, model){
	    $scope.ctr++;
	    $scope.eventResult = {item: item, model: model};
	  };

		$scope.people = [];
		$scope.hotel = {};

		$scope.people.push({
			name: $scope.authentication.user.displayName,
			nationality: $scope.authentication.user.nationality,
			docId: $scope.authentication.user.documentId,
			specialCare: ''
		});

	  $scope.addParticipant = function() {
	    $scope.counter++;
			$scope.formData.numberParticipants = $scope.counter;
	  };
		$scope.removeParticipant = function() {
	    $scope.counter--;
			$scope.formData.numberParticipants = $scope.counter;
	  };
		$scope.getParticipants = function() {
			$scope.formData.numberParticipants = $scope.counter;
	  };

		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd/MM/yyyy', 'shortDate'];
		$scope.format = $scope.formats[2];

		$scope.today = function() {
			$scope.date = new Date(new Date());
		};
		$scope.today();

		$scope.tomorrow = function() {
			$scope.date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
			var dt = $scope.date;

			$scope.$watch('date', function (date)
	    {
	        $scope.dt = date;
	        //console.log('A', $scope.date, $scope.dt);
	    });

			//$scope.dt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
			//$scope.dt = $filter('date') (new Date(new Date().getTime() + 24 * 60 * 60 * 1000), $scope.format);

			$scope.initDate = $scope.dt;
		};
		$scope.tomorrow();


		$scope.clear = function() {

			$scope.dt = $filter('date') ($scope.initDate, $scope.format);
			$scope.tour.selected = undefined;
		};


		$filter('date') (new Date(), $scope.format);
		// Disable weekend selection
		//$scope.disabled = function(date, mode) {
		//	return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		//};

		$scope.toggleMin = function() {
			$scope.minDate = $scope.minDate ? null : new Date();
		};
		$scope.toggleMin();

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.opened = true;
		};

		$scope.dateOptions = {
			formatYear: 'yy',
			startingDay: 0,
			showWeeks: false,
			showButtonBar: false
		};

		//add tour duration (days) to the departure date
		$scope.calcReturnDate = function(dt) {
			//var returnDate = null;
			//var lastWeekUnformatted = new Date(new Date().setDate(new Date().getDate() - 7));
			var date = dt;
			var duration = $scope.duration -1;
			$scope.startDate = $filter('date') ($scope.dt, $scope.format);
			$scope.formData.departureDate = $scope.startDate;
			//alert('duration '+duration);
			var returnDate = new Date(date);
			returnDate.setDate(returnDate.getDate() + duration);
			var nd = new Date(returnDate);
			//alert('the new date is '+nd);
			//returnDate = $scope.format;
			$scope.returnDate = $filter('date') (returnDate, $scope.format);
			$scope.formData.returnDate = $scope.returnDate;
		};

		$scope.initBooking = function() {
			//$scope.formData = {};
			//$scope.selTour = {};
			$scope.action = 'createBooking';
			$scope.counter = 1;
			$scope.duration = 1;
			$scope.notAlone = false;
			$scope.formData.selTour = $scope.selTour;
			$scope.formData.departureDate = $scope.tomorrow;
			$scope.formData.returnDate = $scope.startDate;
			$scope.formData.tourId = $scope.selTour._id;
			$scope.formData.percentdeposit = $scope.selTour.percentdeposit;
			$scope.formData.userId = $scope.authentication.user._id;
			$scope.formData.notAlone = $scope.notAlone;
			$scope.formData.numberParticipants = $scope.counter;
			$scope.formData.tourPriceCOP = $scope.selTour.sellingprice;
		};


		//
		// Modal Step 2
		$scope.bookingStep2 = function () {
			$scope.value = true;
			ngDialog.openConfirm({
				template: '/modules/bookings/views/modal.booking.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			}).then(function (value) {
				console.log('Modal promise resolved. Value: ', $scope.formData.tourName);
			}, function (reason) {
				console.log('Modal promise rejected. Reason: ', reason);
			});
		};

		// Modal Checkout
		$scope.checkout = function () {
			$scope.value = true;
			ngDialog.openConfirm({
				template: '/modules/bookings/views/modal.checkout.html',
				className: 'ngdialog-theme-plain',
				controller: 'BookingsController',
				scope: $scope
			}).then(function (value) {
				console.log('Modal promise resolved. Value: ', $scope.formData.tourName);
			}, function (reason) {
				console.log('Modal promise rejected. Reason: ', reason);
			});
		};

		// Modal Tour Details
		$scope.showTourModal = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/bookings/views/modal.show-tour.html',
				className: 'ngdialog-theme-plain',
				closeByDocument: true,
				closeByEscape: true,
				scope: $scope
			});
		};

		// Modal Tour Tips
		$scope.showTourTips = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/bookings/views/modal.tour-tips.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Details
		$scope.showTourDetails = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/bookings/views/modal.tour-details.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		// Modal Tour Map
		$scope.showTourMap = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/bookings/views/modal.tour-map.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Included
		$scope.showTourIncluded = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/bookings/views/modal.tour-included.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Itinerary
		$scope.showTourItinerary = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/bookings/views/modal.tour-itinerary.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		$rootScope.$on('ngDialog.opened', function (e, $dialog) {
			//console.log('ngDialog opened: ' + $dialog.attr('id'));
		});

		$rootScope.$on('ngDialog.closed', function (e, $dialog) {
			//console.log('ngDialog closed: ' + $dialog.attr('id'));
		});

		// Create new Booking
		$scope.create = function() {
			// Create new Booking object
			//console.log('Participants before split: ' + this.people);
      //var participants = this.people;
      //var participants = participants.split(" ");
      //console.log(“Participants array “ + participants);
			var booking = new Bookings ({
				tourName: $scope.formData.tourName,
				tourId: $scope.formData.tourId,
				userId: $scope.currentUser,
				tourPriceCOP: $scope.tourPrice,
				tourCategory: $scope.formData.tourCategory,
				numParticipant: $scope.counter,
				departureDate: $scope.formData.departureDate,
				returnDate: $scope.formData.returnDate,
				participants: $scope.people,
				hotel: $scope.hotel,
				pickupdropoff: $scope.formData.PickupDropoff,
				pictureUrl: $scope.formData.pictureurl
			});

			// Redirect after save
			booking.$save(function(response) {
				$location.path('bookings');
				console.log('Booking: ', response._id);

				// Clear form fields
				$scope.formData = {};
				$scope.hotel = {};
				$scope.people = [];

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Booking
		$scope.remove = function( booking ) {
			if ( booking ) { booking.$remove();

				for (var i in $scope.bookings ) {
					if ($scope.bookings [i] === booking ) {
						$scope.bookings.splice(i, 1);
					}
				}
			} else {
				$scope.booking.$remove(function() {
					$location.path('bookings');
				});
			}
		};

		// Update selected tour field (step 2)
		$scope.updateTour = function(tour) {
			$scope.selTour = tour;
			$scope.duration = $scope.selTour.duration;
			$scope.tourPrice = $scope.selTour.sellingprice;
			$scope.formData.tourName = $scope.selTour.tourtitle;
			$scope.formData.departureDate = $scope.dt;
			$scope.formData.colorfont = $scope.selTour.colorfont;
			$scope.formData.colorbg = $scope.selTour.colorbg;
			$scope.formData.pictureurl = $scope.selTour.pictureurl;
			$scope.formData.duration = $scope.selTour.duration;
			$scope.formData.numberParticipants = $scope.counter;
			$scope.formData.tourId = $scope.selTour._id;
			$scope.formData.tourCategory = $scope.selTour.categorytour;
			$scope.formData.userId = $scope.authentication.user._id;
			$scope.formData.tourPriceCOP = $scope.selTour.sellingprice;
			$scope.formData.percentdeposit = $scope.selTour.percentdeposit;
			$scope.formData.countbookings = $scope.selTour.countbookings;
			//console.log('selTour: ', $scope.formData.tourName);
		};

		// Update existing Booking
		$scope.update = function() {
			$scope.action = 'editBooking';
			var booking = $scope.booking;
			booking.$update(function() {
				$location.path('bookings/' + booking._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Bookings
		$scope.find = function() {
			$scope.bookings = Bookings.query();
		};

		// Find existing Booking
		$scope.findOne = function() {
			$scope.action = 'editBooking';
			$scope.booking = Bookings.get({
				bookingId: $stateParams.bookingId
			});
		};

		// Open Booking
		$scope.bookTour = function(_id) {
			$scope.action = 'bookTour'
			$scope.bookingTour = _id;
			$scope.booking = Bookings.get({
				bookingId: $scope.bookingTour
			});
			//console.log('Book Tour: ', $scope.bookingTour);
		};

		$rootScope.$on('ngDialog.opened', function (e, $dialog) {
			//console.log('ngDialog opened: ' + $dialog.attr('id'));
		});

		$rootScope.$on('ngDialog.closed', function (e, $dialog) {
			//console.log('ngDialog closed: ' + $dialog.attr('id'));
		});

		//scope.changeLanguage = function (lang) {
		//	$scope.locale = $translate.use(lang);
		//};

		// Left and Right $mdSidenav
		$scope.toggleLeft = function() {
	    $mdSidenav('left').toggle()
	    .then(function(){
	        //$log.debug("toggle left is done");
	    });
	  };
	  $scope.toggleRight = function() {
	    $mdSidenav('right').toggle()
	    .then(function(){
	      //$log.debug("toggle RIGHT is done");
	    });
	  };

		//	Bottomsheet $mdBotomSheet
		// ...
		$scope.alert = '';

	  $scope.showGridBottomSheet = function($event) {
	    $scope.alert = '';
	    $mdBottomSheet.show({
	      templateUrl: '/modules/bookings/views/bottom-sheet-grid-template.client.view.html',
	      controller: 'GridBottomSheetController',
	      targetEvent: $event
	    }).then(function(clickedItem) {
	      $scope.alert = clickedItem.name + ' clicked!';
	    });
	  };

		$scope.payNow = function($event) {
			window.alert("Gracias!");
		}
		//	Currency converter logic
		// ...

		this.qty = $scope.counter;
	  this.cost = $scope.tourPrice;
	  this.inCurr = 'COP';
	  this.currencies = CurrencyConverter.currencies;

	  this.total = function total(outCurr) {
			this.qty = $scope.counter;
		  this.cost = $scope.tourPrice;
	    return CurrencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
	  };
	  this.pay = function pay() {
	    window.alert("Gracias!");
	  };

		$anchorScroll();
	}
]);

'use strict';

angular.module('bookings').controller('GridBottomSheetController', ['$scope', '$mdBottomSheet',
	function($scope, $mdBottomSheet) {
		// Grid bottom sheet controller logic
		// ...
		$scope.items = [
			{ name: 'Hangout', icon: 'hangout' },
	    { name: 'Mail', icon: 'mail' },
	    { name: 'Message', icon: 'message' },
	    { name: 'Copy', icon: 'copy' },
	    { name: 'Facebook', icon: 'facebook' },
	    { name: 'Twitter', icon: 'twitter' }
	  ];
	  $scope.listItemClick = function($index) {
	    var clickedItem = $scope.items[$index];
	    $mdBottomSheet.hide(clickedItem);
  	};
	}
]);

'use strict';

angular.module('bookings').controller('LeftController', ['$scope', '$timeout', '$mdSidenav', '$log',
	function($scope, $timeout, $mdSidenav, $log) {
		// Left controller logic
		// ...
		$scope.close = function() {
    $mdSidenav('left').close()
      .then(function(){
        //$log.debug("close LEFT is done");
      });
  	};
	}
]);

'use strict';

angular.module('bookings').controller('RightController', ['$scope', '$timeout', '$mdSidenav', '$log',
	function($scope, $timeout, $mdSidenav, $log) {
		// Left controller logic
		// ...
		$scope.close = function() {
    $mdSidenav('right').close()
      .then(function(){
        //$log.debug("close RIGHT is done");
      });
  	};
	}
]);

'use strict';

angular.module('bookings').directive('paypalButton', [
	function() {
		return {
      restrict: 'E',
      scope: {},
      compile: function(element, attrs) {
        var languageCodes = [ // PayPal allowed language codes
          'en_US',
          'es_ES',
          'fr_FR',
          'de_DE'
        ];
        var currencyCodes = [ // PayPal allowed currency codes
          'AUD',
          'CAD',
          'COP',
          'DKK',
          'EUR',
          'HKD',
          'HUF',
          'ILS',
          'JPY',
          'MXN',
          'NOK',
          'NZD',
          'PHP',
          'PLN',
          'GBP',
          'RUB',
          'SGD',
          'SEK',
          'CHF',
          'TWD',
          'THB',
          'USD'
        ];
        var buttonSizes = [ // PayPal allowed button sizes
          'SM', // small
          'LG' // large
        ];
        var name = this.name;
        function err(reason) {
          element.replaceWith('<span style="background-color:red; color:black; padding:.5em;">' + name + ': ' + reason + '</span>');
          console.log(element.context);
        }
        var action = attrs.action || 'https://www.paypal.com/us/cgi-bin/webscr';
        var business = attrs.business;
        var languageCode = attrs.languageCode || 'es_ES';
        var currencyCode = attrs.currencyCode || 'USD';
        var itemName = attrs.itemName;
        var amount = parseFloat(attrs.amount);
        var buttonSize = attrs.buttonSize || 'LG';
        var imgAlt = attrs.imgAlt || 'Make payments with PayPal - it\'s fast, free and secure!';
        if (!business) { return err('business not specified!'); }
        if (!itemName) { return err('item name not specified!'); }
        if (!amount) { return err('amount not specified!'); }
        if (isNaN(amount)) { return err('amount is not a number!'); }
        if (languageCodes.indexOf(languageCode) < 0) { return err('unforeseen language code!'); }
        if (currencyCodes.indexOf(currencyCode) < 0) { return err('unforeseen currency code!'); }
        if (buttonSizes.indexOf(buttonSize) < 0) { return err('unforeseen button size!'); }
        var imgSrc = 'http://www.paypalobjects.com/' + languageCode + '/i/btn/btn_buynow_' + buttonSize + '.gif';
        var template =
          '<form name="_xclick" action="' + action + '" method="post">' +
          '<input type="hidden" name="cmd" value="_xclick">' +
          '<input type="hidden" name="business" value="' + business + '">' +
          '<input type="hidden" name="currency_code" value="' + currencyCode + '">' +
          '<input type="hidden" name="item_name" value="' + itemName + '">' +
          '<input type="hidden" name="amount" value="' + amount + '">' +
          '<input type="image" src="' + imgSrc + '" border="0" name="submit" alt="' + imgAlt + '">' +
          '</form>';
        //element.replaceWith(template);
        element.append(template);
      }
    };
	}
]);

'use strict';

angular.module('tours').filter('tourDuration', [
	function() {
		return function (tours, values) {
        var filtered = [];

        for (var i = 0; i < tours.length; i++) {
            var tour = tours[i];
            if (tour.duration >= values.low && tour.duration <= values.high ) {
                filtered.push(tour);
            }
        }
        return filtered;
    };
	}
]);

'use strict';

//Bookings service used to communicate Bookings REST endpoints
angular.module('bookings').factory('Bookings', ['$resource',
	function($resource) {
		return $resource('bookings/:bookingId', { bookingId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

angular.module('bookings').factory('CurrencyConverter', [
	function() {
		// Currency converter service logic
		// ...
		// Exchange Rates last updated with xe.com data: 26/3/2015
		//
		var currencies = ['COP', 'USD', 'EUR', 'GBP', 'AUD', 'CAD', 'CHF', 'NZD'];
	  var copToForeignRates = {
	    COP: 1,
	    USD: 0.000398565,
	    EUR: 0.000363268,
			GBP: 0.000267776,
			AUD: 0.000507517,
			CAD: 0.000498729,
			CHF: 0.000382385,
			NZD: 0.000523597
	  };
	  var convert = function (amount, inCurr, outCurr) {
	    return amount * copToForeignRates[outCurr] / copToForeignRates[inCurr];
	  };

	  return {
	    currencies: currencies,
	    convert: convert
	  };
	}
]);

'use strict';

// Configuring the Categorias module
angular.module('categorias').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Categoria', 'categorias', 'dropdown', '/categorias(/create)?');
		Menus.addSubMenuItem('topbar', 'categorias', 'Lista de las categorias', 'categorias');
		Menus.addSubMenuItem('topbar', 'categorias', 'Añadir una categoria', 'categorias/create');
	}
]);

'use strict';

//Setting up route
angular.module('categorias').config(['$stateProvider',
	function($stateProvider) {
		// Categorias state routing
		$stateProvider.
		state('listCategorias', {
			url: '/categorias',
			templateUrl: 'modules/categorias/views/list-categorias.client.view.html'
		}).
		state('createCategoria', {
			url: '/categorias/create',
			templateUrl: 'modules/categorias/views/create-categoria.client.view.html',
			controller: 'CategoriasController',
		}).
		state('viewCategoria', {
			url: '/categorias/:categoriaId',
			templateUrl: 'modules/categorias/views/view-categoria.client.view.html'
		}).
		state('editCategoria', {
			url: '/categorias/:categoriaId/edit',
			templateUrl: 'modules/categorias/views/edit-categoria.client.view.html'
		}).

		// nested states
		// each of these sections will have their own view
		// url will be nested (/createCategoria/info)
		state('createCategoria.info', {
			url: '/info',
			templateUrl: 'modules/categorias/views/form-info.client.view.html'
		}).
		// url will be nested (/createCategoria/content)
		state('createCategoria.content', {
			url: '/content',
			templateUrl: 'modules/categorias/views/form-content.client.view.html'
		}).
		// url will be nested (/createCategoria/layout)
		state('createCategoria.layout', {
			url: '/layout',
			templateUrl: 'modules/categorias/views/form-layout.client.view.html'
		}).
		// url will be nested (/createCategoria/map)
		state('createCategoria.map', {
			url: '/map',
			templateUrl: 'modules/categorias/views/form-map.client.view.html'
		}).
		// url will be nested (/createCategoria/ratings)
		state('createCategoria.ratings', {
			url: '/ratings',
			templateUrl: 'modules/categorias/views/form-ratings.client.view.html'
		}).
		// url will be nested (/createCategoria/preview)
		state('createCategoria.preview', {
			url: '/preview',
			templateUrl: 'modules/categorias/views/form-preview.client.view.html'
		}).
		// url will be nested (/editCategoria/info)
		state('editCategoria.info', {
			url: '/info',
			templateUrl: 'modules/categorias/views/form-info.client.view.html'
		}).
		// url will be nested (/editCategoria/content)
		state('editCategoria.content', {
			url: '/content',
			templateUrl: 'modules/categorias/views/form-content.client.view.html'
		}).
		// url will be nested (/editCategoria/layout)
		state('editCategoria.layout', {
			url: '/layout',
			templateUrl: 'modules/categorias/views/form-layout.client.view.html'
		}).
		// url will be nested (/editCategoria/map)
		state('editCategoria.map', {
			url: '/map',
			templateUrl: 'modules/categorias/views/form-map.client.view.html'
		}).
		// url will be nested (/editCategoria/ratings)
		state('editCategoria.ratings', {
			url: '/ratings',
			templateUrl: 'modules/categorias/views/form-ratings.client.view.html'
		}).
		// url will be nested (/editCategoria/preview)
		state('editCategoria.preview', {
			url: '/preview',
			templateUrl: 'modules/categorias/views/form-preview.client.view.html'
		});
	}
]);

'use strict';

// Categorias controller
angular.module('categorias').controller('CategoriasController', ['$scope', '$stateParams', '$location', 'Authentication', 'Categorias',
	function($scope, $stateParams, $location, Authentication, Categorias ) {
		$scope.authentication = Authentication;

		$scope.preflang = $scope.authentication.user.prefLang;
		//$scope.sortorder = 'name';

		// ui-select test
		$scope.disabled = undefined;

		$scope.enable = function() {
			$scope.disabled = false;
		};

		$scope.disable = function() {
			$scope.disabled = true;
		};

		$scope.clear = function() {
			$scope.categoria.selected = undefined;
		};

		$scope.intro = true;
		$scope.formData = {};
		$scope.categoria = {};

		// Variable for Ratings
		$scope.rate = 4;
		$scope.max = 5;
		$scope.isReadonly = false;

		$scope.hoveringOver = function(value) {
			$scope.overStar = value;
			$scope.percent = 100 * (value / $scope.max);
		};

		$scope.ratingStates = [
			{stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
			{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
			{stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
			{stateOn: 'glyphicon-heart'},
			{stateOff: 'glyphicon-off'}
		];

		// List Categories
		$scope.listCategories = function() {
			$scope.categorias = Categorias.query();
		};

		$scope.action = 'createCategoria';
		// Create new Categoria
		$scope.create = function() {
			// Create new Categoria object
			var categoria = new Categorias ({
				translateId: $scope.formData.translateId,
				mapId: $scope.formData.mapId,
				clusterGeoLocation: $scope.formData.clusterGeoLocation,
				content: $scope.formData.videoUrl,
				imageUrl: $scope.formData.ImageUrl,
				color: $scope.formData.color,
				icon: $scope.formData.icon,
				svg: $scope.formData.svg,
				class: $scope.formData.class,
				material: $scope.formData.material,
				active: $scope.formData.active,
				countbookings: $scope.formData.countbookings,
				countlikes: $scope.formData.countlikes,
				countfollowers: $scope.formData.countfollowers,
				countrecommended: $scope.formData.countrecommended,
				lastCountDate: $scope.formData.lastCountDate,
				ratingAverage: $scope.formData.ratingAverage,
				urlmoreinfo: $scope.formData.urlmoreinfo,
				urltripadvisor: $scope.formData.tripadvisor,
				urlarticle: $scope.formData.urlarticle,
				urlpdf: $scope.formData.urlpdf
			});
			// Redirect after save
			categoria.$save(function(response) {
				$location.path('categorias');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
			// Clear form fields
			$scope.formData.translateId = '';
			$scope.formData.mapId = '';
			$scope.formData.clusterGeoLocation = '';
			$scope.formData.videoUrl = '';
			$scope.formData.ImageUrl = '';
			$scope.formData.color = '';
			$scope.formData.icon = '';
			$scope.formData.svg = '';
			$scope.formData.class = '';
			$scope.formData.material = '';
			$scope.formData.active = '';
			$scope.formData.countbookings = '';
			$scope.formData.countlikes = '';
			$scope.formData.countfollowers= '',
			$scope.formData.countrecommended= '';
			$scope.formData.lastCountDate = '';
			$scope.formData.ratingAverage = 4;
			$scope.formData.urlmoreinfo = '';
			$scope.formData.urltripadvisor = '';
			$scope.formData.urlarticle = '';
			$scope.formData.urlpdf = '';

		};

		// Remove existing Categoria
		$scope.remove = function( categoria ) {
			if ( categoria ) { categoria.$remove();

				for (var i in $scope.categorias ) {
					if ($scope.categorias [i] === categoria ) {
						$scope.categorias.splice(i, 1);
					}
				}
			} else {
				$scope.categoria.$remove(function() {
					$location.path('categorias');
				});
			}
		};

		// Update existing Categoria
		$scope.update = function() {
			var categoria = $scope.formData;
			$scope.action = 'editCategoria';
			categoria.$update(function() {
				$location.path('categorias');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Categorias
		$scope.find = function() {
			$scope.categorias = Categorias.query();
		};

		// Find existing Categoria
		$scope.findOne = function() {
			$scope.action = 'editCategoria';
			$scope.categoria = Categorias.get({
				categoriaId: $stateParams.categoriaId
			});
			$scope.formData = $scope.categoria;
			$scope.formData.translateId = $scope.categoria.translateId;
			console.log('$scope.categoria: ' + $scope.categoria.translateId);
		};
	}
]);

'use strict';

//Categorias service used to communicate Categorias REST endpoints
angular.module('categorias').factory('Categorias', ['$resource',
	function($resource) {
		return $resource('categorias/:categoriaId', { categoriaId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
angular.module('core').config(["$compileProvider", "DEBUG_MODE", function ($compileProvider, DEBUG_MODE) {
  if (!DEBUG_MODE) {
    $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
  }
}]);

angular.module('core').run(["Angularytics", function(Angularytics) {Angularytics.init();}]);
angular.module('core').value('duScrollDuration', 1000);
angular.module('core').value('duScrollOffset', 50);
angular.module('core').run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]);

'use strict';

angular.module('core').controller('AboutController', ['$scope',
	function($scope) {
		$scope.oneAtATime = true;


    $scope.groups = [
      {
        title: 'aboutPage.about.story-label',
        content: 'story-content'
      },
      {
        title: 'mission-label',
        content: 'mission-content'
      },
      {
        title: 'community-label',
        content: 'community-content'
      },
      {
        title: 'progress-label',
        content: 'progress-content'
      },
      {
        title: 'team-label',
        content: 'team-content'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
	}
]);

'use strict';

angular.module('core').controller('ContactController', ['$scope', '$http',
	function($scope, $log, $http) {
		// Controller Logic
		// ...
		//$scope.toggle = offCanvas.toggle;
		$scope.formData = {};
		$log.doLog = true;

		$scope.processForm = function() {
	    //console.log('Im in the controller');

	    // Trigger validation flag.
	    $scope.submitted = true;

	    $http.post('/#!/contact', {
	        name: $scope.formData.name,
	        email: $scope.formData.email,
	        message: $scope.formData.message
	    }).success(function(data, status, headers, config) {
          if(data.success){
              //$location.path('/contact');
							console.log('message sent succesfully');
          }else {
              //do something about the error
							console.log('Error sending the message');
          }
        });
		};

		// Submit contact form
		$scope.emailSupport = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/sendEmail', $scope.formData).success(function(response) {
				// Show user success message and clear form
				//$scope.formData.name,
				//$scope.formData.email,
				//$scope.formData.message,
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				//$scope.formData = null;
				$scope.error = response.message;
			});
		};
	}
]);

'use strict';

angular.module('core').controller('ControlController', ['$scope',
	function($scope) {
		// Control controller logic
		$scope.controlText = 'I\'m a custom control';
		$scope.danger = false;
		$scope.controlClick = function () {
			$scope.danger = !$scope.danger;
			alert('custom control clicked!');
		};
	}
]);

'use strict';

angular.module('core').controller('DatePickerController', ['$scope',
	function($scope) {
		$scope.tomorrow = function() {
		$scope.dt = new Date();
		$scope.dt.setDate($scope.dt.getDate() + 1);
		};
		$scope.tomorrow();

		$scope.showWeeks = false;
		$scope.showButtonBar = false;

		$scope.clear = function () {
			$scope.dt = null;
		};

		$scope.minDate = $scope.dt.setDate($scope.dt.getDate());

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = true;
		};

		$scope.dateOptions = {
			'year-format': 'yy',
			'starting-day': 0
		};

		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
		$scope.format = $scope.formats[1];
	}
]);

'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);

'use strict';

angular.module('core').controller(
  'HomeController',
  ['$scope', '$rootScope', '$translate', '$timeout', '$interval', 'VERSION_TAG', '$log', '$http', 'cfpLoadingBar', '$anchorScroll', 'Demodata',
    function ($scope, $rootScope, $translate, $timeout, $interval, VERSION_TAG, $log, $http, cfpLoadingBar, $anchorScroll, Demodata ) {
    /**
     * Cache busting
     */
    $rootScope.VERSION_TAG = VERSION_TAG;


    /**
     * Translations for the view
     */
    var pageTitleTranslationId = 'PAGE_TITLE';
    var pageContentTranslationId = 'PAGE_CONTENT';

    $translate(pageTitleTranslationId, pageContentTranslationId)
      .then(function (translatedPageTitle, translatedPageContent) {
        $rootScope.pageTitle = translatedPageTitle;
        $rootScope.pageContent = translatedPageContent;
      });

    /**
     * $scope.locale
     */
    $scope.locale = $translate.use();

    /**
     * Provides info about current route path
     */
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $scope.currentPath = current.$$route.originalPath;
    });

    /**
     * Current time
     */
    $scope.currentTime = Date.now();
    $interval(function () {
      $scope.currentTime = Date.now();
    }, 1000);

    /**
     * EVENTS
     */
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      $scope.locale = data.language;
      $rootScope.pageTitle = $translate.instant(pageTitleTranslationId);
      $rootScope.pageContent = $translate.instant(pageContentTranslationId);
    });

      $scope.start = function() {
        cfpLoadingBar.start();
      };

      $scope.complete = function () {
        cfpLoadingBar.complete();
      };

      // fake the initial load so first time users can see it right away:
      $scope.start();
      $scope.fakeIntro = true;
      $timeout(function() {
        $scope.complete();
        $scope.fakeIntro = false;
      }, 750);

      $scope.showPanel = false;

      // section-2 slider
      $scope.slideshow = {};
      $scope.slideshow.slides = [
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/3.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/1.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/7.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/3.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/4.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/9.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/5.jpg'
      ];
      var logId = 0;
      $scope.slideshow.log = [];
      $scope.slideshow.start = function(slider){
        //console.log(slider);
        $scope.slideshow.log.push({ id: ++logId, message: 'start' });
      };
      $scope.slideshow.before = function(){
        $scope.slideshow.log.push({ id: ++logId, message: 'before' });
      };
      $scope.slideshow.after = function(){
        $scope.slideshow.log.push({ id: ++logId, message: 'after' });
      };
      $scope.slideshow.end = function () {
        $scope.slideshow.log.push({ id: ++logId, message: 'end' });
      };

      //section-3 map

      // Reload data action
      $scope.load = function() {
        $scope.data = Demodata.getSampleData();
        dataToRemove = undefined;
      };

      $scope.reload = function() {
        $scope.load();
      };

      // Remove data action
      $scope.remove = function() {
        $scope.api.data.remove(dataToRemove);
      };

      // Clear data action
      $scope.clear = function() {
        $scope.data = [];
      };


      $anchorScroll();
    }
]);

'use strict';

angular.module('core').controller('InfoController', ['$scope', '$log',
	function($scope, $log) {
		// Info controller logic
		$scope.templateValue = 'hello from the template itself';
		$scope.clickedButtonInWindow = function () {
			var msg = 'clicked a window in the template!';
			$log.info(msg);
			alert(msg);
		};
	}
]);

'use strict';

angular.module('core').controller('LanguageController', ['$scope', '$rootScope', '$translate', 'tmhDynamicLocale', '$locale',
 function ($scope, $rootScope, $translate, tmhDynamicLocale, $locale) {

    $scope.langMenu = [{
      'title': 'German',
      'countryCode': 'de'
    },
    {
      'title': 'French',
      'countryCode': 'fr'
    },
    {
      'title': 'English',
      'countryCode': 'en'
    },
    {
      'title': 'Spanish',
      'countryCode': 'es'
    }];

    $scope.changeLanguage = function (languageKey) {
      $translate.use(languageKey);
      $rootScope.$locale = $locale;
      $rootScope.changeLocale = tmhDynamicLocale.set(languageKey);
      $rootScope.$locale.id = languageKey;
      //console.log('languageKey: ' + languageKey);
      //console.log('$locale.id: ' + $locale.id);

    };
  }
]);

'use strict';

angular.module('core').controller('MapController', ['$scope', 'leafletEvents', 'leafletData',
	function($scope, leafletEvents, leafletData) {
		// Map controller logic
		// ...
		var tilesDict = {
	    openstreetmap: {
	        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	        options: {
	            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	        }
	    },
	    opencyclemap: {
	        url: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
	        options: {
	            attribution: 'All maps &copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, map data &copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>'
	        }
	    },
			mapbox_terrain: {
					name: 'Mapbox Terrain',
					url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
					type: 'xyz',
					layerOptions: {
							apikey: 'pk.eyJ1IjoidHJhdmVsc2NvbG9tYmlhIiwiYSI6IlhLY3E0XzgifQ.KiQ03nWDM-zLKNkyuv4LVg',
							mapid: 'travelscolombia.lkfd41h4'
					}
			}
		};
		angular.extend($scope, {
		    defaults: {
		        tileLayer: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		        maxZoom: 14,
		        path: {
		            weight: 10,
		            color: '#800000',
		            opacity: 1
		        }
		    }
		});

		angular.extend($scope, {
		    center: {
		        lat: 10.80632844047682,
		        lng: -74.267578125,
		        zoom: 8
		    },
				tiles: tilesDict.openstreetmap,
        layers: {
            baselayers: {
                osm: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                mapbox_terrain: {
                    name: 'Mapbox Terrain',
                    url: 'https://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                    type: 'xyz',
                    layerOptions: {
                        apikey: 'pk.eyJ1IjoidHJhdmVsc2NvbG9tYmlhIiwiYSI6IlhLY3E0XzgifQ.KiQ03nWDM-zLKNkyuv4LVg',
                        mapid: 'travelscolombia.lkfd41h4'
                    }
                }
            }
        }
		});


    $scope.markers = new Array();

    $scope.$on("leafletDirectiveMap.click", function(event, args){
        var leafEvent = args.leafletEvent;

        $scope.markers.push({
            lat: leafEvent.latlng.lat,
            lng: leafEvent.latlng.lng,
            message: "My Added Marker"
        });
    });
	}
]);

'use strict';

angular.module('core').controller('ModalController', ['$scope', '$rootScope', '$translate', '$modal', 'ngDialog',
	function($scope, $rootScope, $translate, $modal, ngDialog) {
		// Modal controller logic
		// ...
		$scope.modalForgotPassword = function () {
			$rootScope.theme = 'ngdialog-theme-flat';
			ngDialog.open({
				template: '/modules/users/views/password/modal-forgot-password.client.view.html',
				controller: 'PasswordController',
				className: 'ngdialog-theme-flat'
			});
		};

		$scope.modalChangePassword = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/users/views/settings/modal-change-password.client.view.html',
				controller: 'SettingsController',
				className: 'ngdialog-theme-plain'
			});
		};

		$scope.modalEditProfile = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/users/views/settings/modal-edit-profile.client.view.html',
				controller: 'SettingsController',
				className: 'ngdialog-theme-plain'
			});
		};

		$scope.modalSocialAccounts = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/users/views/settings/modal-social-accounts.client.view.html',
				controller: 'SettingsController',
				className: 'ngdialog-theme-plain'
			});
		};
		//
		// Modal LoginCustomer
		$scope.loginCustomer = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				template: '/modules/bookings/views/modal.signin.html',
				className: 'ngdialog-theme-plain',
				controller: 'AuthenticationController',
				preCloseCallback: function () {
				}
			});
		};

		$scope.modalLogin = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				controller: 'AuthenticationController',
				template: '/modules/users/views/authentication/modal-signin.client.view.html',
				className: 'ngdialog-theme-flat'
			});
		};


		$scope.registerCustomer = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.open({
				controller: 'AuthenticationController',
				template: '/modules/users/views/authentication/modal-signup.client.view.html',
				className: 'ngdialog-theme-flat',
				closeByDocument: true,
				closeByEscape: true
			});
		};

		$scope.openModalLatestChanges = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.latest.changes.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Tour View
		$scope.openTourView = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-view.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Tour Tips
		$scope.showTourTips = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-tips.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Details
		$scope.showTourDetails = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-details.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		// Modal Tour Confirm Delete
		$scope.confirmDeleteTour = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-delete.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Map
		$scope.showTourMap = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-map.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Included
		$scope.showTourIncluded = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.tour-included.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal Tour Itinerary
		$scope.showTourItinerary = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.tour-itinerary.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		// Modal contact Map
		$scope.showContactMap = function () {
			$scope.value = true;
			ngDialog.open({
				controller: 'ContactController',
				template: '/modules/core/modals/modal.contact-map.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		// Modal contact Map
		$scope.showOfficeSantaMarta = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.office.santamarta.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};
		// Modal contact Map
		$scope.showOfficeTaganga = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.office.taganga.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};
		// Modal contact Map
		$scope.showOfficeRiohacha = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.office.riohacha.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Guide Info
		$scope.showGuideInfo = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.guideInfo.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		$scope.showGuideInfoPublic = function () {
			$scope.value = true;
			$scope.locale = $translate.use();
			//console.log('locale: ' + $scope.locale);
			ngDialog.open({
				template: '/modules/core/modals/modal.guideInfoPublic.html',
				controller: 'GuidesController',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};


		$scope.deleteGuide = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.guide-delete.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Guide Confirm Delete
		$scope.confirmDeleteGuide = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.guide-delete.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		$scope.reportGuide = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.reportGuide.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		// Modal Category Confirm Delete
		$scope.confirmDeleteCategory = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.category-delete.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};

		$scope.modalTerms = function () {
			$scope.value = true;

			ngDialog.open({
				template: '/modules/core/modals/modal.terms-conditions.html',
				className: 'ngdialog-theme-flat',
				scope: $scope
			});
		};
		$rootScope.$on('ngDialog.opened', function (e, $dialog) {
			//console.log('ngDialog opened: ' + $dialog.attr('id'));
		});

		$rootScope.$on('ngDialog.closed', function (e, $dialog) {
			//console.log('ngDialog closed: ' + $dialog.attr('id'));
		});
	}
]);

'use strict';

angular.module('core').controller('NavController', ['$scope', 'offCanvas',
	function($scope, offCanvas) {
		// My off canvas controller logic
		// ...
		$scope.toggle = offCanvas.toggle;
	}
]);

'use strict';

angular.module('core')
  .controller('NavmenuController', ['$scope', function ($scope) {
    $scope.sideMenu = [{
      'title': 'Top',
      'icon': 'home',
      'link': '/'
    }, {
      'title': 'About',
      'icon': 'zoom-in',
      'link': '/about'
    }, {
      'title': 'Services',
      'icon': 'globe',
      'link': '/#section-3'
    }, {
      'title': 'Booking',
      'icon': 'shopping-cart',
      'link': '/#section-4'
    }, {
      'title': 'Images',
      'icon': 'picture',
      'link': '/#section-5'
    }, {
      'title': 'Reviews',
      'icon': 'pencil',
      'link': '/#section-6'
    }, {
      'title': 'Latest',
      'icon': 'paperclip',
      'link': '/#section-7'
    }, {
      'title': 'Social',
      'icon': 'share',
      'link': '/#section-8'
    }, {
      'title': 'Feedback',
      'icon': 'send',
      'link': '/#section-9'
    }
   ];

    $scope.isOpen = false;

    $scope.open = function () {
      $scope.isOpen = true;
    };

    $scope.toggle = function () {
      $scope.isOpen = !$scope.isOpen;
    };

    $scope.close = function () {
      $scope.isOpen = false;
    };
   }
]);

'use strict';

angular.module('core').controller('WindowCtrl', ['$scope',
	function($scope) {
		// Window controller logic
		$scope.place = {};
		$scope.showPlaceDetails = function(param) {
			$scope.place = param;
		};
	}
]);

'use strict';

angular.module('core').directive('activemenu', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Activemenu directive logic 
				// ...
				
				element.text('this is the activemenu directive');
			}
		};
	}
]);
'use strict';

angular.module('core').directive('autoRefresh', [
	function($timeout) {
		return {
			restrict: 'A',

			link: function(scope, elem, attrs){

			}
		};
	}
]);

'use strict';

angular.module('core').directive('bgImage', ["$window", "$timeout", function ($window, $timeout) {
	// Adapted from http://bavotasan.com/2011/full-sizebackground-image-jquery-plugin/ Thanks @bavotasan!
	return function (scope, element, attrs) {
        var resizeBG = function () {
            var bgwidth = element.width();
            var bgheight = element.height();

            var winwidth = $window.innerWidth;
            var winheight = $window.innerHeight;

            var widthratio = winwidth / bgwidth;
            var heightratio = winheight / bgheight;

            var widthdiff = heightratio * bgwidth;
            var heightdiff = widthratio * bgheight;

            if (heightdiff > winheight) {
                element.css({
                    width: winwidth + 'px',
                    height: heightdiff + 'px'
                });
            } else {
                element.css({
                    width: widthdiff + 'px',
                    height: winheight + 'px'
                });
            }
        };

        var windowElement = angular.element($window);
        windowElement.resize(resizeBG);

        element.bind('load', function () {
            resizeBG();
        });
    };
}]);

'use strict';

angular.module('core').directive('contenteditable', [
	function() {
		return {
			require: '?ngModel',
			link: function(scope, element, attrs, ctrl) {

				// Do nothing if this is not bound to a model
				if (!ctrl) { return; }

					// Checks for updates (input or pressing ENTER)
					// view -> model
					element.bind('input enterKey', function() {
						var rerender = false;
						var html = element.html();

						if (attrs.noLineBreaks) {
							html = html.replace(/<div>/g, '').replace(/<br>/g, '').replace(/<\/div>/g, '');
							rerender = true;
						}

						scope.$apply(function() {
							ctrl.$setViewValue(html);
							if(rerender) {
								ctrl.$render();
							}
						});
					});

					element.keyup(function(e){
						if(e.keyCode === 13){
							element.trigger('enterKey');
						}
					});

					// model -> view
					ctrl.$render = function() {
						element.html(ctrl.$viewValue);
					};

					// load init value from DOM
					ctrl.$render();
				}
			};
	}
]);

'use strict';

angular.module('core').directive('fullScreenToggle', [
	function() {
		return {
      link: function(scope, e, a) {
        this.click = function() {
          e.parent().toggleClass('full-screen');
          e.text( e.parent().hasClass('full-screen') ? 'Exit Full Screen' : 'Full Screen' );
          google.maps.event.trigger(scope.map, 'resize');
        };
        e.on('click', this.click);
        scope.fullScreenToggle = this;
      }
    };
	}
]);

'use strict';

angular.module('core').directive('ngTranslateLanguageSelect', [
	function (LocaleService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''+
        '<div class="language-select" ng-if="visible">'+
          '<label>'+
            '{{"global.menu.Language" | translate}}:'+
            '<select ng-model="currentLocaleDisplayName"'+
              'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
              'ng-change="changeLanguage(currentLocaleDisplayName)">'+
            '</select>'+
          '</label>'+
        '</div>'+
      '',
      controller: ["$scope", function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
        $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);
        };
      }]
    };
  }
]);

'use strict';

angular.module('core').directive('passObject', ['ngDialog',
	function(ngDialog) {
		return {
        restrict: 'A',
        scope: { passedObject: '=' },
        template: "<div class='directive'>This is the value passed into this directive = {{passedObject}}!</div>",
        link: function($scope, element){
            element.on('click',function(){
                ngDialog.open({
                    template: '<div>By updating i need it to reflect in the root scope:<br /><br />' +
                              '<input type="text" ng-model="passedObject"/></div>',
                    plain: true,
                    scope: $scope,
                    controller: ['$scope', function($scope){
                        $scope.$watch('passedObject', function(passedObject){
                            //What do i need to do? it seems like the scope at this level is updating how come the parent is not?
                            if(window.console){console.log('updated with: ' + passedObject);}
                            //$scope.$apply();
                        });
                    }]
                })
            });
        }
    };
	}
]);

'use strict';

angular.module('core').directive('storeInfo', [
	function() {
		var StoreInfo = function(s, e, a) {
      this.scope = s;
      this.element = e;
      this.attrs = a;
      this.show = function() {
        this.element.css('display', 'block');
        this.scope.$apply();
      }
      this.hide = function() {
        this.element.css('display', 'none');
      }
    };
    return {
      templateUrl: '/modules/core/views/tour-info.html',
      link: function(scope, e, a) {
        scope.storeInfo= new StoreInfo(scope, e, a);
      }
    };
	}
]);

'use strict';

//Demodata service used for loading sample data
angular.module('core').service('Demodata', [
  function Demodata() {
    return {
      getSampleData: function() {

        return [
        // Order is optional. If not specified it will be assigned automatically
          {name: 'Milestones', height: '3em', sortable: false, classes: 'gantt-row-milestone', color: '#45607D', tasks: [
          // Dates can be specified as string, timestamp or javascript date object. The data attribute can be used to attach a custom object
          {name: 'Kickoff', color: '#93C47D', from: '2013-10-07T09:00:00', to: '2013-10-07T10:00:00', data: 'Can contain any custom data or object'},
          {name: 'Concept approval', color: '#93C47D', from: new Date(2013, 9, 18, 18, 0, 0), to: new Date(2013, 9, 18, 18, 0, 0), est: new Date(2013, 9, 16, 7, 0, 0), lct: new Date(2013, 9, 19, 0, 0, 0)},
          {name: 'Development finished', color: '#93C47D', from: new Date(2013, 10, 15, 18, 0, 0), to: new Date(2013, 10, 15, 18, 0, 0)},
          {name: 'Shop is running', color: '#93C47D', from: new Date(2013, 10, 22, 12, 0, 0), to: new Date(2013, 10, 22, 12, 0, 0)},
          {name: 'Go-live', color: '#93C47D', from: new Date(2013, 10, 29, 16, 0, 0), to: new Date(2013, 10, 29, 16, 0, 0)}
          ], data: 'Can contain any custom data or object'}
        ];
      }
    };
  }
]);

'use strict';
/**
 * @ngdoc function
 * @name translateApp.factory:LocaleService
 * @description
 * # LocaleService
 * Service for setting/getting current locale
 */
angular.module('core').service('LocaleService', [
	function ($translate, LOCALES, $rootScope, tmhDynamicLocale) {
    // VARS
    var localesObj = LOCALES.locales;

    // locales and locales display names
    var _LOCALES = Object.keys(localesObj);
    if (!_LOCALES || _LOCALES.length === 0) {
      console.error('There are no _LOCALES provided');
    }
    var _LOCALES_DISPLAY_NAMES = [];
    _LOCALES.forEach(function (locale) {
      _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
    });

    var currentLocale = $translate.proposedLanguage();// because of async loading

    // METHODS
    var checkLocaleIsValid = function (locale) {
      return _LOCALES.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
      if (!checkLocaleIsValid(locale)) {
        console.error('Locale name "' + locale + '" is invalid');
        return;
      }
      startLoadingAnimation();
      currentLocale = locale;
      $translate.use(locale);
    };

    /**
     * Stop application loading animation when translations are loaded
     */
    var $html = angular.element('html');
    var LOADING_CLASS = 'app-loading';

    function startLoadingAnimation() {
      $html.addClass(LOADING_CLASS);
    }

    function stopLoadingAnimation() {
      $html.removeClass(LOADING_CLASS);
    }

    // EVENTS
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html

      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));// load Angular locale
    });

    $rootScope.$on('$localeChangeSuccess', function () {
      stopLoadingAnimation();
    });

    return {
      getLocaleDisplayName: function () {
        return localesObj[currentLocale];
      },
      setLocaleByDisplayName: function (localeDisplayName) {
        setLocale(
          _LOCALES[
            _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)// get locale index
            ]
        );
      },
      getLocalesDisplayNames: function () {
        return _LOCALES_DISPLAY_NAMES;
      }
    };
  }
]);

'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);

'use strict';

angular.module('core').factory('QueueService', [
	function($rootScope) {
		// Queue service service logic
		// ...
		var queue = new createjs.LoadQueue(true);

    function loadManifest(manifest) {
        queue.loadManifest(manifest);

        queue.on('progress', function (event) {
            $rootScope.$broadcast('queueProgress', event);
        });

        queue.on('complete', function () {
            $rootScope.$broadcast('queueComplete', manifest);
        });
    }

    return {
        loadManifest: loadManifest
    };
	}
]);

'use strict';

// Configuring the Guides module
angular.module('guides').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Guias', 'guides', 'dropdown', '/guides(/create)?');
		Menus.addSubMenuItem('topbar', 'guides', 'Lista de los guias', 'guides');
		Menus.addSubMenuItem('topbar', 'guides', 'Crear un guia', 'guides/create');
	}
]);

angular.module('guides').config(["uiSelectConfig", function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
}]);

'use strict';

//Setting up route
angular.module('guides').config(['$stateProvider',
	function($stateProvider) {
		// Guides state routing
		$stateProvider.
		state('listGuides', {
			url: '/guides',
			templateUrl: 'modules/guides/views/list-guides.client.view.html'
		}).
		state('createGuide', {
			url: '/guides/create',
			templateUrl: 'modules/guides/views/create-guide.client.view.html'
		}).
		state('viewGuide', {
			url: '/guides/:guideId',
			templateUrl: 'modules/guides/views/view-guide.client.view.html'
		}).
		state('editGuide', {
			url: '/guides/:guideId/edit',
			templateUrl: 'modules/guides/views/edit-guide.client.view.html'
		});
	}
]);

'use strict';

// Guides controller
angular.module('guides').controller('GuidesController', ['$scope', '$rootScope', '$http', '$filter', '$timeout', '$translate', '$stateParams', '$location', '$anchorScroll', 'Authentication', 'Guides',
	function($scope, $rootScope, $http, $filter, $timeout, $translate, $stateParams, $location, $anchorScroll, Authentication, Guides ) {
		$scope.authentication = Authentication;

		$scope.preflang = $translate.use();

		$scope.action = 'createGuide';

		// ui-select test
		$scope.disabled = undefined;

		$scope.enable = function() {
			$scope.disabled = false;
		};

		$scope.disable = function() {
			$scope.disabled = true;
		};

		$scope.clear = function() {
			$scope.person.selected = undefined;
		};

		$scope.formData = {};
		$scope.person = {};
		$scope.listguides = function() {
			$scope.people = Guides.query();
		};

		$scope.canLike = true;
		$scope.addLike = function() {
			$scope.canLike = false;
			$scope.guide.counterLikes += 1;
		};
		$scope.canRecommend = true;
		$scope.addRecommended = function() {
			$scope.canRecommend = false;
			$scope.guide.counterRecommended += 1;
		};
		$scope.multipleDemo = {};
	  $scope.multipleDemo.cats = ['CiudadPerdida'];
	  $scope.multipleDemo.selectedCats = [];

		$scope.formatDate = function(dt) {
			$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd/MM/yyyy', 'shortDate'];
			$scope.format = $scope.formats[2];
			var date = dt;
			$scope.startDate = $filter('date') ($scope.dt, $scope.format);
			$scope.formData.dateTeamMember = $scope.startDate;
		};

		$scope.address = {};
		$scope.refreshAddresses = function(address) {
			var params = {address: address, sensor: false};
			return $http.get(
				'http://maps.googleapis.com/maps/api/geocode/json',
				{params: params}
			).then(function(response) {
				$scope.addresses = response.data.results;
			});
		};

		$scope.image = null;

		$scope.Images = [{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/ANTONIO-HIGUITA.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/ARGEMIRO-BONNET.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/ARIEL-GALLEGO.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/guia01.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/JHON-JAIRO-DE-LA-HOZ.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/MIGUEL-GOMEZ.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/SIGILFREDO-CAMACHO.png'
		},
		{
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425589556/assets/demo-expotur/guias/SIXTO-RAMÍREZ.png'
		}];


		// Create new Guide
		$scope.create = function() {
			// Create new Guide object
			var guide = new Guides ({
				name: $scope.formData.name,
				nickName: $scope.formData.nickName,
				email: $scope.formData.email,
				phone: $scope.formData.phone,
				locationName: $scope.formData.locationname,
				intro_en: $scope.formData.introEN,
				intro_es: $scope.formData.introES,
				intro_fr: $scope.formData.introFR,
				intro_de: $scope.formData.introDE,
				speaksEnglish: $scope.formData.speakenglish,
				available: $scope.formData.available,
				pictureUrl: $scope.formData.pictureUrl,
				yearsExperience:  $scope.formData.yearsExperience,
				dateTeamMember:  $scope.formData.dateTeamMember,
				categories: $scope.multipleDemo.selectedCats,
				counterRecommended: $scope.formData.yearsExperience * 12,
				counterLikes: $scope.formData.yearsExperience * 24
			});

			// Redirect after save
			guide.$save(function(response) {
				$location.path('guides');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
			// Clear form fields
			$scope.formData.name = '';
			$scope.formData.email = '';
			$scope.formData.phone = '';
			$scope.formData.locationName = '';
			$scope.formData.introEN = '';
			$scope.formData.introES = '';
			$scope.formData.introFR = '';
			$scope.formData.introDE = '';
			$scope.formData.speakenglish = false;
			$scope.formData.available = true;
			$scope.formData.pictureUrl = '';
		};


		// Remove existing Guide
		$scope.remove = function( guide ) {
			if ( guide ) { guide.$remove();

				for (var i in $scope.guides ) {
					if ($scope.guides [i] === guide ) {
						$scope.guides.splice(i, 1);
					}
				}
			} else {
				$scope.guide.$remove(function() {
					$location.path('guides');
				});
			}
		};

		// Update existing Guide
		$scope.update = function() {
			$scope.action = 'editGuide';
			$scope.guide.categories = $scope.multipleDemo.selectedCats;
			var guide = $scope.guide;
			guide.$update(function() {
				$location.path('guides');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Guides
		$scope.find = function() {
			$scope.guides = Guides.query();
		};

		// Find existing Guide
		$scope.findOne = function() {
			$scope.action = 'editGuide';
			$scope.guide = Guides.get({
				guideId: $stateParams.guideId
			});
			//$scope.formData = $scope.guide;
		};

		$scope.layoutMode = 0;
		$scope.list = [];
		//$scope.currentAnimation;
		$scope.isShow = true;
		$scope.animations = ['toggle', 'rotate-in'];

		$scope.addItem = function (animation) {
			$scope.animation = animation;
			//for (var i = 0; i < 6; i++) {
			//	$timeout(function () {
			//		$scope.list.push({ title : 'item' });
			//	}, 100 * i);
			//};
		};

		$scope.removeItem = function (item) {
			var index = $scope.list.indexOf(item);
			$scope.list.remove(index);
		};

		$scope.cleanList = function () {
			//for (var i = 0; i < $scope.list.length; i++) {
			//	$timeout(function () {
			//		$scope.list.pop();
			//	}, 100 * i);
			//};
		};

		// Play all animation, it will auto clean item list.
		$scope.autoPlayAnimation = function (index) {
			var animation = $scope.animations[index];
			if (animation) {
				$scope.currentAnimation = animation;
				$scope.addItem(animation);
				$timeout(function () {
					$scope.cleanList();
				}, 1000);
				$timeout(function () {
					$scope.autoPlayAnimation(++index);
				}, 2000);
			}
			else {
				$scope.currentAnimation = $scope.animations[1];
			}
		};

		$scope.switchGridMode = function () {
			$scope.layoutMode = 0;
		};

		$scope.switchListMode = function () {
			$scope.layoutMode = 1;
		};

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		};

		$anchorScroll();
	}
]);

'use strict';

angular.module('guides').filter('propsFilter', [
	function() {
		return function(input) {
			// Props filter directive logic
			// ...
			return function(items, props) {
		    var out = [];

		    if (angular.isArray(items)) {
		      items.forEach(function(item) {
		        var itemMatches = false;

		        var keys = Object.keys(props);
		        for (var i = 0; i < keys.length; i++) {
		          var prop = keys[i];
		          var text = props[prop].toLowerCase();
		          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
		            itemMatches = true;
		            break;
		          }
		        }

		        if (itemMatches) {
		          out.push(item);
		        }
		      });
		    } else {
		      // Let the output be the input untouched
		      out = items;
		    }

		    return out;
		  };
		};
	}
]);

'use strict';

//Guides service used to communicate Guides REST endpoints
angular.module('guides').factory('Guides', ['$resource',
	function($resource) {
		return $resource('guides/:guideId', { guideId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
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

'use strict';

// Milestones controller
angular.module('milestones').controller('MilestonesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Milestones',
	function($scope, $stateParams, $location, Authentication, Milestones) {
		$scope.authentication = Authentication;
		$scope.preflang = $scope.authentication.user.prefLang;
		$scope.intro = true;
		$scope.formData = {};
		$scope.milestone = {};
		$scope.averagePercentCompleted =0;

		$scope.action = 'createMilestone';
		console.log('preflang: ' + $scope.preflang);

		// Create new Milestone
		$scope.create = function() {
			// Create new Milestone object
			var milestone = new Milestones ({
				serviceId: $scope.formData.serviceId,
				isActive: $scope.formData.isActive,
				moduleName: $scope.formData.ModuleName,
				overallStatus: $scope.formData.overallStatus,
				internalNote: $scope.formData.internalNote,
				comment: $scope.formData.comment,
				estimatedDaysWork: $scope.formData.estimatedDaysWork,
				devDiffLevelFactor: $scope.formData.devDiffLevelFactor,
				percentCompleted: $scope.formData.percentCompleted,
				isCompleted: $scope.formData.isCompleted,
				minCost: $scope.formData.minCost,
				hasBeenInvoiced: $scope.formData.hasBeenInvoiced,
				quoteUrl: $scope.formData.quoteUrl,
				invoiceUrl: $scope.formData.invoiceUrl,
				caseStudyUrl: $scope.formData.caseStudyUrl,
				imageUrl: $scope.formData.imageUrl,
				screenShotUrl: $scope.formData.screenShotUrl,
				fisrtDepositPaid: $scope.formData.fisrtDepositPaid,
				secondDepositPaid: $scope.formData.secondDepositPaid,
				balancePaid: $scope.formData.balancedPaid,
				fisrtDepositDate: $scope.formData.fisrtDepositDate,
				secondDepositDate: $scope.formData.secondDepositDate,
				balanceDate: $scope.formData.balanceDate,
				startDate: $scope.formData.startDate,
				approvedDate: $scope.formData.approvedDate,
				publishDate: $scope.formData.publishDate
			});

			// Redirect after save
			milestone.$save(function(response) {
				$location.path('milestones');

				// Clear form fields
				$scope.formData = {};
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Milestone
		$scope.remove = function(milestone) {
			if ( milestone ) {
				milestone.$remove();

				for (var i in $scope.milestones) {
					if ($scope.milestones [i] === milestone) {
						$scope.milestones.splice(i, 1);
					}
				}
			} else {
				$scope.milestone.$remove(function() {
					$location.path('milestones');
				});
			}
		};

		// Update existing Milestone
		$scope.update = function() {
			$scope.action = 'editMilestone';
			var milestone = $scope.milestone;

			milestone.$update(function() {
				$location.path('milestones');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Milestones
		$scope.find = function() {
			$scope.milestones = Milestones.query();
		};

		// Calculate Average
		$scope.averagePercentCompleted = function(){
     	var total = 0;
			var avg = 0;
			var days = 0;
			for (var i = 1; i < $scope.milestones.length -2; i++) {
			      total = total + $scope.milestones[i].percentCompleted;
						days = days + ($scope.milestones[i].estimatedDaysWork * $scope.milestones[i].percentCompleted / 100);
			    }
			avg = total / ($scope.milestones.length-2);
     $scope.averagePercentDone = avg;
		$scope.daysLeft = days;
		};

		// Find existing Milestone
		$scope.findOne = function() {
			$scope.action = 'editMilestone';
			$scope.milestone = Milestones.get({
				milestoneId: $stateParams.milestoneId
			});
			$scope.formData = $scope.milestone;
		};
	}
]);

'use strict';

//Milestones service used to communicate Milestones REST endpoints
angular.module('milestones').factory('Milestones', ['$resource',
	function($resource) {
		return $resource('milestones/:milestoneId', { milestoneId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('places').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Sitios', 'places', 'dropdown', '/places(/create)?');
		Menus.addSubMenuItem('topbar', 'places', 'Lista de los sitios', 'places');
		Menus.addSubMenuItem('topbar', 'places', 'Nuevo sitio', 'places/create');
	}
]);

'use strict';

//Setting up route
angular.module('places').config(['$stateProvider',
	function($stateProvider) {
		// Places state routing
		$stateProvider.
		state('listPlaces', {
			url: '/places',
			templateUrl: 'modules/places/views/list-places.client.view.html'
		}).
		state('createPlace', {
			url: '/places/create',
			templateUrl: 'modules/places/views/create-place.client.view.html'
		}).
		state('demoPlace', {
			url: '/places/demo',
			templateUrl: 'modules/places/views/demo-place.client.view.html'
		}).
		state('viewPlace', {
			url: '/places/:placeId',
			templateUrl: 'modules/places/views/view-place.client.view.html'
		}).
		state('editPlace', {
			url: '/places/:placeId/edit',
			templateUrl: 'modules/places/views/edit-place.client.view.html'
		});
	}
]);

'use strict';

// Places controller
angular.module('places').controller('DemoController', ['$scope',
	function($scope) {
		//$scope.authentication = Authentication;

		angular.extend($scope, {
				center: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
        },
				london: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
        },
				markers: {
            m1: {
                lat: 51.505,
                lng: -0.09,
                focus: true,
                draggable: false,
                message: "Hi there!",
                icon: {}
            }
        },
        iconA: {},
        iconB: {
        	iconUrl: 'img/leaf-orange.png',
        	shadowUrl: 'img/leaf-shadow.png',
        	iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62]
        },
        iconC: {
            type: 'awesomeMarker',
            icon: 'tag',
            markerColor: 'red'
        },
        iconD: {
            type: 'makiMarker',
            icon: 'beer',
            color: '#f00',
            size: "l"
        },
        iconE: {
            type: 'extraMarker',
            icon: 'fa-star',
            color: '#f00',
            prefix: 'fa',
            shape: 'circle'
        }
    });
    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log("Leaflet Click");
    });
    $scope.$on('leafletDirectiveMarker.popupopen', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log("Leaflet Popup Open");
    });
    $scope.$on('leafletDirectiveMarker.popupclose', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log("Leaflet Popup Close");
    });
	}
]);

'use strict';

// Places controller
angular.module('places').controller('MarkerController', ['$scope', '$stateParams',
'$location', 'Authentication', '$translate', 'Places', 'Categorias', 'leafletData', 'leafletEvents',
	function($scope, $stateParams, $location, Authentication, $translate, Places, Categorias, leafletData, leafletEvents) {
		$scope.authentication = Authentication;
		//$scope.formData = {};
		//$scope.prefLang = $translate.use();
		//$scope.formData.webPageUrl = 'http://' + $scope.prefLang + '.wikipedia.org/wiki/';
		//$scope.myData = {"type":"Feature","id":"COL","properties":{"name":"Colombia", "more":"url src='http://#'"},"geometry":{"type":"Polygon","coordinates":[[[-75.373223,-0.152032],[-75.801466,0.084801],[-76.292314,0.416047],[-76.57638,0.256936],[-77.424984,0.395687],[-77.668613,0.825893],[-77.855061,0.809925],[-78.855259,1.380924],[-78.990935,1.69137],[-78.617831,1.766404],[-78.662118,2.267355],[-78.42761,2.629556],[-77.931543,2.696606],[-77.510431,3.325017],[-77.12769,3.849636],[-77.496272,4.087606],[-77.307601,4.667984],[-77.533221,5.582812],[-77.318815,5.845354],[-77.476661,6.691116],[-77.881571,7.223771],[-77.753414,7.70984],[-77.431108,7.638061],[-77.242566,7.935278],[-77.474723,8.524286],[-77.353361,8.670505],[-76.836674,8.638749],[-76.086384,9.336821],[-75.6746,9.443248],[-75.664704,9.774003],[-75.480426,10.61899],[-74.906895,11.083045],[-74.276753,11.102036],[-74.197223,11.310473],[-73.414764,11.227015],[-72.627835,11.731972],[-72.238195,11.95555],[-71.75409,12.437303],[-71.399822,12.376041],[-71.137461,12.112982],[-71.331584,11.776284],[-71.973922,11.608672],[-72.227575,11.108702],[-72.614658,10.821975],[-72.905286,10.450344],[-73.027604,9.73677],[-73.304952,9.152],[-72.78873,9.085027],[-72.660495,8.625288],[-72.439862,8.405275],[-72.360901,8.002638],[-72.479679,7.632506],[-72.444487,7.423785],[-72.198352,7.340431],[-71.960176,6.991615],[-70.674234,7.087785],[-70.093313,6.960376],[-69.38948,6.099861],[-68.985319,6.206805],[-68.265052,6.153268],[-67.695087,6.267318],[-67.34144,6.095468],[-67.521532,5.55687],[-67.744697,5.221129],[-67.823012,4.503937],[-67.621836,3.839482],[-67.337564,3.542342],[-67.303173,3.318454],[-67.809938,2.820655],[-67.447092,2.600281],[-67.181294,2.250638],[-66.876326,1.253361],[-67.065048,1.130112],[-67.259998,1.719999],[-67.53781,2.037163],[-67.868565,1.692455],[-69.816973,1.714805],[-69.804597,1.089081],[-69.218638,0.985677],[-69.252434,0.602651],[-69.452396,0.706159],[-70.015566,0.541414],[-70.020656,-0.185156],[-69.577065,-0.549992],[-69.420486,-1.122619],[-69.444102,-1.556287],[-69.893635,-4.298187],[-70.394044,-3.766591],[-70.692682,-3.742872],[-70.047709,-2.725156],[-70.813476,-2.256865],[-71.413646,-2.342802],[-71.774761,-2.16979],[-72.325787,-2.434218],[-73.070392,-2.308954],[-73.659504,-1.260491],[-74.122395,-1.002833],[-74.441601,-0.53082],[-75.106625,-0.057205],[-75.373223,-0.152032]]]}};

		//$scope.$watch("markers", function(newValue, oldValue) {
		//	console.log($scope.markers.m1);
		//});
		// Update category field
		$scope.updateMarker = function(marker) {
			$scope.markers.m1.lat = marker;
		};

		$scope.initForm = function() {
			// Create new Place object
			$scope.formData = {};
			$scope.prefLang = $translate.use();
		};

		// Update category field
		$scope.updateCategory = function(name,color) {
			$scope.formData.category = name;
			$scope.formData.color = color;
		};
		// Update category field
		$scope.updateWebPageUrl = function(name) {
			$scope.prefLang = $translate.use();
			//$scope.formData.pictureUrl = 'https://res.cloudinary.com/fits/image/upload/v1425567455/colombia/' + name + '.jpg';
			$scope.formData.webPageUrl = 'http://' + $scope.prefLang + '.wikipedia.org/wiki/' + name;
		};

		// Create new Place
		$scope.create = function() {
			// Create new Place object
			$scope.formData = {};
			$scope.prefLang = $translate.use();
			$scope.geometry = {};
			$scope.geometry.coordinates = [];
			$scope.geometry.coordinates[0] = $scope.markers.m1.lng;
			$scope.geometry.coordinates[1] = $scope.markers.m1.lat;
 			$scope.properties ={};
			$scope.properties.name = $scope.formData.name;
			$scope.properties.description = $scope.formData.description;
			$scope.properties.category = $scope.formData.category;
			$scope.properties.pictureUrl = $scope.formData.pictureUrl;
			$scope.properties.webPageUrl = $scope.formData.webPageUrl;
			$scope.properties.color = $scope.formData.color;
			$scope.properties.icon = $scope.formData.icon;
			$scope.properties.zoom = $scope.formData.zoom;

			var place = new Places ({
				geometry: $scope.geometry,
				properties: $scope.properties
			});

			// Redirect after save
			place.$save(function(response) {
				$location.path('places');

				// Clear form fields
				//$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Place
		$scope.remove = function(place) {
			if ( place ) {
				place.$remove();

				for (var i in $scope.places) {
					if ($scope.places [i] === place) {
						$scope.places.splice(i, 1);
					}
				}
			} else {
				$scope.place.$remove(function() {
					$location.path('places');
				});
			}
		};

		// Update existing Place
		$scope.update = function() {
			$scope.geometry = {};
			$scope.geometry.coordinates = [];
			$scope.geometry.coordinates[0] = $scope.markers.m1.lng;
			$scope.geometry.coordinates[1] = $scope.markers.m1.lat;
			$scope.place.properties.name = $scope.place.properties.name;
			$scope.place.properties.description = $scope.place.properties.description;
			$scope.place.properties.category = $scope.place.properties.category;
			$scope.place.properties.webPageUrl = $scope.formData.webPageUrl;
			$scope.place.properties.icon = $scope.place.properties.icon;
			$scope.place.properties.zoom = $scope.place.properties.zoom;
			$scope.place.geometry = $scope.geometry;

			var place = $scope.place;

			place.$update(function() {
				$location.path('places');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Places
		$scope.find = function() {
			$scope.places = Places.query();
		};

		// Find existing Place
		$scope.findOne = function() {
			$scope.place ={};
			$scope.place = Places.get({
				placeId: $stateParams.placeId
			});

			var placeId=$stateParams.placeId;
	    angular.isUndefinedOrNull = function(placeId){ return angular.isUndefined(placeId) || placeId === null};
	    if(angular.isUndefinedOrNull(placeId)) {
	        alert(placeId);
	        alert("true");
	    } else {
	        //alert("false");
					$scope.marker=[];
					//$scope.marker = $scope.place.geometry.coordinates;
					console.log('Place: ' + $scope.place);

			}
			$scope.formData ={};
			$scope.prefLang = $translate.use();
			$scope.formData.category = this.category;
			$scope.formData.color = this.color;
			$scope.formData.icon = this.icon;
			$scope.formData.pictureUrl = 'https://res.cloudinary.com/fits/image/upload/v1425567455/colombia/' + this.name + '.jpg';
			$scope.formData.webPageUrl = 'http://' + $scope.prefLang + '.wikipedia.org/wiki/' + this.name;
		};

		//
		angular.extend($scope, {
				center: {
            lat: 11.2471,
            lng: -74.1618,
            zoom: 8
        },
				defaults: {
            scrollWheelZoom: false
        },
        markers: {
            m1: {
                lat: 11.2471,
                lng: -74.1618,
                focus: true,
                draggable: true
            }
        },
        layers: {
            baselayers: {
								osm: {
                    name: 'Open Street Map',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                }
            }
        },
				events: {
			      markers: {
			          enable: leafletEvents.getAvailableMarkerEvents()
			      }
			  }
    });

		$scope.$on('leafletDirectiveMarker.dragend',function (e,marker) {
			//console.log(marker.model);
			$scope.markers.m1.lat=marker.model.lat;
			$scope.markers.m1.lng=marker.model.lng;
		});


		$scope.$on('leafletDirectiveMarker.click', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log('Leaflet Click');
    });
    $scope.$on('leafletDirectiveMarker.popupopen', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log('Leaflet Popup Open');
    });
    $scope.$on('leafletDirectiveMarker.popupclose', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log('Leaflet Popup Close');
    });
	}
]);

'use strict';

// Places controller
angular.module('places').controller('PlacesController', ['$scope', '$stateParams', '$http', '$location', '$filter', 'Authentication', '$translate', 'Places', 'Categorias', 'leafletData',
	function($scope, $stateParams, $http, $location, $filter, Authentication, $translate, Places, Categorias, leafletData) {
		$scope.authentication = Authentication;
		$scope.formData = {};
		$scope.prefLang = $translate.use();
		$scope.formData.webPageUrl = 'http://' + $scope.prefLang + '.wikipedia.org/wiki/';
		$scope.myData = {"type":"Feature","id":"COL","properties":{"name":"Colombia", "more":"url src='http://#'"},"geometry":{"type":"Polygon","coordinates":[[[-75.373223,-0.152032],[-75.801466,0.084801],[-76.292314,0.416047],[-76.57638,0.256936],[-77.424984,0.395687],[-77.668613,0.825893],[-77.855061,0.809925],[-78.855259,1.380924],[-78.990935,1.69137],[-78.617831,1.766404],[-78.662118,2.267355],[-78.42761,2.629556],[-77.931543,2.696606],[-77.510431,3.325017],[-77.12769,3.849636],[-77.496272,4.087606],[-77.307601,4.667984],[-77.533221,5.582812],[-77.318815,5.845354],[-77.476661,6.691116],[-77.881571,7.223771],[-77.753414,7.70984],[-77.431108,7.638061],[-77.242566,7.935278],[-77.474723,8.524286],[-77.353361,8.670505],[-76.836674,8.638749],[-76.086384,9.336821],[-75.6746,9.443248],[-75.664704,9.774003],[-75.480426,10.61899],[-74.906895,11.083045],[-74.276753,11.102036],[-74.197223,11.310473],[-73.414764,11.227015],[-72.627835,11.731972],[-72.238195,11.95555],[-71.75409,12.437303],[-71.399822,12.376041],[-71.137461,12.112982],[-71.331584,11.776284],[-71.973922,11.608672],[-72.227575,11.108702],[-72.614658,10.821975],[-72.905286,10.450344],[-73.027604,9.73677],[-73.304952,9.152],[-72.78873,9.085027],[-72.660495,8.625288],[-72.439862,8.405275],[-72.360901,8.002638],[-72.479679,7.632506],[-72.444487,7.423785],[-72.198352,7.340431],[-71.960176,6.991615],[-70.674234,7.087785],[-70.093313,6.960376],[-69.38948,6.099861],[-68.985319,6.206805],[-68.265052,6.153268],[-67.695087,6.267318],[-67.34144,6.095468],[-67.521532,5.55687],[-67.744697,5.221129],[-67.823012,4.503937],[-67.621836,3.839482],[-67.337564,3.542342],[-67.303173,3.318454],[-67.809938,2.820655],[-67.447092,2.600281],[-67.181294,2.250638],[-66.876326,1.253361],[-67.065048,1.130112],[-67.259998,1.719999],[-67.53781,2.037163],[-67.868565,1.692455],[-69.816973,1.714805],[-69.804597,1.089081],[-69.218638,0.985677],[-69.252434,0.602651],[-69.452396,0.706159],[-70.015566,0.541414],[-70.020656,-0.185156],[-69.577065,-0.549992],[-69.420486,-1.122619],[-69.444102,-1.556287],[-69.893635,-4.298187],[-70.394044,-3.766591],[-70.692682,-3.742872],[-70.047709,-2.725156],[-70.813476,-2.256865],[-71.413646,-2.342802],[-71.774761,-2.16979],[-72.325787,-2.434218],[-73.070392,-2.308954],[-73.659504,-1.260491],[-74.122395,-1.002833],[-74.441601,-0.53082],[-75.106625,-0.057205],[-75.373223,-0.152032]]]}};

		$scope.source = [{
      'type': 'Feature',
      'properties': {
        'id': 1,
        'name': 'Foo'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-72.1234, 10.23]
      }
    }, {
      'type': 'Feature',
      'properties': {
        'id': 2,
        'name': 'Bar'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-74.267578125, 10.80632]
      }
    }];
		$scope.loadGeojson = function () {
        angular.extend($scope, {
					geojson: {
						data:$scope.places
					} //geojson
        });
    };
    //Load geojson
    $scope.loadGeojson();

    $scope.data = angular.copy($scope.places);
    $scope.search = {
      'properties': {}
    };
    $scope.$watch('search', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.data = $filter('filter')($scope.places, $scope.search);
      }
    }, true);

		// from angular-leaflet-directive/blob/master/examples/geojson-non-nested.html
		var getColor = function(id){
        return id == 'USA'? 'blue' : 'green';
    };
    var getStyle = function(feature){
        return {
            fillColor: getColor(feature.id),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.3
        };
    };
    var createGeoJsonObject = function (data){
        return {
            data: $scope.places,
            style: getStyle
        };
    };

		$scope.centerJSON = function(name) {
        leafletData.getMap().then(function(map) {
            var latlngs = [];
            for (var i in $scope.geojson[name].data.features[0].geometry.coordinates) {
                var coord = $scope.geojson[name].data.features[0].geometry.coordinates[i];
                for (var j in coord) {
                    var points = coord[j];
                    for (var k in points) {
                        latlngs.push(L.GeoJSON.coordsToLatLng(points[k]));
                    }
                }
            }
            map.fitBounds(latlngs);
        });
    };

		// Get the countries geojson data from a JSON
    $http.get("/assets/json/COL.geo.json").success(function(data, status) {
			angular.extend($scope.geojson, {
					colombia: {
							data: data,
							style: {
									fillColor: "green",
									weight: 2,
									opacity: 1,
									color: 'white',
									dashArray: '3',
									fillOpacity: 0.2
							}
					}
			});
    });

		//
		angular.extend($scope, {
				defaults: {
						zoomControlPosition: 'topright',
						tileLayerOptions: {
								opacity: 1,
								detectRetina: true,
								reuseTiles: true,
						},
						minZoom: 8,
						maxZoom: 16,
						scrollWheelZoom: true
				},
				santamarta: {
            lat: 11.2471,
            lng: -74.1618,
            zoom: 8
        },
				center: {
            lat: 11.2471,
            lng: -74.1618,
            zoom: 8
        },
        markers: {
            m1: {
                lat: 11.2471,
                lng: -74.1618,
                focus: true,
                draggable: true,
								message: $scope.formData.name
            }
        },
				legend: {
            position: 'bottomleft',
            colors: [ '#052D01', '#44722A', '#002356', '#B97D0A', '#F93B00', '#448146', '#F9000E', '#000000', '#490B33' ],
            labels: [ 'Ciudad Perdida', 'Parque Sierra Nevada', 'Parque Tayrona', 'Peninsula Guajira', 'Ciclo Turismo', 'Tours Eco Turismo', 'Un Dia Excursion', 'xTremo', 'Evento del Calendario' ]
        },
        iconA: {},
        iconB: {
        		type: 'awesomeMarker',
            icon: 'tag',
            markerColor: 'red'
        },
        events: {},
        layers: {
            baselayers: {
								osm: {
                    name: 'Open Street Map',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
								mapbox_terrain: {
										name: 'Mapbox Terrain',
										url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
										type: 'xyz',
										layerOptions: {
												apikey: 'pk.eyJ1IjoidHJhdmVsc2NvbG9tYmlhIiwiYSI6IlhLY3E0XzgifQ.KiQ03nWDM-zLKNkyuv4LVg',
												mapid: 'travelscolombia.lkfd41h4'
										}
								},
								mapbox_outdoor: {
										name: 'Mapbox Outdoor',
										url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
										type: 'xyz',
										layerOptions: {
												apikey: 'pk.eyJ1IjoidHJhdmVsc2NvbG9tYmlhIiwiYSI6IlhLY3E0XzgifQ.KiQ03nWDM-zLKNkyuv4LVg',
												mapid: 'travelscolombia.lmmg5758'
										}
								}
            },
            overlays: {
								ciudadPerdida: {
                    name: 'Ciudad Perdida',
                    type: 'markercluster',
                    visible: true
                },
								parqueSierraNevada: {
                    name: 'Parque Sierra Nevada',
                    type: 'markercluster',
                    visible: true
                },
								parqueTayrona: {
                    name: 'Parque Tayrona',
                    type: 'markercluster',
                    visible: true
                },
								peninsulaGuajira: {
                    name: 'Peninsula Guajira',
                    type: 'markercluster',
                    visible: true
                },
								toursBicicleta: {
                    name: 'Ciclo Turismo',
                    type: 'markercluster',
                    visible: true
                },
								unDiaExcursion: {
                    name: 'Un Dia Excursion',
                    type: 'markercluster',
                    visible: true
                },
								toursEcoTurismo: {
                    name: 'Tours Eco Turismo',
                    type: 'markercluster',
                    visible: true
                },
								xTremo: {
                    name: 'xTremo',
                    type: 'markercluster',
                    visible: true
                },
								upcomingEvent: {
                    name: 'Evento del calendario',
                    type: 'markercluster',
                    visible: true
                }
            },
            geojson:{
							data: $scope.places,
							style: function (feature) {
					        return {color: feature.properties.color};
					    },
							onEachFeature: function (feature, layer) {
                layer.setIcon(defaultMarker);
                layer.on({
                    mouseover: pointMouseover,
                    mouseout: pointMouseout
                });
                layers[feature.properties.id] = layer;
                console.log(layers);
            	}
						}
        }
    });

		$scope.$on('leafletDirectiveMarker.click', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log('Leaflet Click');
    });
    $scope.$on('leafletDirectiveMarker.popupopen', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log('Leaflet Popup Open');
    });
    $scope.$on('leafletDirectiveMarker.popupclose', function(e, args) {
        // Args will contain the marker name and other relevant information
        console.log('Leaflet Popup Close');
    });


		$scope.rate = 4;
		$scope.max = 5;
		$scope.isReadonly = false;
		$scope.isShow = true;

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		};

		$scope.hoveringOver = function(value) {
			$scope.overStar = value;
			$scope.percent = 100 * (value / $scope.max);
		};

		$scope.ratingStates = [
		{stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
		{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
		{stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
		{stateOn: 'glyphicon-heart'},
		{stateOff: 'glyphicon-off'}
		];

		// Update category field
		$scope.updateCategory = function(name,color) {
			$scope.formData.category = name;
			$scope.formData.color = color;
		};
		// Update category field
		$scope.updateWebPageUrl = function(name) {
			$scope.prefLang = $translate.use();
			//$scope.formData.pictureUrl = 'https://res.cloudinary.com/fits/image/upload/v1425567455/colombia/' + name + '.jpg';
			$scope.formData.webPageUrl = 'http://' + $scope.prefLang + '.wikipedia.org/wiki/' + name;
		};
		// Create new Place
		$scope.create = function() {
			// Create new Place object
			$scope.geometry = {};
			$scope.geometry.coordinates = [];
			$scope.geometry.coordinates[0] = $scope.markers.m1.lng;
			$scope.geometry.coordinates[1] = $scope.markers.m1.lat;
 			$scope.properties ={};
			$scope.properties.name = $scope.formData.name;
			$scope.properties.description = $scope.formData.description;
			$scope.properties.category = $scope.formData.category;
			$scope.properties.pictureUrl = $scope.formData.pictureUrl;
			$scope.properties.webPageUrl = $scope.formData.webPageUrl;
			$scope.properties.color = $scope.formData.color;
			$scope.properties.icon = $scope.formData.icon;
			$scope.properties.zoom = $scope.formData.zoom;

			var place = new Places ({
				geometry: $scope.geometry,
				properties: $scope.properties
			});

			// Redirect after save
			place.$save(function(response) {
				$location.path('places');

				// Clear form fields
				//$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Place
		$scope.remove = function(place) {
			if ( place ) {
				place.$remove();

				for (var i in $scope.places) {
					if ($scope.places [i] === place) {
						$scope.places.splice(i, 1);
					}
				}
			} else {
				$scope.place.$remove(function() {
					$location.path('places');
				});
			}
		};

		// Update existing Place
		$scope.update = function() {
			$scope.geometry = {};
			$scope.geometry.coordinates = [];
			$scope.geometry.coordinates[0] = $scope.markers.m1.lng;
			$scope.geometry.coordinates[1] = $scope.markers.m1.lat;
			$scope.place.properties.name = $scope.place.properties.name;
			$scope.place.properties.description = $scope.place.properties.description;
			$scope.place.properties.category = $scope.place.properties.category;
			$scope.place.properties.webPageUrl = $scope.formData.webPageUrl;
			$scope.place.properties.icon = $scope.place.properties.icon;
			$scope.place.properties.zoom = $scope.place.properties.zoom;
			$scope.place.geometry = $scope.geometry;

			var place = $scope.place;

			place.$update(function() {
				$location.path('places');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Places
		$scope.find = function() {
			$scope.places = Places.query();
		};

		// Find existing Place
		$scope.findOne = function() {
			$scope.place ={};
			$scope.place = Places.get({
				placeId: $stateParams.placeId
			});

			//$scope.markers.m1.lng = $scope.place.geometry.coordinates[0];
			//$scope.markers.m1.lat = $scope.place.geometry.coordinates[1];
			$scope.formData ={};
			$scope.prefLang = $translate.use();
			$scope.formData.category = this.category;
			$scope.formData.color = this.color;
			$scope.formData.icon = this.icon;
			$scope.formData.pictureUrl = 'https://res.cloudinary.com/fits/image/upload/v1425567455/colombia/' + this.name + '.jpg';
			$scope.formData.webPageUrl = 'http://' + $scope.prefLang + '.wikipedia.org/wiki/' + this.name;
		};
	}
]);

'use strict';

//Places service used to communicate Places REST endpoints
angular.module('places').factory('Places', ['$resource',
	function($resource) {
		return $resource('places/:placeId', { placeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('schedules').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Itinerarios', 'schedules', 'dropdown', '/schedules(/create)?');
		Menus.addSubMenuItem('topbar', 'schedules', 'Lista de los Itinerarios', 'schedules');
		Menus.addSubMenuItem('topbar', 'schedules', 'New Itinerario', 'schedules/create');
	}
]);

'use strict';

//Setting up route
angular.module('schedules').config(['$stateProvider',
	function($stateProvider) {
		// Schedules state routing
		$stateProvider.
		state('listSchedules', {
			url: '/schedules',
			templateUrl: 'modules/schedules/views/list-schedules.client.view.html'
		}).
		state('createSchedule', {
			url: '/schedules/create',
			templateUrl: 'modules/schedules/views/create-schedule.client.view.html'
		}).
		state('viewSchedule', {
			url: '/schedules/:scheduleId',
			templateUrl: 'modules/schedules/views/view-schedule.client.view.html'
		}).
		state('editSchedule', {
			url: '/schedules/:scheduleId/edit',
			templateUrl: 'modules/schedules/views/edit-schedule.client.view.html'
		});
	}
]);
'use strict';

// Schedules controller
angular.module('schedules').controller('SchedulesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Schedules',
	function($scope, $stateParams, $location, Authentication, Schedules) {
		$scope.authentication = Authentication;

		// Create new Schedule
		$scope.create = function() {
			// Create new Schedule object
			var schedule = new Schedules ({
				name: this.name
			});

			// Redirect after save
			schedule.$save(function(response) {
				$location.path('schedules/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Schedule
		$scope.remove = function(schedule) {
			if ( schedule ) { 
				schedule.$remove();

				for (var i in $scope.schedules) {
					if ($scope.schedules [i] === schedule) {
						$scope.schedules.splice(i, 1);
					}
				}
			} else {
				$scope.schedule.$remove(function() {
					$location.path('schedules');
				});
			}
		};

		// Update existing Schedule
		$scope.update = function() {
			var schedule = $scope.schedule;

			schedule.$update(function() {
				$location.path('schedules/' + schedule._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Schedules
		$scope.find = function() {
			$scope.schedules = Schedules.query();
		};

		// Find existing Schedule
		$scope.findOne = function() {
			$scope.schedule = Schedules.get({ 
				scheduleId: $stateParams.scheduleId
			});
		};
	}
]);
'use strict';

//Schedules service used to communicate Schedules REST endpoints
angular.module('schedules').factory('Schedules', ['$resource',
	function($resource) {
		return $resource('schedules/:scheduleId', { scheduleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

//Setting up route
angular.module('todos').config(['$stateProvider',
	function($stateProvider) {
		// Todos state routing
		$stateProvider.
		state('listTodos', {
			url: '/todos',
			templateUrl: 'modules/todos/views/list-todos.client.view.html'
		}).
		state('createTodo', {
			url: '/todos/create',
			templateUrl: 'modules/todos/views/create-todo.client.view.html'
		}).
		state('viewTodo', {
			url: '/todos/:todoId',
			templateUrl: 'modules/todos/views/view-todo.client.view.html'
		}).
		state('editTodo', {
			url: '/todos/:todoId/edit',
			templateUrl: 'modules/todos/views/edit-todo.client.view.html'
		});
	}
]);

/*global todomvc, angular */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

angular.module('todos').controller('TodoCtrl', ["$scope", "$location", "$filter", "todoStorage", function TodoCtrl($scope, $location, $filter, todoStorage) {
	var todos = $scope.todos = todoStorage.get();

	$scope.newTodo = '';
	$scope.remainingCount = $filter('filter')(todos, {completed: false}).length;
	$scope.editedTodo = null;

	if ($location.path() === '') {
		$location.path('/todos/');
	}

	$scope.location = $location;

	$scope.$watch('location.path()', function (path) {
		$scope.statusFilter = { '/todos/active': {completed: false}, '/todos/completed': {completed: true} }[path];
	});

	$scope.$watch('remainingCount == 0', function (val) {
		$scope.allChecked = val;
	});

	$scope.addTodo = function () {
		var newTodo = $scope.newTodo.trim();
		if (newTodo.length === 0) {
			return;
		}

		todos.push({
			title: newTodo,
			completed: false
		});
		todoStorage.put(todos);

		$scope.newTodo = '';
		$scope.remainingCount++;
	};

	$scope.editTodo = function (todo) {
		$scope.editedTodo = todo;
		// Clone the original todo to restore it on demand.
		$scope.originalTodo = angular.extend({}, todo);
	};

	$scope.doneEditing = function (todo) {
		$scope.editedTodo = null;
		todo.title = todo.title.trim();

		if (!todo.title) {
			$scope.removeTodo(todo);
		}

		todoStorage.put(todos);
	};

	$scope.revertEditing = function (todo) {
		todos[todos.indexOf(todo)] = $scope.originalTodo;
		$scope.doneEditing($scope.originalTodo);
	};

	$scope.removeTodo = function (todo) {
		$scope.remainingCount -= todo.completed ? 0 : 1;
		todos.splice(todos.indexOf(todo), 1);
		todoStorage.put(todos);
	};

	$scope.todoCompleted = function (todo) {
		$scope.remainingCount += todo.completed ? -1 : 1;
		todoStorage.put(todos);
	};

	$scope.clearCompletedTodos = function () {
		$scope.todos = todos = todos.filter(function (val) {
			return !val.completed;
		});
		todoStorage.put(todos);
	};

	$scope.markAll = function (completed) {
		todos.forEach(function (todo) {
			todo.completed = !completed;
		});
		$scope.remainingCount = completed ? todos.length : 0;
		todoStorage.put(todos);
	};
}]);

/*global todomvc */
'use strict';

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */
angular.module('todos').directive('todoEscape', function () {
	var ESCAPE_KEY = 27;
	return function (scope, elem, attrs) {
		elem.bind('keydown', function (event) {
			if (event.keyCode === ESCAPE_KEY) {
				scope.$apply(attrs.todoEscape);
			}
		});
	};
});

/*global todomvc */
'use strict';

/**
 * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
 */
angular.module('todos').directive('todoFocus', ["$timeout", function ($timeout) {
	return function (scope, elem, attrs) {
		scope.$watch(attrs.todoFocus, function (newVal) {
			if (newVal) {
				$timeout(function () {
					elem[0].focus();
				}, 0, false);
			}
		});
	};
}]);

/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
*/
angular.module('todos').factory('todoStorage', function () {
	var STORAGE_ID = 'todos-angularjs-perf';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});

'use strict';

//Todos service used to communicate Todos REST endpoints
angular.module('todos').factory('Todos', ['$resource',
	function($resource) {
		return $resource('todos/:todoId', { todoId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Tours module
angular.module('tours').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Tours', 'tours', 'dropdown', '/tours(/create)?');
		Menus.addSubMenuItem('topbar', 'tours', 'Lista de los tours', 'tours');
		Menus.addSubMenuItem('topbar', 'tours', 'Crear un tour', 'tours/create');
	}
]);

angular.module('tours').config(["uiSelectConfig", function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
}]);

'use strict';

//Setting up route
angular.module('tours').config(['$stateProvider',
	function($stateProvider) {
		// Tours state routing
		$stateProvider.
		state('listTours', {
			url: '/tours',
			templateUrl: 'modules/tours/views/list-tours.client.view.html'
		}).
		state('listTours.list', {
			url: '/tours/list',
			templateUrl: 'modules/tours/views/list-tours.list.client.view.html'
		}).
		state('listTours.grid', {
			url: '/tours/grid',
			templateUrl: 'modules/tours/views/list-tours.grid.client.view.html'
		}).
		state('listTours.maps', {
			url: '/tours/maps',
			templateUrl: 'modules/tours/views/list-tours.maps.client.view.html'
		}).
		state('listTours.print', {
			url: '/tours/print',
			templateUrl: 'modules/tours/views/list-tours.print.client.view.html'
		}).
		state('createTour', {
			url: '/tours/create',
			templateUrl: 'modules/tours/views/create-tour.client.view.html',
			controller: 'ToursController',
		}).
    // nested states
    // each of these sections will have their own view
    // url will be nested (/createTour/info)
    state('createTour.info', {
        url: '/info',
        templateUrl: 'modules/tours/views/form-info.html'
    }).

    // url will be /createTour/detail
    state('createTour.detail', {
        url: '/detail',
        templateUrl: 'modules/tours/views/form-detail.html'
    }).

		// url will be /createTour/included
		state('createTour.included', {
				url: '/included',
				templateUrl: 'modules/tours/views/form-included.html'
		}).

		// url will be /form/itinerary
		state('createTour.itinerary', {
				url: '/itinerary',
				templateUrl: 'modules/tours/views/form-itinerary.html'
		}).

		// url will be /createTour/tips
		state('createTour.tips', {
				url: '/tips',
				templateUrl: 'modules/tours/views/form-tips.html'
		}).

    // url will be /createTour/layout
    state('createTour.layout', {
        url: '/layout',
        templateUrl: 'modules/tours/views/form-layout.html'
    }).

		// url will be /createTour/layout
		state('createTour.moreinfo', {
				url: '/moreinfo',
				templateUrl: 'modules/tours/views/form-moreinfo.html'
		}).

		// url will be /createTour/layout
		state('createTour.content', {
				url: '/content',
				templateUrl: 'modules/tours/views/form-content.html'
		}).

		// url will be /createTour/layout
		state('createTour.ratings', {
				url: '/ratings',
				templateUrl: 'modules/tours/views/form-ratings.html'
		}).

		// url will be /createTour/seo
		state('createTour.seo', {
				url: '/seo',
				templateUrl: 'modules/tours/views/form-seo.html'
		}).

		state('viewTour', {
			url: '/tours/:tourId',
			templateUrl: 'modules/tours/views/view-tour.client.view.html'
		}).
		state('editTour', {
			url: '/tours/:tourId/edit',
			templateUrl: 'modules/tours/views/edit-tour.client.view.html',
			controller: 'ToursController'
		}).
		// nested states
		// each of these sections will have their own view
		// url will be nested (/createTour/info)
		state('editTour.info', {
				url: '/info',
				templateUrl: 'modules/tours/views/form-info.html'
		}).

		// url will be /createTour/detail
		state('editTour.detail', {
				url: '/detail',
				templateUrl: 'modules/tours/views/form-detail.html'
		}).

		// url will be /createTour/included
		state('editTour.included', {
				url: '/included',
				templateUrl: 'modules/tours/views/form-included.html'
		}).

		// url will be /form/itinerary
		state('editTour.itinerary', {
				url: '/itinerary',
				templateUrl: 'modules/tours/views/form-itinerary.html'
		}).

		// url will be /createTour/tips
		state('editTour.tips', {
				url: '/tips',
				templateUrl: 'modules/tours/views/form-tips.html'
		}).

		// url will be /createTour/layout
		state('editTour.layout', {
				url: '/layout',
				templateUrl: 'modules/tours/views/form-layout.html'
		}).

		// url will be /createTour/moreinfo
		state('editTour.moreinfo', {
				url: '/moreinfo',
				templateUrl: 'modules/tours/views/form-moreinfo.html'
		}).

		// url will be /createTour/content
		state('editTour.content', {
				url: '/content',
				templateUrl: 'modules/tours/views/form-content.html'
		}).

		// url will be /createTour/ratings
		state('editTour.ratings', {
				url: '/ratings',
				templateUrl: 'modules/tours/views/form-ratings.html'
		}).

		// url will be /createTour/seo
		state('editTour.seo', {
				url: '/seo',
				templateUrl: 'modules/tours/views/form-seo.html'
		});

    // Redirect to home view when route not found
		//$urlRouterProvider.otherwise('/#!/');
	}
]);

'use strict';

angular.module('tours').controller('DemoController', ['$scope',
	function($scope) {
		// Demo controller logic
		// ...
		$scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

		$scope.loadMore = function() {
			var last = $scope.images[$scope.images.length - 1];
			for(var i = 1; i <= 8; i++) {
				$scope.images.push(last + i);
			}
		};
	}
]);

'use strict';

angular.module('tours').controller('GridBottomSheetController', ['$scope', '$mdBottomSheet',
	function($scope, $mdBottomSheet) {
		// Grid bottom sheet controller logic
		$scope.items = [
			{ name: 'Hangout', icon: 'hangout' },
			{ name: 'Mail', icon: 'mail' },
			{ name: 'Message', icon: 'message' },
			{ name: 'Copy', icon: 'copy' },
			{ name: 'Facebook', icon: 'facebook' },
			{ name: 'Twitter', icon: 'twitter' }
		];
	}
]);

'use strict';

angular.module('tours').controller('ItineraryController', ['$scope',
	function($scope) {
		// Controller Logic
		// ...
		var waypoints = $scope.waypoints = [];

		$scope.sortableOptions = {
			axis: 'y'
		};

		$scope.removeWaypoint = function(waypoint) {
			waypoints.splice(waypoints.indexOf(waypoint), 1);
		};

		angular.extend($scope, {

		markers: {
				mtcsantamarta: {
						lat: 11.242283,
						lng: -74.212968,
						message: 'Expotur, Santa Marta',
						focus: true,
						draggable: false
						},
				mtctaganga: {
						lat: 11.267518,
						lng: -74.190874,
						message: 'Expotur, Taganga',
						focus: true,
						draggable: false
						}
				}
		});


	}
]);

'use strict';

angular.module('tours').controller('MarkersController', ['$scope', 'uiGmapGoogleMapApi',
	function($scope, GoogleMapApi) {
		// Controller Logic
		// ...
		angular.extend($scope, {
    defaults: {
        tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        maxZoom: 18,
        path: {
            weight: 10,
            color: '#800000',
            opacity: 1
		        }
		    }
		});

		angular.extend($scope, {
    center: {
        lat: 11.59,
				lng: -72.89,
				zoom: 7
			},

    paths: {
	      p1: {
	          color: '#008000',
	          weight: 8,
	          latlngs: [
	              { lat: 11.242283, lng: -74.212968 },
	              { lat: 11.267536, lng: -74.190887 }
	          ],
	      }
    	}
		});

		angular.extend($scope, {
		mtcsantamarta: {
				lat: 11.242283,
				lng: -74.212968,
				icon: {
          iconUrl: '../assets/img/eiffel100.png',
          iconSize: [80, 80],
          iconAnchor: [40, 60],
          popupAnchor: [0, 0],
          shadowSize: [0, 0],
          shadowAnchor: [0, 0]
        	},
				zoom: 13
				},
		mtctaganga: {
				lat: 11.267536,
				lng: -74.190887,
				zoom: 13
				},
		markers: {
				mtcsantamarta: {
						lat: 11.242283,
						lng: -74.212968,
						message: 'Expotur, Santa Marta',
						focus: true,
						draggable: false
						},
				mtctaganga: {
						lat: 11.267518,
						lng: -74.190874,
						message: 'Expotur, Taganga',
						focus: true,
						draggable: false
						}
				}
		});
	}
]);

'use strict';

// Tours controller
angular.module('tours').controller('ToursController', ['$scope', '$rootScope', '$modal', '$timeout', '$translate', '$filter', '$http', '$stateParams', '$location', '$anchorScroll', 'Authentication', 'Tours', 'Guides', 'Categorias', 'ngDialog', '$mdBottomSheet',
	function($scope, $rootScope, $modal, $timeout, $translate, $filter, $http, $stateParams, $location, $anchorScroll, Authentication, Tours, Guides, Categorias, ngDialog, $mdBottomSheet) {
		$scope.authentication = Authentication;
		$scope.preflang = $translate.use();
		$scope.intro = true;
		$scope.formData = {};
		$scope.person = {};
		$scope.categoria = {};
		$scope.image = null;
		$scope.isCollapsed = true;
		// animations
		$scope.isShow = true;
		$scope.alert = '';

		$scope.rate = 4;
		$scope.max = 5;
		$scope.isReadonly = false;

		$scope.hoveringOver = function(value) {
			$scope.overStar = value;
			$scope.percent = 100 * (value / $scope.max);
		};

		$scope.ratingStates = [
		{stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
		{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
		{stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
		{stateOn: 'glyphicon-heart'},
		{stateOff: 'glyphicon-off'}
		];

		// ui-select test
		$scope.disabled = undefined;

		$scope.enable = function() {
			$scope.disabled = false;
		};

		$scope.disable = function() {
			$scope.disabled = true;
		};

		$scope.clear = function() {
			$scope.seltour.selected = undefined;
		};

		$scope.selectedTourCategory = [];
		$scope.selectedTourDiffLevel = [];
		$scope.selectedTourDuration = [];
		$scope.categoryList = [{
				id: 'ciudadPerdida',
				name: 'ciudadPerdida'
		}, {
				id: 'parqueSierraNevada',
				name: 'parqueSierraNevada'
		},{
				id: 'parqueTayrona',
				name: 'parqueTayrona'
		},{
				id: 'unDiaExcursion',
				name: 'unDiaExcursion'
		},{
				id: 'upcomingEvent',
				name: 'upcomingEvent'
		},{
				id: 'peninsulaGuajira',
				name: 'peninsulaGuajira'
		},{
				id: 'xTremo',
				name: 'xTremo'
		},{
				id: 'toursEcoTurismo',
				name: 'toursEcoTurismo'
		},{
			id: 'toursBicicleta',
			name: 'toursBicicleta'
		}];

		$scope.diffLevelList = [
		{
			translateId: 'DifficultyLevel1',
			name: 'DifficultyLevel1'
		},
		{
			translateId: 'DifficultyLevel2',
			name: 'DifficultyLevel2'
		},
		{
			translateId: 'DifficultyLevel3',
			name: 'DifficultyLevel3'
		},
		{
			translateId: 'DifficultyLevel4',
			name: 'DifficultyLevel4'
		}];

		$scope.setSelectedTour = function () {
				var id = this.category.id;
				if (_.contains($scope.selectedTourCategory, id)) {
						$scope.selectedTourCategory = _.without($scope.selectedTourCategory, id);
				} else {
						$scope.selectedTourCategory.push(id);
				}
				$scope.category = this.category.id;
				return false;
		};

		$scope.setSelectedTourDiffLevel = function () {
			var translateId = this.diffLevel.translateId;

			if (_.contains($scope.selectedTourDiffLevel, translateId)) {
				$scope.selectedTourDiffLevel = _.without($scope.selectedTourDiffLevel, translateId);
			} else {
				$scope.selectedTourDiffLevel.push(translateId);
			}
			$scope.diffLevel = this.diffLevel.translateId;
			return false;
		};

		$scope.setTourDuration = function (tours, values) {
				var floor = values.low;
				//console.log(values);
				return false;
		};

		$scope.isChecked = function (id) {
				if (_.contains($scope.selectedTourCategory, id)) {
						return 'glyphicon glyphicon-ok pull-right';
				}
				return false;
		};

		$scope.checkAll = function () {
				$scope.selectedTourCategory = _.pluck($scope.categoryList, 'id');
		};

		$scope.isCheckedDiffLevel = function (translateId) {
			if (_.contains($scope.selectedTourDiffLevel, translateId)) {
				return 'glyphicon glyphicon-ok pull-right';
			}
			return false;
		};

		$scope.checkAllDiffLevels = function () {
			$scope.selectedTourDiffLevel = _.pluck($scope.difflevelList, 'translateId');
		};

		$scope.clearAllFilters = function () {
			$scope.selectedTourCategory = [];
			$scope.selectedTourDiffLevel = [];
			$scope.values = {
				low : 1,
				high: 6
			};
		};

		$scope.seltour = {};
		$scope.listtours = function() {
			$scope.alltours = Tours.query();
		};

		$scope.images = [{
			'title': 'Ciudad Perdida 1',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/0.jpg'
		},
		{
			'title': 'Ciudad Perdida 2',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/1.jpg'
		},
		{
			'title': 'Ciudad Perdida 3',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/2.jpg'
		},
		{
			'title': 'Ciudad Perdida 4',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/3.jpg'
		},
		{
			'title': 'Ciudad Perdida 5',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/4.jpg'
		},
		{
			'title': 'Ciudad Perdida 6',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/5.jpg'
		},
		{
			'title': 'Ciudad Perdida 7',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/6.jpg'
		},
		{
			'title': 'Ciudad Perdida 8',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/7.jpg'
		},
		{
			'title': 'Ciudad Perdida 9',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/8.jpg'
		},
		{
			'title': 'Ciudad Perdida 10',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/9.jpg'
		},
		{
			'title': 'Ciudad Perdida 11',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/10.jpg'
		},
		{
			'title': 'Ciudad Perdida 12',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/11.jpg'
		},
		{
			'title': 'Ciudad Perdida 13',
			'name': 'lostCity',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/12.jpg'
		},
		{
			'title': 'Sierra Nevada 1',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/0.jpg'
		},
		{
			'title': 'Sierra Nevada 2',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/1.jpg'
		},
		{
			'title': 'Sierra Nevada 3',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/2.jpg'
		},
		{
			'title': 'Sierra Nevada 4',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/3.jpg'
		},
		{
			'title': 'Sierra Nevada 5',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/4.jpg'
		},
		{
			'title': 'Sierra Nevada 6',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/5.jpg'
		},
		{
			'title': 'Sierra Nevada 7',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/6.jpg'
		},
		{
			'title': 'Sierra Nevada 8',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/7.jpg'
		},
		{
			'title': 'Sierra Nevada 9',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/8.jpg'
		},
		{
			'title': 'Sierra Nevada 10',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/9.jpg'
		},
		{
			'title': 'Sierra Nevada 11',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/10.jpg'
		},
		{
			'title': 'Sierra Nevada 12',
			'name': 'sierraNevada',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueSierraNevada/11.jpg'
		},
		{
			'title': 'Tayrona 1',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/0.jpg'
		},
		{
			'title': 'Tayrona 2',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/1.jpg'
		},
		{
			'title': 'Tayrona 3',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/2.jpg'
		},
		{
			'title': 'Tayrona 4',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/3.jpg'
		},
		{
			'title': 'Tayrona 5',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/4.jpg'
		},
		{
			'title': 'Tayrona 6',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/5.jpg'
		},
		{
			'title': 'Tayrona 7',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/6.jpg'
		},
		{
			'title': 'Tayrona 8',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/7.jpg'
		},
		{
			'title': 'Tayrona 9',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/8.jpg'
		},
		{
			'title': 'Tayrona 10',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/9.jpg'
		},
		{
			'title': 'Tayrona 11',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/10.jpg'
		},
		{
			'title': 'Tayrona 12',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/11.jpg'
		},
		{
			'title': 'Tayrona 13',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/12.jpg'
		},
		{
			'title': 'Tayrona 14',
			'name': 'parqueTayrona',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/parqueTayrona/13.jpg'
		},
		{
			'title': 'Playa 1',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/0.jpg'
		},
		{
			'title': 'Playa 2',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/1.jpg'
		},
		{
			'title': 'Playa 3',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/2.jpg'
		},
		{
			'title': 'Playa 4',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/3.jpg'
		},
		{
			'title': 'Playa 5',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/4.jpg'
		},
		{
			'title': 'Playa 6',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/5.jpg'
		},
		{
			'title': 'Playa 7',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/6.jpg'
		},
		{
			'title': 'Playa 8',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/7.jpg'
		},
		{
			'title': 'Playa 9',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/8.jpg'
		},
		{
			'title': 'Playa 10',
			'name': 'playas',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/9.jpg'
		},
		{
			'title': 'Santa Marta 1',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/0.jpg'
		},
		{
			'title': 'Santa Marta 2',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/1.jpg'
		},
		{
			'title': 'Santa Marta 3',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/2.jpg'
		},
		{
			'title': 'Santa Marta 4',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/3.jpg'
		},
		{
			'title': 'Santa Marta 5',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/4.jpg'
		},
		{
			'title': 'Santa Marta 6',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/5.jpg'
		},
		{
			'title': 'Santa Marta 7',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/6.jpg'
		},
		{
			'title': 'Santa Marta 8',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/7.jpg'
		},
		{
			'title': 'Santa Marta 9',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/8.jpg'
		},
		{
			'title': 'Santa Marta 10',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/9.jpg'
		},
		{
			'title': 'Santa Marta 11',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/10.jpg'
		},
		{
			'title': 'Santa Marta 12',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/11.jpg'
		},
		{
			'title': 'Santa Marta 13',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/12.jpg'
		},
		{
			'title': 'Santa Marta 14',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/13.jpg'
		},
		{
			'title': 'Santa Marta 15',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/14.jpg'
		},
		{
			'title': 'Santa Marta 16',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/15.jpg'
		},
		{
			'title': 'Santa Marta 17',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/16.jpg'
		},
		{
			'title': 'Santa Marta 18',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/17.jpg'
		},
		{
			'title': 'Santa Marta 19',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/18.jpg'
		},
		{
			'title': 'Santa Marta 20',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/19.jpg'
		},
		{
			'title': 'Santa Marta 21',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/20.jpg'
		},
		{
			'title': 'Santa Marta 22',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/21.jpg'
		},
		{
			'title': 'Santa Marta 23',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/23.jpg'
		},
		{
			'title': 'Santa Marta 9',
			'name': 'unDiaExcursion',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/unDiaExcursion/22.jpg'
		},
		{
			'title': 'Guajira 1',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/0.jpg'
		},
		{
			'title': 'Guajira 2',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/1.jpg'
		},
		{
			'title': 'Guajira 3',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/2.jpg'
		},
		{
			'title': 'Guajira 4',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/3.jpg'
		},
		{
			'title': 'Guajira 5',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/4.jpg'
		},
		{
			'title': 'Guajira 6',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/5.jpg'
		},
		{
			'title': 'Guajira 7',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/6.jpg'
		},
		{
			'title': 'Guajira 8',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/7.jpg'
		},
		{
			'title': 'Guajira 9',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/8.jpg'
		},
		{
			'title': 'Guajira 10',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/9.jpg'
		},
		{
			'title': 'Guajira 11',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/10.jpg'
		},
		{
			'title': 'Guajira 12',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/11.jpg'
		},
		{
			'title': 'Guajira 13',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/12.jpg'
		},
		{
			'title': 'Guajira 14',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/13.jpg'
		},
		{
			'title': 'Guajira 15',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/14.jpg'
		},
		{
			'title': 'Guajira 16',
			'name': 'peninsulaGuajira',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/15.jpg'
		},
		{
			'title': 'Sports 1',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/0.jpg'
		},
		{
			'title': 'Sports 2',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/1.jpg'
		},
		{
			'title': 'Sports 3',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/2.jpg'
		},
		{
			'title': 'Sports 4',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/3.jpg'
		},
		{
			'title': 'Sports 5',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/4.jpg'
		},
		{
			'title': 'Sports 6',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/5.jpg'
		},
		{
			'title': 'Sports 7',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/6.jpg'
		},
		{
			'title': 'Sports 8',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/7.jpg'
		},
		{
			'title': 'Sports 9',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/8.jpg'
		},
		{
			'title': 'Sports 10',
			'name': 'xTremo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/xTremo/9.jpg'
		},
		{
			'title': 'EcoTourism 1',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/0.jpg'
		},
		{
			'title': 'EcoTourism 2',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/1.jpg'
		},
		{
			'title': 'EcoTourism 3',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/2.jpg'
		},
		{
			'title': 'EcoTourism 4',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/3.jpg'
		},
		{
			'title': 'EcoTourism 5',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/4.jpg'
		},
		{
			'title': 'EcoTourism 6',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/5.jpg'
		},
		{
			'title': 'EcoTourism 7',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/6.jpg'
		},
		{
			'title': 'EcoTourism 8',
			'name': 'ecoTurismo',
			'url': 'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ecoTurismo/7.jpg'
		}];

		$scope.selectedType = $scope.images[0].title;
		//$scope.selectedUrl = $scope.images[0].url;

		// begin slider logic

		$scope.scopes = [];
		$scope.value = 1;
		$scope.values = {
			low : 1,
			high: 6
		};
		$scope.floor = 1;
		$scope.ceiling = 6;
		$scope.step = 1;
		$scope.precision = 0;
		$scope.buffer = 1;
		$scope.stickiness = 2;
		$scope.sliderWidth = '100%';

		$scope.sliderDuration = function() {
			$scope.scopes = [];
			$scope.value = 1;
			$scope.values = {
				low : 1,
				high: 6
			};
			$scope.floorDuration = 1;
			$scope.ceilingDuration = 6;
			$scope.stepDuration = 1;
			$scope.precisionDuration = 0;
			$scope.bufferDuration = 2;
			$scope.stickinessDuration = 3;
			$scope.sliderWidth = '100%';
		};

    $scope.scale = function(value) {
	    return Math.pow(value, 3);
    };
    $scope.inverseScale = function(value) {
	    var sign = value === 0?1:(value / Math.abs(value));
	    return sign * Math.pow(Math.abs(value), 1 / 3);
    };

    $scope.addScope = function() {
	    $scope.scopes.push({
		    values: {
			    low : 1,
			    high: 6
		    },
		    value : 1
	    });
    };

		$scope.translate = function(value) {
			return '$' + value;
		};

		$scope.translateCombined = function(low, high) {
			return $scope.translate(low.toFixed($scope.precision)) + ' *** ' + $scope.translate(high.toFixed($scope.precision));
		};

		$scope.translateRange = function(low, high) {
			return $scope.translate((high - low).toFixed($scope.precision));
		};

		$scope.fireResizeEvent = function() {
			$scope.$broadcast('refreshSlider');
		};
		// end slider logic

		$scope.action = 'createTour';

		$scope.days = {0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true };

		// Create new Tour
		$scope.create = function() {
			$scope.background = $scope.formData.colorbg;
			$scope.color = $scope.formData.colorfont;
			// Create new Tour object
			var tour = new Tours ({
				categorytour: $scope.formData.categorytour,
				tourtitle: $scope.formData.tourtitle,
				subtitle: $scope.formData.subtitle,
				description: $scope.formData.description,
				summary: $scope.formData.summary,
				additionalservices: $scope.formData.additionalservices,
				language: $scope.formData.language,
				duration: $scope.formData.duration,
				difficultylevel: $scope.formData.difficultylevel,
				leadername: $scope.formData.leadername,
				groupminsize: $scope.formData.groupminsize,
				groupmaxsize: $scope.formData.groupmaxsize,
				groupsize: $scope.formData.groupsize,
				sellingprice: $scope.formData.sellingprice,
				percentdeposit: $scope.formData.percentdeposit,
				currency: $scope.formData.currency,
				daysavailable: $scope.days,
				datestart: $scope.formData.startDate,
				dateend: $scope.formData.endDate,
				datesdisabled: $scope.formData.datesdisabled,
				includedinsurance: $scope.formData.includedinsurance,
				includedtransportprivate: $scope.formData.includedtransportprivate,
				includedtransportterrestre: $scope.formData.includedtransportterrestre,
				included4x4: $scope.formData.included4x4,
				includedguide: $scope.formData.includedguide,
				includedboating: $scope.formData.includedboating,
				includedaccommodation: $scope.formData.includedaccommodation,
				includedmeals: $scope.formData.includedmeals,
				includedentrancefee: $scope.formData.includedentrancefee,
				includedgift: $scope.formData.includedgift,
				tips: $scope.formData.tips,
				colorbg: $scope.formData.colorbg,
				colorfont: $scope.formData.colorfont,
				//uploadfolder: $scope.selectedUrl,
				pictureurl: $scope.formData.pictureurl,
				picturecaption: $scope.formData.picturecaption,
				picturecredits: $scope.formData.picturecredits,
				review: $scope.formData.review,
				comments: $scope.formData.comments,
				mapId: $scope.formData.mapId,
				itinerary: $scope.formData.itinerary,
				tags: $scope.formData.tags,
				seokeywords: $scope.formData.seokeywords,
				seodescription: $scope.formData.seodescription,
				urlmoreinfo: $scope.formData.urlmoreinfo,
				urlgoogle: $scope.formData.urlgoogle,
				urlfacebook: $scope.formData.urlfacebook,
				urlyoutube: $scope.formData.urlyoutube,
				urltripadvisor: $scope.formData.tripadvisor,
				urlanalytics: $scope.formData.urlanalytics,
				urlarticle: $scope.formData.urlarticle,
				urlpdf: $scope.formData.urlpdf,
				countbookings: $scope.formData.countbookings,
				countlikes: $scope.formData.countlikes,
				countfollowers: $scope.formData.countfollowers,
				countrecommended: $scope.formData.countrecommended,
				//ratingAverage: scope.formData.ratingAverage;
				locationdeparture: $scope.formData.locationdeparture,
				locationaimv: $scope.formData.locationaimv,
				locationreturn: $scope.formData.locationreturn
			});


			// Redirect after save
			tour.$save(function(response) {
				$location.path('tours');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


		// Remove existing Tour
		$scope.remove = function( tour ) {
			if ( tour ) { tour.$remove();

				for (var i in $scope.tours ) {
					if ($scope.tours [i] === tour ) {
						$scope.tours.splice(i, 1);
					}
				}
			} else {
				$scope.tour.$remove(function() {
					$location.path('tours');
				});
			}
		};
		// Update category field
		$scope.updateCategory = function(name) {
			$scope.formData.categorytour = name;
			//console.log('$scope.formData.categorytour: ' + name);
		};

		// Update guide field
		$scope.updateLeader = function(name) {
			$scope.person = name;
			$scope.formData.leadername = name;
			//$scope.selectedUrl = $scope.images[0].url;
		};
		// Update pictureurl field
		$scope.updatePictureUrl = function(type) {
			$scope.formData.pictureurl = type;
			//$scope.selectedUrl = $scope.images[0].url;
		};

		// Update existing Tour
		$scope.update = function() {

			$scope.action = 'editTour';
			var tour = $scope.formData ;
			tour.$update(function() {
				$location.path('tours');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Tours
		$scope.find = function() {
			$scope.sortorder = 'tourtitle';
			$scope.preflang = $translate.use();
			$scope.tours = Tours.query();
		};

		$scope.findTour = function(tourId) {
				$scope.tour = Tours.get({
				tourId: tourId
			});
		};

		$scope.showTour = function () {
			$scope.value = true;
			ngDialog.open({
				template: '/modules/core/modals/modal.tour-view.html',
				className: 'ngdialog-theme-plain',
				scope: $scope
			});
		};

		$scope.loadMore = function() {
			var last = $scope.tours[$scope.tours.length - 1];
			for(var i = 1; i <= 8; i++) {
				$scope.tours.push(last + i);
			}
		};
		$scope.changeLanguage = function (langKey) {
			$scope.preflang = langKey;
			$translate.use(langKey);
			$scope.formData.language = langKey;
			//console.log('preflang: ' + $scope.preflang);
		};
		$scope.changeDifficultyLevel = function (DiffLevel) {
			$scope.formData.Difficultylevel = DiffLevel;
			//console.log('DiffLevel: ' + DiffLevel);
		};
		// Find existing Tour
		$scope.findOne = function() {
				$scope.action = 'editTour';
				$scope.tour = Tours.get({
				tourId: $stateParams.tourId
			});

			$scope.formData = $scope.tour;
			$scope.formData.leadername = $scope.tour.leadername;
			$scope.colorbg = $scope.formData.colorbg;
			$scope.colorfont = $scope.formData.colorfont;
			$scope.formData.categorytour = $scope.tour.categorytour;
			$scope.categoria.selected = $scope.tour.categorytour;
			//$scope.categoria.selected.name = $scope.tour.categorytour;
			$scope.formData.difficultylevel = $scope.tour.difficultylevel;
			$scope.formData.language = $scope.tour.language;

		};

		$scope.showGridBottomSheet = function($event) {
			$scope.alert = '';
			$mdBottomSheet.show({
				templateUrl: '/modules/tours/views/bottom-sheet-grid-template.html',
				controller: 'GridBottomSheetController',
				targetEvent: $event
			}).then(function(clickedItem) {
				$scope.alert = clickedItem.name + ' clicked!';
			});
		};

		//$anchorScroll();

		// Find next product created
		// db.products.find({_id: {$gt: ObjectId("4fdbaf608b446b0477000142") }}).limit(1)
	}
]);

'use strict';

angular.module('tours').filter('tourCategory', [
	function() {
		return function (tours, selectedTourCategory) {
        if (!angular.isUndefined(tours) && !angular.isUndefined(selectedTourCategory) && selectedTourCategory.length > 0) {
            var tempTours = [];
            angular.forEach(selectedTourCategory, function (translateId) {
                angular.forEach(tours, function (tour) {
                    if (angular.equals(tour.categorytour, translateId)) {
                        tempTours.push(tour);
                    }
                });
            });
            return tempTours;
        } else {
            return tours;
        }
    };
	}
]);

'use strict';

angular.module('tours').filter('tourDifflevel', [
	function() {
		return function (tours, selectedTourDiffLevel) {
        if (!angular.isUndefined(tours) && !angular.isUndefined(selectedTourDiffLevel) && selectedTourDiffLevel.length > 0) {
            var tempTours = [];
            angular.forEach(selectedTourDiffLevel, function (translateId) {
                angular.forEach(tours, function (tour) {
                    if (angular.equals(tour.difficultylevel, translateId)) {
                        tempTours.push(tour);
                    }
                });
            });
						//console.log('diffLevel: ' + translateId);
            return tempTours;
        } else {
            return tours;
        }
    };
	}
]);

'use strict';

angular.module('tours').filter('tourDuration', [
	function() {
		return function (tours, values) {
        var filtered = [];

        for (var i = 0; i < tours.length; i++) {
            var tour = tours[i];
            if (tour.duration >= values.low && tour.duration <= values.high ) {
                filtered.push(tour);
            }
        }
        return filtered;
    };
	}
]);

'use strict';

//Tours service used to communicate Tours REST endpoints
angular.module('tours').factory('Tours', ['$resource',
	function($resource) {
		return $resource('tours/:tourId', {
			tourId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('/');
								break;
							case 403:
								// Add unauthorized behaviour
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);

'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('accounts-list', {
			url: '/settings/accounts/list',
			templateUrl: 'modules/users/views/settings/accounts-list.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);

'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$rootScope', '$modal', '$http', '$location', 'Authentication', 'ngDialog', '$translate', '$locale',
	function($scope, $rootScope, $modal, $http, $location, Authentication, ngDialog, $translate, $locale) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		//if ($scope.authentication.user) $location.path('/#!/bookings/create');


		$scope.modalSignup = function () {
			$rootScope.theme = 'ngdialog-theme-plain';
			ngDialog.openConfirm({
				controller: 'AuthenticationController',
				template: '/modules/users/views/authentication/modal-signup.client.view.html',
				className: 'ngdialog-theme-plain',
				closeByDocument: true,
				closeByEscape: true
			});
		};

		$scope.signup = function() {

			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;
				//ngDialog.close();
				// And redirect to the booking page
			 $location.path('/bookings/create');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		//$scope.language = $locale.id;

		//$scope.changeLanguage = function (lang) {
		//	$scope.locale = $translate.use(lang);
		//	$scope.language = lang;

		//};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;
				//ngDialog.close();
				// And redirect to the booking page
				$location.path('/bookings/create');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);

'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;
		$scope.w = window.innerWidth;
		$scope.h = window.innerHeight-20;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;
				//ngDialog.close();

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);

'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$rootScope', '$modal', '$http', '$location', 'Users', 'Authentication', 'ngDialog',
	function($scope, $rootScope, $modal, $http, $location, Users, Authentication, ngDialog) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid){
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Countries
		$scope.clear = function() {
			$scope.country.selected = undefined;
		};

		$scope.country = {};
		$scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
			{name: 'Afghanistan', code: 'AF'},
			{name: 'Åland Islands', code: 'AX'},
			{name: 'Albania', code: 'AL'},
			{name: 'Algeria', code: 'DZ'},
			{name: 'American Samoa', code: 'AS'},
			{name: 'Andorra', code: 'AD'},
			{name: 'Angola', code: 'AO'},
			{name: 'Anguilla', code: 'AI'},
			{name: 'Antarctica', code: 'AQ'},
			{name: 'Antigua and Barbuda', code: 'AG'},
			{name: 'Argentina', code: 'AR'},
			{name: 'Armenia', code: 'AM'},
			{name: 'Aruba', code: 'AW'},
			{name: 'Australia', code: 'AU'},
			{name: 'Austria', code: 'AT'},
			{name: 'Azerbaijan', code: 'AZ'},
			{name: 'Bahamas', code: 'BS'},
			{name: 'Bahrain', code: 'BH'},
			{name: 'Bangladesh', code: 'BD'},
			{name: 'Barbados', code: 'BB'},
			{name: 'Belarus', code: 'BY'},
			{name: 'Belgium', code: 'BE'},
			{name: 'Belize', code: 'BZ'},
			{name: 'Benin', code: 'BJ'},
			{name: 'Bermuda', code: 'BM'},
			{name: 'Bhutan', code: 'BT'},
			{name: 'Bolivia', code: 'BO'},
			{name: 'Bosnia and Herzegovina', code: 'BA'},
			{name: 'Botswana', code: 'BW'},
			{name: 'Bouvet Island', code: 'BV'},
			{name: 'Brazil', code: 'BR'},
			{name: 'British Indian Ocean Territory', code: 'IO'},
			{name: 'Brunei Darussalam', code: 'BN'},
			{name: 'Bulgaria', code: 'BG'},
			{name: 'Burkina Faso', code: 'BF'},
			{name: 'Burundi', code: 'BI'},
			{name: 'Cambodia', code: 'KH'},
			{name: 'Cameroon', code: 'CM'},
			{name: 'Canada', code: 'CA'},
			{name: 'Cape Verde', code: 'CV'},
			{name: 'Cayman Islands', code: 'KY'},
			{name: 'Central African Republic', code: 'CF'},
			{name: 'Chad', code: 'TD'},
			{name: 'Chile', code: 'CL'},
			{name: 'China', code: 'CN'},
			{name: 'Christmas Island', code: 'CX'},
			{name: 'Cocos (Keeling) Islands', code: 'CC'},
			{name: 'Colombia', code: 'CO'},
			{name: 'Comoros', code: 'KM'},
			{name: 'Congo', code: 'CG'},
			{name: 'Congo, The Democratic Republic of the', code: 'CD'},
			{name: 'Cook Islands', code: 'CK'},
			{name: 'Costa Rica', code: 'CR'},
			{name: 'Cote D\'Ivoire', code: 'CI'},
			{name: 'Croatia', code: 'HR'},
			{name: 'Cuba', code: 'CU'},
			{name: 'Cyprus', code: 'CY'},
			{name: 'Czech Republic', code: 'CZ'},
			{name: 'Denmark', code: 'DK'},
			{name: 'Djibouti', code: 'DJ'},
			{name: 'Dominica', code: 'DM'},
			{name: 'Dominican Republic', code: 'DO'},
			{name: 'Ecuador', code: 'EC'},
			{name: 'Egypt', code: 'EG'},
			{name: 'El Salvador', code: 'SV'},
			{name: 'Equatorial Guinea', code: 'GQ'},
			{name: 'Eritrea', code: 'ER'},
			{name: 'Estonia', code: 'EE'},
			{name: 'Ethiopia', code: 'ET'},
			{name: 'Falkland Islands (Malvinas)', code: 'FK'},
			{name: 'Faroe Islands', code: 'FO'},
			{name: 'Fiji', code: 'FJ'},
			{name: 'Finland', code: 'FI'},
			{name: 'France', code: 'FR'},
			{name: 'French Guiana', code: 'GF'},
			{name: 'French Polynesia', code: 'PF'},
			{name: 'French Southern Territories', code: 'TF'},
			{name: 'Gabon', code: 'GA'},
			{name: 'Gambia', code: 'GM'},
			{name: 'Georgia', code: 'GE'},
			{name: 'Germany', code: 'DE'},
			{name: 'Ghana', code: 'GH'},
			{name: 'Gibraltar', code: 'GI'},
			{name: 'Greece', code: 'GR'},
			{name: 'Greenland', code: 'GL'},
			{name: 'Grenada', code: 'GD'},
			{name: 'Guadeloupe', code: 'GP'},
			{name: 'Guam', code: 'GU'},
			{name: 'Guatemala', code: 'GT'},
			{name: 'Guernsey', code: 'GG'},
			{name: 'Guinea', code: 'GN'},
			{name: 'Guinea-Bissau', code: 'GW'},
			{name: 'Guyana', code: 'GY'},
			{name: 'Haiti', code: 'HT'},
			{name: 'Heard Island and Mcdonald Islands', code: 'HM'},
			{name: 'Holy See (Vatican City State)', code: 'VA'},
			{name: 'Honduras', code: 'HN'},
			{name: 'Hong Kong', code: 'HK'},
			{name: 'Hungary', code: 'HU'},
			{name: 'Iceland', code: 'IS'},
			{name: 'India', code: 'IN'},
			{name: 'Indonesia', code: 'ID'},
			{name: 'Iran, Islamic Republic Of', code: 'IR'},
			{name: 'Iraq', code: 'IQ'},
			{name: 'Ireland', code: 'IE'},
			{name: 'Isle of Man', code: 'IM'},
			{name: 'Israel', code: 'IL'},
			{name: 'Italy', code: 'IT'},
			{name: 'Jamaica', code: 'JM'},
			{name: 'Japan', code: 'JP'},
			{name: 'Jersey', code: 'JE'},
			{name: 'Jordan', code: 'JO'},
			{name: 'Kazakhstan', code: 'KZ'},
			{name: 'Kenya', code: 'KE'},
			{name: 'Kiribati', code: 'KI'},
			{name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
			{name: 'Korea, Republic of', code: 'KR'},
			{name: 'Kuwait', code: 'KW'},
			{name: 'Kyrgyzstan', code: 'KG'},
			{name: 'Lao People\'s Democratic Republic', code: 'LA'},
			{name: 'Latvia', code: 'LV'},
			{name: 'Lebanon', code: 'LB'},
			{name: 'Lesotho', code: 'LS'},
			{name: 'Liberia', code: 'LR'},
			{name: 'Libyan Arab Jamahiriya', code: 'LY'},
			{name: 'Liechtenstein', code: 'LI'},
			{name: 'Lithuania', code: 'LT'},
			{name: 'Luxembourg', code: 'LU'},
			{name: 'Macao', code: 'MO'},
			{name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
			{name: 'Madagascar', code: 'MG'},
			{name: 'Malawi', code: 'MW'},
			{name: 'Malaysia', code: 'MY'},
			{name: 'Maldives', code: 'MV'},
			{name: 'Mali', code: 'ML'},
			{name: 'Malta', code: 'MT'},
			{name: 'Marshall Islands', code: 'MH'},
			{name: 'Martinique', code: 'MQ'},
			{name: 'Mauritania', code: 'MR'},
			{name: 'Mauritius', code: 'MU'},
			{name: 'Mayotte', code: 'YT'},
			{name: 'Mexico', code: 'MX'},
			{name: 'Micronesia, Federated States of', code: 'FM'},
			{name: 'Moldova, Republic of', code: 'MD'},
			{name: 'Monaco', code: 'MC'},
			{name: 'Mongolia', code: 'MN'},
			{name: 'Montserrat', code: 'MS'},
			{name: 'Morocco', code: 'MA'},
			{name: 'Mozambique', code: 'MZ'},
			{name: 'Myanmar', code: 'MM'},
			{name: 'Namibia', code: 'NA'},
			{name: 'Nauru', code: 'NR'},
			{name: 'Nepal', code: 'NP'},
			{name: 'Netherlands', code: 'NL'},
			{name: 'Netherlands Antilles', code: 'AN'},
			{name: 'New Caledonia', code: 'NC'},
			{name: 'New Zealand', code: 'NZ'},
			{name: 'Nicaragua', code: 'NI'},
			{name: 'Niger', code: 'NE'},
			{name: 'Nigeria', code: 'NG'},
			{name: 'Niue', code: 'NU'},
			{name: 'Norfolk Island', code: 'NF'},
			{name: 'Northern Mariana Islands', code: 'MP'},
			{name: 'Norway', code: 'NO'},
			{name: 'Oman', code: 'OM'},
			{name: 'Pakistan', code: 'PK'},
			{name: 'Palau', code: 'PW'},
			{name: 'Palestinian Territory, Occupied', code: 'PS'},
			{name: 'Panama', code: 'PA'},
			{name: 'Papua New Guinea', code: 'PG'},
			{name: 'Paraguay', code: 'PY'},
			{name: 'Peru', code: 'PE'},
			{name: 'Philippines', code: 'PH'},
			{name: 'Pitcairn', code: 'PN'},
			{name: 'Poland', code: 'PL'},
			{name: 'Portugal', code: 'PT'},
			{name: 'Puerto Rico', code: 'PR'},
			{name: 'Qatar', code: 'QA'},
			{name: 'Reunion', code: 'RE'},
			{name: 'Romania', code: 'RO'},
			{name: 'Russian Federation', code: 'RU'},
			{name: 'Rwanda', code: 'RW'},
			{name: 'Saint Helena', code: 'SH'},
			{name: 'Saint Kitts and Nevis', code: 'KN'},
			{name: 'Saint Lucia', code: 'LC'},
			{name: 'Saint Pierre and Miquelon', code: 'PM'},
			{name: 'Saint Vincent and the Grenadines', code: 'VC'},
			{name: 'Samoa', code: 'WS'},
			{name: 'San Marino', code: 'SM'},
			{name: 'Sao Tome and Principe', code: 'ST'},
			{name: 'Saudi Arabia', code: 'SA'},
			{name: 'Senegal', code: 'SN'},
			{name: 'Serbia and Montenegro', code: 'CS'},
			{name: 'Seychelles', code: 'SC'},
			{name: 'Sierra Leone', code: 'SL'},
			{name: 'Singapore', code: 'SG'},
			{name: 'Slovakia', code: 'SK'},
			{name: 'Slovenia', code: 'SI'},
			{name: 'Solomon Islands', code: 'SB'},
			{name: 'Somalia', code: 'SO'},
			{name: 'South Africa', code: 'ZA'},
			{name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
			{name: 'Spain', code: 'ES'},
			{name: 'Sri Lanka', code: 'LK'},
			{name: 'Sudan', code: 'SD'},
			{name: 'Suriname', code: 'SR'},
			{name: 'Svalbard and Jan Mayen', code: 'SJ'},
			{name: 'Swaziland', code: 'SZ'},
			{name: 'Sweden', code: 'SE'},
			{name: 'Switzerland', code: 'CH'},
			{name: 'Syrian Arab Republic', code: 'SY'},
			{name: 'Taiwan, Province of China', code: 'TW'},
			{name: 'Tajikistan', code: 'TJ'},
			{name: 'Tanzania, United Republic of', code: 'TZ'},
			{name: 'Thailand', code: 'TH'},
			{name: 'Timor-Leste', code: 'TL'},
			{name: 'Togo', code: 'TG'},
			{name: 'Tokelau', code: 'TK'},
			{name: 'Tonga', code: 'TO'},
			{name: 'Trinidad and Tobago', code: 'TT'},
			{name: 'Tunisia', code: 'TN'},
			{name: 'Turkey', code: 'TR'},
			{name: 'Turkmenistan', code: 'TM'},
			{name: 'Turks and Caicos Islands', code: 'TC'},
			{name: 'Tuvalu', code: 'TV'},
			{name: 'Uganda', code: 'UG'},
			{name: 'Ukraine', code: 'UA'},
			{name: 'United Arab Emirates', code: 'AE'},
			{name: 'United Kingdom', code: 'GB'},
			{name: 'United States', code: 'US'},
			{name: 'United States Minor Outlying Islands', code: 'UM'},
			{name: 'Uruguay', code: 'UY'},
			{name: 'Uzbekistan', code: 'UZ'},
			{name: 'Vanuatu', code: 'VU'},
			{name: 'Venezuela', code: 'VE'},
			{name: 'Vietnam', code: 'VN'},
			{name: 'Virgin Islands, British', code: 'VG'},
			{name: 'Virgin Islands, U.S.', code: 'VI'},
			{name: 'Wallis and Futuna', code: 'WF'},
			{name: 'Western Sahara', code: 'EH'},
			{name: 'Yemen', code: 'YE'},
			{name: 'Zambia', code: 'ZM'},
			{name: 'Zimbabwe', code: 'ZW'}
		];
	}
]);

'use strict';

angular.module('users').directive('gravatarImage', [
	function() {
		return {
			restrict: 'AE',
			replace: true,
			required: 'email',
			template: '<img ng-src="https://www.gravatar.com/avatar/{{hash}}?s={{size}}&d=identicon" />',
			link: function (scope, element, attrs) {
				attrs.$observe('email', function (value) {
					if(!value) { return; }

						// MD5 (Message-Digest Algorithm) by WebToolkit
						var md5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d));}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H);}if(I|d){if(x&1073741824){return(x^3221225472^F^H);}else{return(x^1073741824^F^H);}}else{return(x^F^H);}}function r(d,F,k){return(d&F)|((~d)&k);}function q(d,F,k){return(d&k)|(F&(~k));}function p(d,F,k){return(d^F^k);}function n(d,F,k){return(F^(d|(~k)));}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F);}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F);}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F);}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F);}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++;}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa;}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2);}return k;}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x);}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128);}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128);}}}return d;}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g);}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase();};

						scope.hash = md5(value.toLowerCase());
						scope.size = attrs.size;

						if(angular.isUndefined(scope.size)) {
							scope.size = 60; // default to 60 pixels
						}
					});
			}
		};
	}
]);

'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [

	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);

'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
