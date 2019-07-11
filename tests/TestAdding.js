const assert = require("assert");
const add = require("../MongoDBListener/demo_mongodb_insert.js");
const add2 = require("../MongoDBListener/demo_mongodb_insert_rnd.js");
const add3 = require("../MongoDBListener/demo_mongodb_insert_multiple.js");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const timeAllowance = 10000;

describe("Adding One Test", () => {
  it("checks if a single item can be added to MongoDB Within Time Limit", (done) => {
    const adding = () => Promise.resolve(add());
    adding()
    .then((result) =>
    {
      console.log(result);
      done();
      console.log(result);
      assert.equal(result,"T");
  })
})
}).timeout(timeAllowance);


describe("Adding Two Test", () => {
  it("checks if two items can be added to MongoDB Within Time Limit", (done) => {
    const adding = () => Promise.resolve(add2());
    adding()
    .then((result) =>
    {
      console.log(result);
      done();
      console.log(result);
      assert.equal(result,"T");
  })
})
}).timeout(timeAllowance);


describe("Adding Multiple Test", () => {
  it("checks if a s item can be added to MongoDB Within Time Limit", (done) => {
    const adding = () => Promise.resolve(add3());
    adding()
    .then((result) =>
    {
      console.log(result);
      done();
      console.log(result);
      assert.equal(result,"T");
  })
})
}).timeout(timeAllowance);

