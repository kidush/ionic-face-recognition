angular
.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('auth', {
    url: '/',
    templateUrl: 'app/auth/auth.html',
    controller: 'AuthCtrl'
  });

  $urlRouterProvider.otherwise('/');
});