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
   $scope.showPersonForm = false;

   $scope.createTree = function() {
      console.log("Saving...");
      Tree.save($scope.tree,
         function(data) {
            console.log("Tree Saved");
            $scope.newTree = data;
            console.log($scope.newTree);

            $scope.showFamilyNameForm = false;
            $scope.showPersonForm = true;

         },
         function(data) {
            console.log("Didn't Save");
            console.log(data);
            alert("Opps, there was a problem saving your lineage");
         }
      );
      $scope.tree = {};
   };

   $scope.show = function($scope, Tree, $location) {
      Tree.get($scope.tree, function(data) {
         console.log("FULL CIRCLE");
      });
   };
});

app.controller("personCtrl", function($scope, Person) {
   $scope.person = {};
   $scope.newPerson = {};
   // $scope.showFamilyNameForm = true;
   // $scope.showPersonForm = false;

   $scope.createPerson = function() {
      console.log("Saving...");
      Person.save($scope.person,
         function(data) {
            console.log("Person Saved");
            $scope.newPerson = data;
            console.log($scope.newPerson);
         },
         function(data) {
            console.log("Didn't Save");
            console.log(data);
            alert("Opps, there was a problem saving the person");
         }
      );
      $scope.person = {};
   };
});
