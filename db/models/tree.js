var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");
var familyMembers = require("./person");

var TreeSchema = new Schema({
   familyName: String,
   members: [{type: Schema.Types.ObjectId, ref: familyMembers}],
   dateCreated: {type: Date, default: Date.now()}
});

// TreeSchema.plugin(passportLocalMongoose);

var Tree = mongoose.model("Tree", TreeSchema);

module.exports = Tree;
