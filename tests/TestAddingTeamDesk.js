const assert = require("assert");
const AddRecordsToTeamDesk = require("../MongoDBListener/demo_add_teamdesk.js");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

describe("TeamDesk Adding Test", function () {
  it("checks if you can add to TeamDesk", function () 
  {
    console.log(AddRecordsToTeamDesk());
  })
})
