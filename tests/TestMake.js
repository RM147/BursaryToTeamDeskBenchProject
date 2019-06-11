const assert = require("assert");
const make = require("../MongoDBListener/demo_create_mongo_db");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Making Test", function () {
  it("checks if MongoDB can be made", function () {
  make();
  });
});
