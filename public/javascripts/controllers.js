var app = angular.module("lineageApp.controllers", []);

app.controller("mainCtrl", function($scope, $window) {
   $scope.user = $window.user;
});




app.controller("lineageShowCtrl", function($scope, Tree, Tree_Show, $location, $routeParams) {
   console.log("SHOW CTRL");

   var target = $routeParams.id;

   Tree_Show.get({id: target}, function(data) {
      console.log("FULL CIRCLE");
      console.log(data);

      $scope.lineage = data;
   });
});








app.controller("lineageIndexCtrl", function($scope, Tree, Tree_Show, $location, $routeParams) {

   Tree.query(
      function(data) {
         $scope.trees = data;
      },
      function(data) {
         $location.path("/");
      }
   );

   // Tree.get({id: },
   // Tree.get(
   //    function(data) {
   //       console.log($scope);
   //       data.forEach(function(tree){
   //          console.log(line);
   //          // if (line.id === ) {
   //          //    return line;
   //          // }
   //       });
   //    }
   // );
   $scope.lineage = {};

   // $scope.lineProfile = function(line) {
   //    console.log("SHOW CTRL");
   //    console.log("_____ LINE _____");
   //    console.log(line);
   //
   //    console.log("_____ PARAM _____");
   //    console.log($routeParams);
   //
   //    Tree_Show.get({id: line._id}, function(data) {
   //       console.log("FULL CIRCLE");
   //       console.log(data);
   //
   //       $scope.lineage = data;
   //       // $window.location.href = "/lineage/:id";
   //       $location.path("/lineage/" + {id: line._id});
   //
   //    });
   // };

   $scope.deleteLineage = function(tree) {
      Tree.delete({id: tree._id});
      var index = $scope.trees.indexOf(tree);
      $scope.trees.splice(index, 1);
   };
});









app.controller("lineageCtrl", function($scope, Tree, Tree_Show, $location, $routeParams) {
   $scope.tree = {};
   $scope.line = {};
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

   // $scope, Tree, $location, $routeParams

   // $scope.lineProfile = function() {
   //    console.log("SHOW CTRL");
   //    Tree_Show.get({id: $routeParams.id}, function(data) {
   //       console.log("FULL CIRCLE");
   //       console.log(data);
   //
   //       $scope.line = data;
   //
   //    });
   // };
});


/*
NOTE: FOR TOMORROW:

 - Look up data visualization. How can I render
   the family and family members in a tree form?

 - What do I need to do to add a person to a family?
   In the family show page? Have an ADD A MEMBER BUTTON?
   That would mean the best way to flow the sight would
   be to redirect after User clicks "Create Family" I
   also need to figure out how to presist the family
   last name to the person (unless the User changes the
   name manually).

 - How do I show family relationships? So far I have
   an idea of drop boxes under marked fields (i.e. a
   drop down box labeled "Siblings" and has a list of
   family members. Choose all that apply then when the
   list gets sent to the back end iterate through and
   push them to the Sibling association KEY).
*/







app.controller("personCtrl", function($scope, Person, $routeParams) {
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
