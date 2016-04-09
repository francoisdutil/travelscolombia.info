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
