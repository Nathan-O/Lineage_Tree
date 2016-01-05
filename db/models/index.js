var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/lineage_app", function(){
   //  mongoose.connection.db.dropDatabase();
   // mongoose.connection.db.lineage_app.dropIndex({username: 1});
   console.log("-- DB Connected --");
});

module.exports = {
   Tree: require("./tree"),
   Person: require("./person")
};
