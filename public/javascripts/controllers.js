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

   $scope.deleteLineage = function(tree) {
      Tree.delete({id: tree._id});
      var index = $scope.trees.indexOf(tree);
      $scope.trees.splice(index, 1);
   };
});

app.controller("lineageCtrl", function($scope, Tree) {
   $scope.tree = {};
   $scope.newTree = {};
   $scope.showFamilyNameForm = true;

   $scope.createTree = function() {
      console.log("Saving...");
      Tree.save($scope.tree,
         function(data) {
            console.log("Tree Saved");
            $scope.newTree = data;
            console.log($scope.newTree);

            $scope.showFamilyNameForm = false;


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
