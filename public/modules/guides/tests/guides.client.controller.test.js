'use strict';

(function() {
	// Guides Controller Spec
	describe('Guides Controller Tests', function() {
		// Initialize global variables
		var GuidesController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Guides controller.
			GuidesController = $controller('GuidesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Guide object fetched from XHR', inject(function(Guides) {
			// Create sample Guide using the Guides service
			var sampleGuide = new Guides({
				name: 'New Guide'
			});

			// Create a sample Guides array that includes the new Guide
			var sampleGuides = [sampleGuide];

			// Set GET response
			$httpBackend.expectGET('guides').respond(sampleGuides);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.guides).toEqualData(sampleGuides);
		}));

		it('$scope.findOne() should create an array with one Guide object fetched from XHR using a guideId URL parameter', inject(function(Guides) {
			// Define a sample Guide object
			var sampleGuide = new Guides({
				name: 'New Guide'
			});

			// Set the URL parameter
			$stateParams.guideId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/guides\/([0-9a-fA-F]{24})$/).respond(sampleGuide);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.guide).toEqualData(sampleGuide);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Guides) {
			// Create a sample Guide object
			var sampleGuidePostData = new Guides({
				name: 'New Guide'
			});

			// Create a sample Guide response
			var sampleGuideResponse = new Guides({
				_id: '525cf20451979dea2c000001',
				name: 'New Guide'
			});

			// Fixture mock form input values
			scope.name = 'New Guide';

			// Set POST response
			$httpBackend.expectPOST('guides', sampleGuidePostData).respond(sampleGuideResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Guide was created
			expect($location.path()).toBe('/guides/' + sampleGuideResponse._id);
		}));

		it('$scope.update() should update a valid Guide', inject(function(Guides) {
			// Define a sample Guide put data
			var sampleGuidePutData = new Guides({
				_id: '525cf20451979dea2c000001',
				name: 'New Guide'
			});

			// Mock Guide in scope
			scope.guide = sampleGuidePutData;

			// Set PUT response
			$httpBackend.expectPUT(/guides\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/guides/' + sampleGuidePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid guideId and remove the Guide from the scope', inject(function(Guides) {
			// Create new Guide object
			var sampleGuide = new Guides({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Guides array and include the Guide
			scope.guides = [sampleGuide];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/guides\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleGuide);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.guides.length).toBe(0);
		}));
	});
}());