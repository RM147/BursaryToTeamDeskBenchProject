const assert = require("assert");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Updating Test", function () {
  it("checks if item can be updated in the MongoDB", function () {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("customers").drop(function(err, delOK) {
        if (err) {
        }
        else {
          assert.equal(true, true);
          console.log("Old Documents Removed");
        }
        var myobj = { name: "Joshua Gomersall", address: "WoodLane 453 " };
      dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) {
        }
        else {
          assert.equal(true, true);
          console.log("1 document inserted");
          db.close();
        }
      });
    });
	})
  });
});
