angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $location, $ionicLoading, $ionicPopup) {
  $scope.doRefresh = function() {
    $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticias')
     .success(function(newItems) {
       $scope.noticias  = res.data;  
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
         
          
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticias')
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.noticias  = res.data;              
                });  
 
         
        $scope.go = function(path){
         console.log(path);
          $location.url('#/tab'+path);
        }

})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
 
  $scope.chat = Chats.get($stateParams.idNoticia);
})

.controller('Internas', function($scope, $stateParams, Chats) {
  console.log('teste');
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
