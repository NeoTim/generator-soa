'use strict';
(function(){
  angular
    .module('<%= scriptAppName %>')
    .config( account );

  account.$inject = ['$stateProvider'];

  /////////////////////

  function account($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/routes/account/login/login.html',
        controller: 'LoginCtrl as vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/routes/account/signup/signup.html',
        controller: 'SignupCtrl as vm'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/routes/account/settings/settings.html',
        controller: 'SettingsCtrl as vm',
        authenticate: true
      });
  };
}).call(this);
