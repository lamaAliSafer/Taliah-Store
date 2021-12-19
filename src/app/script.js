
var translationsEN = {
    WELCOME: 'You are our dear partner, not a customer',
    BUTTON_LANG_DE: 'German',
    BUTTON_LANG_EN: 'English'
  };
   
  var translationsDE= {
    WELCOME: 'أنت شريكنا العزيز ولست عميلاً',
    BUTTON_LANG_DE: 'Deutsch',
    BUTTON_LANG_EN: 'Englisch'
  };
  var app = angular.module('myApp', ['ngCookies', 'pascalprecht.translate']);
   
  app.config(['$translateProvider', function ($translateProvider) {
    // add translation tables
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('ar', translationsDE);
    $translateProvider.preferredLanguage('en');
    // remember language
    $translateProvider.useLocalStorage();
  }]);
   
  app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
   
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  }]);
