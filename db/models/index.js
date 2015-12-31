var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/lineage_app", function(){
   //  mongoose.connection.db.dropDatabase();
   console.log("-- DB Connected --");
});

module.exports = {};


// module.exports = {
//    User: require("./user"),
//    Post: require("./post")
// };
