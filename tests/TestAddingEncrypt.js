const assert = require("assert");

const add = require("../MongoDBListener/demo_mongodb_encrypt_insert");
const add3 = require("../MongoDBListener/demo_mongodb_encrypt_insert_multiple.js");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

describe("Adding One Encryption Test", function () {
  it("checks if a single item can be added to MongoDB after Encryption", function () {
    assert.notEqual(add()),"_id : Default , Name : Aberdeen Inc, Adress : Queen Cross 69";
  });
});

 describe("Adding Test", function () {
   it("checks if multiple items can be added to MongoDB", function () {
     add3();
   });
 });


