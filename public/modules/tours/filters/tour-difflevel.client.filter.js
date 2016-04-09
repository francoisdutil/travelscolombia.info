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
