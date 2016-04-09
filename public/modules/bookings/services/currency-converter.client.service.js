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
