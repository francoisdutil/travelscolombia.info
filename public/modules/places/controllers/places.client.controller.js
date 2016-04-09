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
