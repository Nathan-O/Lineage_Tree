var express = require("express");
var passport = require("passport");
var Person = require("./../models").Person;

// Index all of the persons
module.exports.index = function(req, res) {
   Person.find({}, function(err, persons) {
      res.json(persons);
   });
};
