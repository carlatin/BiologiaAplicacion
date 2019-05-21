// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state("inicio",{
    url: '/inicio',
    templateUrl:'templates/inicio.html'
  })
  .state("adn",{
    url: '/adn',
    templateUrl:'templates/adn.html'
  })
  .state("agua",{
    url: '/agua',
    templateUrl:'templates/agua.html'
  })
  .state("video",{
    url: '/video',
    templateUrl:'templates/video.html'
  })
  .state("login",{
    url: '/login',
    templateUrl:'templates/login.html'
  })
  .state("registro",{
    url: '/registro',
    templateUrl:'templates/registro.html'
  })
  .state("nutricion",{
    url: '/nutricion',
    templateUrl:'templates/nutricion.html'
  })
  .state("info",{
    url: '/info',
    templateUrl:'templates/info.html'
  })
  .state("juego",{
    url: '/juego',
    controller:'controljuego',
    templateUrl:'templates/juego.html'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/registro');

});
