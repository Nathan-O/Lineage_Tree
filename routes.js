var express = require("express");
var api = express.Router();
var treesCtrl = require("./db/controllers/trees_controller");
var personsCtrl = require("./db/controllers/persons_controller");
/*
NOTE: Also add all controllers that will require routes
EXAMPLE:
var usersCtrl = require("./controllers/users_controller");
*/

// Lineage (Tree) routes
api.get("/api/lineages", treesCtrl.index);
api.post("/api/lineages", treesCtrl.create);
api.get("/api/lineages/:id", treesCtrl.show);
api.delete("/api/lineages/:id", treesCtrl.destroy);

// Person routes
api.post("/api/lineages/:lineageId/persons", personsCtrl.create);

module.exports = api;
