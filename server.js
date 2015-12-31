/*
****************
* Requriements *
****************
*/

var express = require("express");
var session = require("express-session");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var path = require("path");
var ejs = require("ejs");
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;

var app = express();
app.set("view engine", "ejs");
var api = require("./routes");
var User = require("./db/models").User;


/*
**************
* Middleware *
**************
*/

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require("express-session")({
   secret: "You'll never know",
   resave: false,
   saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname,"public")));
// config passport
// passport.use(new localStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


/*
**********
* Routes *
**********
*/
// directed to use routes.js for routes
app.use(api);
// index route
app.get(["/", "*"], function(req, res){
   // console.log(req);
   // res.send(
      res.render("index.html.ejs", {user: req.user});
   // );
});

/*
**********
* Server *
**********
*/
app.listen(3000, function(){
   console.log("Make it so...");
});
