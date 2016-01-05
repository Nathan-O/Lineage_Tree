// var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var Person = require("./../models").Person;
                     // "./../db/models"

// Index all of the persons
module.exports.index = function(req, res) {
   Person.find({}, function(err, persons) {
      res.json(persons);
   });
};


/*
Create
Read (show)
Update (edit)
Destroy (delete)
*/
