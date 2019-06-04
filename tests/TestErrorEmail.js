const assert = require("assert");
var nodemailer = require('nodemailer');


var errorMessage = "This is a mock error message";

var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mongodblistenererror@gmail.com',
        pass: '1Password!'
      }
    });

	describe("EMAIL Test", function () {
  it("checks if an error email has been sent", function () 
  {
    var mailOptions = {
      from: 'mongodblistenererror@gmail.com',
      to: 'mongodblistenererror@gmail.com',
      subject: 'Sending Test Email',
      html: 'This is an automated Test' + errorMessage,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
		  info.text;
        console.log('Email sent: ' + info.response);
        assert.equal(info.accepted , '[ mongodblistenererror@gmail.com ]');
      }
    });
  });
});