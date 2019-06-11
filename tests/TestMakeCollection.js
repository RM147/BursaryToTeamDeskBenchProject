const assert = require("assert");
const makecollection = require("../MongoDBListener/demo_mongodb_createcollection.js");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Making Test", function () {
  it("checks if MongoDB Collection can be made", function () {
  makecollection();
  });
});
