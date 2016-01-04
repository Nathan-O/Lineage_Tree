var app = angular.module("lineageApp.services", []);

app.factory("Tree", function($resource) {
   return $resource("/api/lineages/:id", {id: "@_id"});
});
