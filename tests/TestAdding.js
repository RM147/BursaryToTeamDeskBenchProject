const assert = require("assert");
const add = require("../MongoDBListener/demo_mongodb_insert.js");
const add2 = require("../MongoDBListener/demo_mongodb_insert_rnd.js");
const add3 = require("../MongoDBListener/demo_mongodb_insert_multiple.js");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

describe("Adding One Test", function () {
  it("checks if a single item can be added to MongoDB", function () {
    console.log("Test")
    add();
  });
});

describe("Adding 2 Test", function () {
  it("checks if two items can be added to MongoDB", function () {
    console.log("Test")
    add2();
  });
});

describe("Adding Test", function () {
  it("checks if multiple items can be added to MongoDB", function () {
    console.log("Test")
    add3();
  });
});


