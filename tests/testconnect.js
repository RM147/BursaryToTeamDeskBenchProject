const assert = require("assert");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

describe("MongoDB Connection Test", function () {
  it("checks if you can connect to MongoDB", function () 
  {
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  db.close();
});
  })
})
