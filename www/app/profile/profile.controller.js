angular
.module('profile.controller', [])
.controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl($state, $cordovaCamera, $ionicModal, $scope, Auth) {
  var storageRef = firebase.storage().ref();
  var avatarRef = storageRef.child('avatar.jpg');

  $scope.addImage = function() {
    document.addEventListener("deviceready", function () {
      var options = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 400,
        targetHeight: 400,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myAvatar');
        image.src = "data:image/jpeg;base64," + imageData;
        avatarRef.putString(imageData, 'base64')
          .then(successUpload)
        function successUpload(snapshot) {
          console.log(snapshot);
        }
      }, function(err) {
      // error
    });

    }, false);

  };
}
