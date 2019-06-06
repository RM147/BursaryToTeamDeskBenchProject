const assert = require("assert");
const remove = require("../MongoDBListener/demo_drop.js//");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


describe("Removing Test", function () {
  it("checks if item can be removed from MongoDB", function () {
    remove();
  });
});
