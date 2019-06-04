const assert = require("assert");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mongodblistenererror@gmail.com',
        pass: '1Password!'
      }
    });

	describe("EMAIL Test", function () {
  it("checks if an email has been sent", function () 
  {
    
    var mailOptions = {
      from: 'mongodblistenererror@gmail.com',
      to: 'mongodblistenererror@gmail.com',
      subject: 'Sending Test Email',
      text: 'This is an automated Test'
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        assert.equal(info.accepted , '[ mongodblistenererror@gmail.com ]');
      }
    });
  });
});