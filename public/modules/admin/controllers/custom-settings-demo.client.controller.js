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
