'use strict';

angular.module('core').controller('ContactController', ['$scope', '$http',
	function($scope, $log, $http) {
		// Controller Logic
		// ...
		//$scope.toggle = offCanvas.toggle;
		$scope.formData = {};
		$log.doLog = true;

		$scope.processForm = function() {
	    //console.log('Im in the controller');

	    // Trigger validation flag.
	    $scope.submitted = true;

	    $http.post('/#!/contact', {
	        name: $scope.formData.name,
	        email: $scope.formData.email,
	        message: $scope.formData.message
	    }).success(function(data, status, headers, config) {
          if(data.success){
              //$location.path('/contact');
							console.log('message sent succesfully');
          }else {
              //do something about the error
							console.log('Error sending the message');
          }
        });
		};

		// Submit contact form
		$scope.emailSupport = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/sendEmail', $scope.formData).success(function(response) {
				// Show user success message and clear form
				//$scope.formData.name,
				//$scope.formData.email,
				//$scope.formData.message,
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				//$scope.formData = null;
				$scope.error = response.message;
			});
		};
	}
]);
