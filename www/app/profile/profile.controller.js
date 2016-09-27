angular
.module('profile.controller', [])
.controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl($state, $cordovaCamera, $ionicModal, $scope, Auth) {
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
      }, function(err) {
      // error
    });

    }, false);

  };
}
