'use strict';

//Register 'userListView' componenet
angular.
  module('friendsList').
  component('friendsList', {
    templateUrl: 'app/friends-list/friends-list.template.html',
    //will be passed from other components
    bindings: {
      friends: '<'
    },
    controller: [
      function FriendsListController() {
        var vm = this;
      }
    ]
  });
