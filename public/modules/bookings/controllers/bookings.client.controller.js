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
