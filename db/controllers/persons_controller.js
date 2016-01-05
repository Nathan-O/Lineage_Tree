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

module.exports.create = function(req, res) {
   var personData = req.body;
   var newPerson = new Person({}); // <-- ADD INFO

   newPerson.save(function(err, person) {
      if (err) {
         console.log(err);
         res.status(422).send(err);
      } else {
         res.json(person);
      }
   });
};




/*
Create
Read (show)
Update (edit)
Destroy (delete)
*/
