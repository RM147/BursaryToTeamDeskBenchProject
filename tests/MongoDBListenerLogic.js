const assert = require("assert");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var olddata = "Test Data";
var newdata = "Test Data";

describe("MongoDBlistener Logic Change", function () {
  it("checks if the listener can find changed records", function () {
    olddata = "Old Data";
    assert.equal(CheckingDifference(), "change found")
  })
})

describe("MongoDBlistener Logic Adding", function () {
  it("checks if the listener can find added records", function () {
    olddata = undefined;
    assert.equal(CheckingDifference(), "add found")
  })
})

describe("MongoDBlistener Logic Remove", function () {
  it("checks if the listener can find deleted records", function () {
    olddata = "Test Data"
    newdata = undefined;
    assert.equal(CheckingDifference(), "remove found")
  })
})

describe("MongoDBlistener Logic Same", function () {
  it("checks if the listener can find differences", function () {
    olddata = "Test Data";
    newdata = "Test Data";
    assert.equal(CheckingDifference(), "no change")
  })
})

describe("MongoDBlistener Logic No DB", function () {
  it("checks if the listener does error handling correctly", function () {
    newdata = "[]";
    assert.equal(CheckingDifference(), "no data found")
  })
})

describe("MongoDBlistener Logic Adding Record To Blank DB", function () {
  it("checks if the listener can find differences between a blank DB and a new one", function () {
    newdata = "Test Data"
    olddata = "";
    assert.equal(CheckingDifference(), "change found");
  })
})

function CheckingDifference() {
  if (newdata == "[]") {
    console.log("no data found");
    return "no data found";
  }
  else {
    if (JSON.stringify(olddata) == JSON.stringify(newdata)) {
      console.log("no change");
      return "no change";
    }
    else if (JSON.stringify(olddata) != JSON.stringify(newdata)) {

      if (JSON.stringify(olddata) == undefined) {
        console.log("add found")
        return "add found";
      }
      else if (JSON.stringify(newdata) == undefined) {
        console.log("remove found")
        return "remove found";
      }
      else {
        console.log("change found")
        return "change found";
      }
    }
  }
}
