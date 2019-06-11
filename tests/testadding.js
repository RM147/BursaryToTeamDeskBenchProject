const assert = require("assert");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Adding Test", function () {
  it("checks if item can be added to MongoDB", function () {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = { name: "Joshua Gomersall", address: "WoodLane 453 " };
      dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) {
          assert.equal(true, false);
        }
        else {
          assert.equal(true, true);
          console.log("1 document inserted");
          db.close();
        }
      });
    });
  });
});
