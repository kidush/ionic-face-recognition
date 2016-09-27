(function() {
  'use strict';

  angular
  .module('auth.service', [])
  .factory('Auth', Auth);

  function Auth($http) {
    return {
      signup: _signup,
      signin: _signin,
      currentUser: _currentUser
    }

    function _signup(user) {
      return firebase
              .auth()
              .createUserWithEmailAndPassword(user.email, user.password)
    }

    function _signin(user) {
      return firebase
              .auth()
              .signInWithEmailAndPassword(user.email, user.password)
    }

    function _currentUser() {
      return firebase.auth().currentUser;
    }
  }

})();