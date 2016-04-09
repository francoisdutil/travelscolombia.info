'use strict';

angular.module('core').controller(
  'HomeController',
  ['$scope', '$rootScope', '$translate', '$timeout', '$interval', 'VERSION_TAG', '$log', '$http', 'cfpLoadingBar', '$anchorScroll', 'Demodata',
    function ($scope, $rootScope, $translate, $timeout, $interval, VERSION_TAG, $log, $http, cfpLoadingBar, $anchorScroll, Demodata ) {
    /**
     * Cache busting
     */
    $rootScope.VERSION_TAG = VERSION_TAG;


    /**
     * Translations for the view
     */
    var pageTitleTranslationId = 'PAGE_TITLE';
    var pageContentTranslationId = 'PAGE_CONTENT';

    $translate(pageTitleTranslationId, pageContentTranslationId)
      .then(function (translatedPageTitle, translatedPageContent) {
        $rootScope.pageTitle = translatedPageTitle;
        $rootScope.pageContent = translatedPageContent;
      });

    /**
     * $scope.locale
     */
    $scope.locale = $translate.use();

    /**
     * Provides info about current route path
     */
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $scope.currentPath = current.$$route.originalPath;
    });

    /**
     * Current time
     */
    $scope.currentTime = Date.now();
    $interval(function () {
      $scope.currentTime = Date.now();
    }, 1000);

    /**
     * EVENTS
     */
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      $scope.locale = data.language;
      $rootScope.pageTitle = $translate.instant(pageTitleTranslationId);
      $rootScope.pageContent = $translate.instant(pageContentTranslationId);
    });

      $scope.start = function() {
        cfpLoadingBar.start();
      };

      $scope.complete = function () {
        cfpLoadingBar.complete();
      };

      // fake the initial load so first time users can see it right away:
      $scope.start();
      $scope.fakeIntro = true;
      $timeout(function() {
        $scope.complete();
        $scope.fakeIntro = false;
      }, 750);

      $scope.showPanel = false;

      // section-2 slider
      $scope.slideshow = {};
      $scope.slideshow.slides = [
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/playas/3.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/1.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/7.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/3.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/4.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/ciudadPerdida/9.jpg',
        'https://res.cloudinary.com/travelscolombia/image/upload/v1425580301/assets/images/colombia/peninsulaGuajira/5.jpg'
      ];
      var logId = 0;
      $scope.slideshow.log = [];
      $scope.slideshow.start = function(slider){
        //console.log(slider);
        $scope.slideshow.log.push({ id: ++logId, message: 'start' });
      };
      $scope.slideshow.before = function(){
        $scope.slideshow.log.push({ id: ++logId, message: 'before' });
      };
      $scope.slideshow.after = function(){
        $scope.slideshow.log.push({ id: ++logId, message: 'after' });
      };
      $scope.slideshow.end = function () {
        $scope.slideshow.log.push({ id: ++logId, message: 'end' });
      };

      //section-3 map

      // Reload data action
      $scope.load = function() {
        $scope.data = Demodata.getSampleData();
        dataToRemove = undefined;
      };

      $scope.reload = function() {
        $scope.load();
      };

      // Remove data action
      $scope.remove = function() {
        $scope.api.data.remove(dataToRemove);
      };

      // Clear data action
      $scope.clear = function() {
        $scope.data = [];
      };


      $anchorScroll();
    }
]);
