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

m_access.controller("re_asaignCtrl", function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/modal_reasign/modal_reasign.html', {

    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: false

  }).then(function(modal) {
    $scope.Modal_Reasign = modal;
  });

  $scope.show = function() {
    $scope.Modal_Reasign.show();
  }
})

m_access.controller("modal_reasignCtrl", function($scope){
  $scope.selectRow = function(){
    $("tr").click(function(){
      console.log("click");
      $(this).addClass("trActive");
    })
  }

})
