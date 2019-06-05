var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mongodblistenererror@gmail.com',
    pass: '1Password!'
  }
});

var timerCheck = 1000;

function myFunction()
{
var mailOptions = {
  from: 'mongodblistenererror@gmail.com',
  to: 'y149507@nwytg.net',
  subject: 'Sending Email using Node.js',
  text: ':)'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

setTimeout(function () {
	}, timerCheck);
  }
  module.exports = myFunction;