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
