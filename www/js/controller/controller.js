m_access.controller("successCtrl", function($scope, $state){
  $scope.$on('$ionicView.enter', function() {
    setTimeout(function() {
      $state.go('main_screen');
    }, 2000);
  });
})

m_access.controller("scan_faceCtrl", function($scope, $state){
  $scope.$on('$ionicView.enter', function() {
    setTimeout(function() {
      $state.go('success');
    }, 3000);
  });
})
