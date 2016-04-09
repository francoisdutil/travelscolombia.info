'use strict';

// Milestones controller
angular.module('milestones').controller('MilestonesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Milestones',
	function($scope, $stateParams, $location, Authentication, Milestones) {
		$scope.authentication = Authentication;
		$scope.preflang = $scope.authentication.user.prefLang;
		$scope.intro = true;
		$scope.formData = {};
		$scope.milestone = {};
		$scope.averagePercentCompleted =0;

		$scope.action = 'createMilestone';
		console.log('preflang: ' + $scope.preflang);

		// Create new Milestone
		$scope.create = function() {
			// Create new Milestone object
			var milestone = new Milestones ({
				serviceId: $scope.formData.serviceId,
				isActive: $scope.formData.isActive,
				moduleName: $scope.formData.ModuleName,
				overallStatus: $scope.formData.overallStatus,
				internalNote: $scope.formData.internalNote,
				comment: $scope.formData.comment,
				estimatedDaysWork: $scope.formData.estimatedDaysWork,
				devDiffLevelFactor: $scope.formData.devDiffLevelFactor,
				percentCompleted: $scope.formData.percentCompleted,
				isCompleted: $scope.formData.isCompleted,
				minCost: $scope.formData.minCost,
				hasBeenInvoiced: $scope.formData.hasBeenInvoiced,
				quoteUrl: $scope.formData.quoteUrl,
				invoiceUrl: $scope.formData.invoiceUrl,
				caseStudyUrl: $scope.formData.caseStudyUrl,
				imageUrl: $scope.formData.imageUrl,
				screenShotUrl: $scope.formData.screenShotUrl,
				fisrtDepositPaid: $scope.formData.fisrtDepositPaid,
				secondDepositPaid: $scope.formData.secondDepositPaid,
				balancePaid: $scope.formData.balancedPaid,
				fisrtDepositDate: $scope.formData.fisrtDepositDate,
				secondDepositDate: $scope.formData.secondDepositDate,
				balanceDate: $scope.formData.balanceDate,
				startDate: $scope.formData.startDate,
				approvedDate: $scope.formData.approvedDate,
				publishDate: $scope.formData.publishDate
			});

			// Redirect after save
			milestone.$save(function(response) {
				$location.path('milestones');

				// Clear form fields
				$scope.formData = {};
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Milestone
		$scope.remove = function(milestone) {
			if ( milestone ) {
				milestone.$remove();

				for (var i in $scope.milestones) {
					if ($scope.milestones [i] === milestone) {
						$scope.milestones.splice(i, 1);
					}
				}
			} else {
				$scope.milestone.$remove(function() {
					$location.path('milestones');
				});
			}
		};

		// Update existing Milestone
		$scope.update = function() {
			$scope.action = 'editMilestone';
			var milestone = $scope.milestone;

			milestone.$update(function() {
				$location.path('milestones');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Milestones
		$scope.find = function() {
			$scope.milestones = Milestones.query();
		};

		// Calculate Average
		$scope.averagePercentCompleted = function(){
     	var total = 0;
			var avg = 0;
			var days = 0;
			for (var i = 1; i < $scope.milestones.length -2; i++) {
			      total = total + $scope.milestones[i].percentCompleted;
						days = days + ($scope.milestones[i].estimatedDaysWork * $scope.milestones[i].percentCompleted / 100);
			    }
			avg = total / ($scope.milestones.length-2);
     $scope.averagePercentDone = avg;
		$scope.daysLeft = days;
		};

		// Find existing Milestone
		$scope.findOne = function() {
			$scope.action = 'editMilestone';
			$scope.milestone = Milestones.get({
				milestoneId: $stateParams.milestoneId
			});
			$scope.formData = $scope.milestone;
		};
	}
]);
