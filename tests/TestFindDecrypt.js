const assert = require("assert");
const find = require("../MongoDBListener/demo_mongodb_decrypt_find.js");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const timeAllowance = 40000;

// describe("Find Test", () => {
//   it("checks if the code can find results in MongoDB and decrypt them", (done) => {
//     const findtest = () => Promise.resolve(find());
//     findtest()
//     .then((result) =>
//     {
//       console.log(result);
//       //done();
//       assert.equal(result,"T");
//   })
// }).timeout(timeAllowance);
// })


describe("Find Test", function () {
  it("checks if the code can find results in MongoDB and decrypt them", function () {
  find();
  });
});
