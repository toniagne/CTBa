// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', '720kb.socialshare'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $compileProvider) {
  
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.dash-actb', {
    url: '/dash/actb',
    views: {
      'tab-dash': {
        templateUrl: 'templates/actb.html',
        controller: 'Internas'
      }
    }
  })



  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.chats-conheca', {
      url: '/chats/conheca',
      views: {
        'tab-chats': {
          templateUrl: 'templates/actb.html',
          controller: 'Internas'
        }
      }
    })
  .state('tab.chats-publicacoes', {
      url: '/chats/publicacoes',
      views: {
        'tab-chats': {
          templateUrl: 'templates/publicacoes.html',
          controller: 'Internas'
        }
      }
    })
  .state('tab.chats-videos', {
      url: '/chats/videos',
      views: {
        'tab-chats': {
          templateUrl: 'templates/videos.html',
          controller: 'Internas'
        }
      }
    })
    .state('tab.chats-contato', {
      url: '/chats/contato',
      views: {
        'tab-chats': {
          templateUrl: 'templates/contato.html',
          controller: 'Contato'
        }
      }
    })
    .state('tab.chats-informacoes', {
      url: '/chats/informacoes',
      views: {
        'tab-chats': {
          templateUrl: 'templates/informacoes.html',
          controller: 'Internas'
        }
      }
    })


    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.dash-vernoticia', {
    url: '/dash/vernoticia/:idNoticia',
    views: {
      'tab-dash': {
        templateUrl: 'templates/vernoticias.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })
 


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.colunista', {
      url: '/colunista',
      views: {
        'tab-colunista': {
          templateUrl: 'templates/tab-colunistas.html',
          controller: 'Colunistas'
        }
      }
    })
  .state('tab.colunista-areatrabalho', {
      url: '/colunista/areatrabalho',
      views: {
        'tab-colunista': {
          templateUrl: 'templates/tab-colunistas-areatrabalho.html',
          controller: 'Colunistas'
        }
      }
    })
  .state('tab.colunista-perfil', {
      url: '/colunista/perfil',
      views: {
        'tab-colunista': {
          templateUrl: 'templates/tab-colunistas-perfil.html',
          controller: 'Colunistas'
        }
      }
    })
  .state('tab.colunista-mensagens', {
      url: '/colunista/mensagens',
      views: {
        'tab-colunista': {
          templateUrl: 'templates/tab-colunistas-mensagens.html',
          controller: 'Colunistas'
        }
      }
    })

.state('tab.account-downloadsvisualizar', {
      url: '/account/downloads/:idDocumento',
      views: {
        'tab-account': {
          templateUrl: 'templates/account-verdownloads.html',
          controller: 'Principal'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
