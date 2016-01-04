var express = require("express");
var passport = require("passport");
var Tree = require("./../models").Tree;

// Index all family trees
module.exports.index = function (req, res) {
   Tree.find({}, function (err, trees) {
      res.json(trees);
   });
};
