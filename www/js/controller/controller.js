m_access.controller("successCtrl", function($scope, $state){
  $scope.$on('$ionicView.enter', function() {
    setTimeout(function() {
      $state.go('main_screen');
    }, 2000);
  });
})

m_access.controller("scan_faceCtrl", function($scope, $state){
  // $scope.$on('$ionicView.enter', function() {
  //   setTimeout(function() {
  //     $state.go('success');
  //   }, 3000);
  // });
  //}

})

m_access.controller("re_asignCtrl", function($scope, $ionicModal){

  $scope.reasign1 = true;
  $scope.reasign2 = false;

  $ionicModal.fromTemplateUrl('templates/modal_reasign/modal_reasign.html', {

    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: false

  }).then(function(modal) {
    $scope.Modal_Reasign = modal;
  });

  $scope.show = function() {
    $scope.Modal_Reasign.show();

    $scope.reasign1 = true;
    $scope.reasign2 = false;

    $(".textChooseAccess").html("Elige un acceso para reasignar el dispositivo")

    $(".dotOn").attr("src", "img/dot_on.png");
    $(".dotOff").attr("src", "img/dot_off.png");
  }

  $scope.reasignShowHide = function(){

    $scope.reasign1 = false;
    $scope.reasign2 = true;

    $(".textChooseAccess").html("Verifica el cambio")

    $(".dotOn").attr("src", "img/dot_off.png");
    $(".dotOff").attr("src", "img/dot_on.png");


  }
})

m_access.controller("modal_reasignCtrl", function($scope, $ionicModal){


  $scope.selectRow = function(){
    $("tr").click(function(){
      console.log("click");
      $(this).addClass("trActive");
    })
  }




})
