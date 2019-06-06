const assert = require("assert");
const find = require("../MongoDBListener/demo_mongodb_decrypt_find.js");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Find Test", function () {
  it("checks if the code can find results in MongoDB and decrypt them", function () {
  find();
  });
});
