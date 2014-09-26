;(function(){
'use strict';

angular
  .module('testApp')
  .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$scope', '$location', 'Auth'];
  function NavbarCtrl($scope, $location, Auth) {
    var vm = this;
    vm.menu = [{
      'title': 'Home',
      'link': '/',
      'icon':'fa-home'
    }];

    vm.isCollapsed = true;
    vm.isLoggedIn = Auth.isLoggedIn;
    vm.isAdmin = Auth.isAdmin;
    vm.getCurrentUser = Auth.getCurrentUser;
    vm.logout = logout;
    vm.isActive = isActive;

    function logout() {
      Auth.logout();
      $location.path('/login');
    }

    function isActive(route) {
      return route === $location.path();
    }
  }
}).call(this);