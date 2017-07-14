// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var m_access = angular.module('starter', ['ionic'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.views.transition('none');

  $stateProvider

  .state('main_screen', {
    url: '/main_screen',
    templateUrl: 'templates/main_screen/main_screen.html'
  })

  .state('scan_face', {
    url: '/scan_face',
    templateUrl: 'templates/scan_face/scan_face.html',
    controller: "scan_faceCtrl"
  })

  .state('success', {
    url: '/success',
    templateUrl: 'templates/success/success.html',
    controller: "successCtrl"
  })

  .state('failure', {
    url: '/failure',
    templateUrl: 'templates/failure/failure.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login/login.html'
  })

  $urlRouterProvider.otherwise('/main_screen');
})
