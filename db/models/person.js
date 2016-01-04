var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");
var familyTree = require("./tree");

var PersonSchema = new Schema({
   firstName: String,
   lastName: {type: String, default: familyTree.familyName},
   parents: [{ type: Schema.Types.ObjectId, ref: Person }],
   spouses: [{ type: Schema.Types.ObjectId, ref: Person }],
   siblings: [{ type: Schema.Types.ObjectId, ref: Person }],
   children: [{ type: Schema.Types.ObjectId, ref: Person }],
   dateCreated: {type: Date, default: Date.now()}
});

PersonSchema.plugin(passportLocalMongoose);

var Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
