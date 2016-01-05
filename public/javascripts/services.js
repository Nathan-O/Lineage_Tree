var app = angular.module("lineageApp.services", []);

app.factory("Tree", function($resource) {
   console.log("In - Tree (factory)");
   return $resource("/api/lineages/:id", {id: "@_id"});
});


app.factory("Person", function($resource) {
   return $resource("/api/persons/:id", {id: "@_id"});
});
