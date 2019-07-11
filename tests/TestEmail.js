const assert = require("assert");
var nodemailer = require('nodemailer');
const myFunction = require("../MongoDBListener/sendEmail.js");

	describe("EMAIL Test", function () {
  it("checks if an email has been sent", function () 
  {
    myFunction();
  });
});
