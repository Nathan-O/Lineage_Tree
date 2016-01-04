var app = angular.module("lineageApp.controllers", []);

app.controller("mainCtrl", function($scope, $window) {
   $scope.user = $window.user;
});


app.controller("lineageCtrl", function($scope, Tree) {
   $scope.tree = {};
   $scope.createTree= function() {
      Tree.save($scope.tree,
         function(data) {
            $scope.trees.push(data);
         },
         function(data) {
            alert("Opps, there was a problem saving your lineage");
         }
      );
   };
});
