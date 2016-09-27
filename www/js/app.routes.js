angular
.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('auth', {
    url: '/',
    templateUrl: 'app/auth/auth.html',
    controller: 'AuthCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'app/profile/profile.html',
    controller: 'ProfileCtrl'
  });

  $urlRouterProvider.otherwise('/');
});