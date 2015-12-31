var app = angular.module("lineageApp.controllers", []);

app.controller("mainCtrl", function($scope, $window) {
   $scope.user = $window.user;
});
