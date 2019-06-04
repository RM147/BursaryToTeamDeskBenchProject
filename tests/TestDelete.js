const assert = require("assert");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Removing Test", function () {
  it("checks if item can be removed from MongoDB", function () {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("customers").drop(function(err, delOK) {
        if (err) {
          assert.equal(true, false);
        }
        else {
          assert.equal(true, true);
          console.log("Documents Removed");
          db.close();
        }
      });
    });
  });
});
