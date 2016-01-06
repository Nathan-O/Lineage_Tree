// var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var Tree = require("./../models").Tree;

// Index all family trees
module.exports.index = function (req, res) {

   console.log("---------- LOG ----------");
   console.log("TREE DB CTRL - INDEX");
   console.log("-------- END LOG --------");

   Tree.find({}, function (err, trees) {
      res.json(trees);
   });
};

module.exports.show = function(req, res) {

   console.log("---------- LOG ----------");
   console.log("TREE DB CTRL - SHOW");
   console.log("-------- END LOG --------");

   var targetId = req.params.id;

   Tree.findOne({_id: targetId}, function (err, tree) {
      if (err) {
         console.log(" --  Error!!  -- ");
         console.log(err);
         res.status(422).send(err);
      }
      console.log(tree);
      res.json(tree);
   });
};

module.exports.create = function(req, res) {

   console.log("---------- LOG ----------");
   console.log("TREE DB CTRL - CREATE");
   console.log("-------- END LOG --------");

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
//    console.log("---------- LOG ----------");
//    console.log("TREE DB CTRL - INDEX");
//    console.log("-------- END LOG --------");
//
// };

module.exports.destroy = function(req, res) {
   var targetId = req.params.id;

   Tree.findOneAndRemove({_id: targetId}, function(err, delTree) {
      if (err) {
         console.log(" --  !! Delete Error !!  -- ");
         console.log(err);
         res.status(422).send(err);
      }
      res.json(delTree);
   });
};

/*
Create
Read (show)
Update (edit)
Destroy (delete)
*/
