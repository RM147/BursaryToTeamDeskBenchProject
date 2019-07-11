const assert = require("assert");



const tests = require ("./Tests/MongoDBListenerLogic")
const testadd = require("./Tests/TestAdding");
const addtoteamdesk = require("./Tests/TestAddingTeamDesk");
const tests2 = require("./Tests/TestConnect.js");
const testEmail = require("./Tests/TestEmail.js");
const testErrorEmail = require("./Tests/TestErrorEmail.js");
const find = require("./Tests/TestFind");
const findone = require("./Tests/TestFindOne");
const make = require("./Tests/TestMake");
const makeCollection = require("./Tests/TestMakeCollection");
const testupdate = require("./Tests/TestUpdate");

describe("All Test", function () {
  it("All Tests", function () {
    console.log("Test");
  });
});
