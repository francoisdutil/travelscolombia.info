'use strict';

angular.module('core').controller('LanguageController', ['$scope', '$rootScope', '$translate', 'tmhDynamicLocale', '$locale',
 function ($scope, $rootScope, $translate, tmhDynamicLocale, $locale) {

    $scope.langMenu = [{
      'title': 'German',
      'countryCode': 'de'
    },
    {
      'title': 'French',
      'countryCode': 'fr'
    },
    {
      'title': 'English',
      'countryCode': 'en'
    },
    {
      'title': 'Spanish',
      'countryCode': 'es'
    }];

    $scope.changeLanguage = function (languageKey) {
      $translate.use(languageKey);
      $rootScope.$locale = $locale;
      $rootScope.changeLocale = tmhDynamicLocale.set(languageKey);
      $rootScope.$locale.id = languageKey;
      //console.log('languageKey: ' + languageKey);
      //console.log('$locale.id: ' + $locale.id);

    };
  }
]);
