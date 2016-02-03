var app = angular.module("lineageApp.services", []);

app.factory("Tree", function($resource, $routeParams, $location) {
   return $resource("/api/lineages/:id", {id: "@_id"});
   // return $resource("/api/lineages/:id", {id: treeID});
});




app.factory("Tree_Show", function($resource, $routeParams) {
   console.log("In - Tree_Show (factory)");

   return $resource("/api/lineages/:id", {id: "@_id"});
});




app.factory("Person", function($resource) {
   return $resource("/api/persons/:id", {id: "@_id"});
});
