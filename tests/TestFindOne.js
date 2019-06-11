const assert = require("assert");
const find = require("../MongoDBListener/demo_mongodb_findone.js");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Find One Test", function () {
  it("checks if the code can find a single results in MongoDB", function () {
  find();
  });
});
