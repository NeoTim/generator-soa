'use strict';
(function(){

  var MainCtrl = function ($scope, Thing, $http<% if(filters.socketio) { %>, socket<% } %>) {

    $scope.awesomeThings = [];
    $scope.getThings = getThings;
    <% if(filters.mongoose) { %>$scope.addThing = addThing;
    $scope.deleteThing = deleteThing;<% } %>

    $scope.getThings()
    ////////////////////
    function getThings(){
      Thing.all().then(function (data){
        $scope.awesomeThings = data;<% if(filters.socketio) { %>
        socket.syncUpdates('thing', $scope.awesomeThings);<% } %>
      });
    }
  <% if(filters.mongoose) { %>
    function addThing() {
      if($scope.newThing === '') {
        return;
      }
      $scope.awesomeThings.post({name: $scope.newThing});
      $scope.newThing = '';
    }

    function deleteThing(thing) {
      $scope.awesomeThings.remove(thing);
    };<% } %><% if(filters.socketio) { %>

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });<% } %>
  };

  MainCtrl.$inject = ['$scope', 'Thing', '$http'<% if(filters.socketio) { %>, 'socket'<% } %>];
  angular
    .module('<%= scriptAppName %>')
    .controller('MainCtrl', MainCtrl);
}).call(this);
