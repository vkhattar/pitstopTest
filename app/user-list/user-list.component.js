'use strict';

//Register 'userListView' componenet
angular.
  module('userList').
  component('userList', {
    templateUrl: 'app/user-list/user-list.template.html',
    controller: ['User',
      function UserListController(User) {
        var vm = this;

        vm.$onInit = function () {
          User.getAllUsers().then(
            function(users) {
              vm.users = users;
            }
          ).catch(function(error) {
            console.log(error);
          })
        };
      }
    ]
  });
