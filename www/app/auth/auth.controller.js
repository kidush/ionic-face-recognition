(function() {
  'use strict';

  angular
  .module('auth.controller', [])
  .controller('AuthCtrl', AuthCtrl);

  function AuthCtrl($state, $ionicModal, $ionicPopup, $scope, Auth) {
    $ionicModal.fromTemplateUrl('app/auth/auth-signup-modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modalSignup = modal;
    });


    $scope.openSignupModal = function() {
      $scope.modalSignup.show();
    }

    $scope.user = {};
    $scope.signUp = function() {
      Auth.signup($scope.user)
      .then(successSignup)
      .catch(errorResponseCallback);

      function successSignup(res) {
        Auth.signin($scope.user)
          .then(successSignIn)
          .catch(errorResponseCallback)

        function successSignIn(res) {
          $state.go('profile');
        }
      }

      function errorResponseCallback(res) {
        $ionicPopup
          .alert({
            title: 'Ops :(',
            template: res.message
          })
      }
    }
  }
})();
