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
