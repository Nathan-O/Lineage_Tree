// var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var Tree = require("./../models").Tree;

// Index all family trees
module.exports.index = function (req, res) {
   Tree.find({}, function (err, trees) {
      res.json(trees);
   });
};

// module.exports.show = function(req, res) {
//    //
// };

module.exports.create = function(req, res) {
   var treeData = req.body;
   console.log(treeData);
   var newTree = new Tree({familyName: treeData.familyName});

   newTree.save(function(err, savedTree) {
      if (err) {
         console.log(" --  Error!!  -- ");
         console.log(err);
         res.status(422).send(err);
      } else {
         console.log("Saved!");
         res.json(savedTree);
      }
   });
};

// module.exports.update = function(req, res) {
//    //
// };

// module.exports.destroy = function(req, res) {
//    //
// };

/*
Create
Read (show)
Update (edit)
Destroy (delete)
*/
