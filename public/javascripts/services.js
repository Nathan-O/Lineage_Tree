var app = angular.module("lineageApp.services", []);

app.factory("Tree", function($resource, $routeParams, $location) {
   return $resource("/api/lineages/:id", {id: "@_id"});
   // return $resource("/api/lineages/:id", {id: treeID});
});




app.factory("Tree_Show", function($resource, $routeParams) {

   // var Lines = $resource("/api/lineages/:id", {id: "@_id"}).forEach(function(data) {
   //    console.log(data);
   // });

   // var line = Lines.get({id: $routeParams.id}, function() {
   //    console.log(line);
   // });
   var line;

   // Tree_Show.get = function(id) {
   //    var lineID = parseInt(id);
   //    Lines.forEach(function(line) {
   //       console.log(line);
   //       if (line.id === lineID) {
   //          return line;
   //       }
   //    });
   // };
   // console.log($routeParams);
   // var treeID;
   // console.log($location);
   var treeID = $routeParams.id;

   // if ($routeParams.id === null || $routeParams.id === undefined) {
   //    console.log("NO...NO CAN HAZ ID...");
   // } else if ($routeParams.id !== null || $routeParams.id !== undefined) {
   //    console.log("CAN HAZ ID");
   //    treeID = $routeParams.id;
   // }
   console.log("In - Tree_Show (factory)");
   console.log($routeParams.id);
   // console.log($routeParams);

   // console.log(Lines);
   // return Lines;

   return $resource("/api/lineages/:id", {id: "@_id"});
   // return $resource("/api/lineages/:id", {id: "@_id"}, {
   //    // query: {method:'GET', params: {}, isArray: true},
   //    get: {method: "GET", params: {id: "@_id"}, isArray: false}
   //  });
});




app.factory("Person", function($resource) {
   return $resource("/api/persons/:id", {id: "@_id"});
});
