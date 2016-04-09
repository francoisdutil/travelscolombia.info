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
