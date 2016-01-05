var app = angular.module("lineageApp.controllers", []);

app.controller("mainCtrl", function($scope, $window) {
   $scope.user = $window.user;
});

app.controller("lineageIndexCtrl", function($scope, Tree, $location) {
   Tree.query(
   function(data) {
      $scope.trees = data;
   },
   function(data) {
      $location.path("/");
   }
);
});

app.controller("lineageCtrl", function($scope, Tree) {
   $scope.tree = {};
   $scope.createTree = function() {
      console.log("Saving...");
      Tree.save($scope.tree,
         function(data) {
            console.log("Tree Saved");
            $scope.trees.push(data);
         },
         function(data) {
            console.log("Didn't Save");
            console.log(data);
            alert("Opps, there was a problem saving your lineage");
         }
      );
      $scope.tree = {};
   };
});
