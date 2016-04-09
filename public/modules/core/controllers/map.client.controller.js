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
