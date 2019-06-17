let validate = {};
const validSecurity = ["None", "BPSS", "SC", "DV", "NPPV3"];
const validTech = ["DevOps", "Java", "API Development"];
const emailRegex = /@\w*\.com/;
const QAEmail = /@qa.com/;
const traineeEmail = /@academytrainee.com/;
var CryptoJS = require("crypto-js");

var logMessage;

//emails
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mongodblistenererror@gmail.com',
        pass: '1Password!'
    }
});

//validator(validTest);
//validator(invalidTest);

function validator(firstName , surname,  gender, tech, emailbusiness , email , geoflex, security) {

    let changeCount = 0;
    let changeLog = "";

    if (gender !== "Male" && gender !== "Female") {
        changeLog = changeLog + "We are unable to add the Technoligy as the value " + tech + " is an invalid option. This has been defaulted to invalid <br></br>";
        gender = "Invalid";
        changeCount++;
    }
    if (geoflex !== "Yes" && geoflex !== "No") {
        changeLog = changeLog + "We are unable to add Geo-Flex as the value " + tech + " is an invalid option. This has been defaulted to invalid <br></br>";
        geoflex = "Invalid";
        changeCount++;
    }
    if (!validSecurity.includes(security)) {
        changeLog = changeLog + "We are unable to add the Security Clearance as the value " + security + " is an invalid option. This has been defaulted to invalid <br></br>";
        security = "Invalid";
        changeCount++;
    }
    // if (!validTech.includes(tech)) {
    //     changeLog = changeLog + "We are unable to add the Technoligy as the value " + tech + " is an invalid option. This has been defaulted to invalid <br></br>";
    //     tech = "Invalid";
    //     changeCount++;
    // }

    if (!emailRegex.test(email)) {
        changeLog = changeLog + "We are unable to add the email as the value " + email + " is an invalid email adress. This has been defaulted to invalid <br></br>";
        email = "Invalid";
        changeCount++;
    }
    if (!QAEmail.test(emailbusiness) && !traineeEmail.test(emailbusiness)) {
        changeLog = changeLog + "We are unable to add the buisness email as the value " + emailbusiness + " is an invalid QA Email. This has been defaulted to invalid <br></br>";
        emailbusiness = "Invalid";
        changeCount++;
    }

    //console.log(changeCount);
    //console.log(changeLog);
    logMessage = "Changed Records : " + changeCount + "<br></br> " + "We are unable to add the following information for " + email + " " + firstName + " " + surname + "<br></br>" + changeLog + "<br></br>";
    //console.log(logMessage);

    if (changeCount == "0" || changeCount < 1) {
        "No issues found";
        logMessage = "The User " + firstName + " " + surname + " Using Email " + email +" has been Validated With No Issues </br>";
    }
    else {
        logMessage = "Changed Records : " + changeCount + "<br></br> " + "We are unable to add the following information for " + firstName + " " + surname + "<br></br>"  + " Using Email " + email + "  " + changeLog + "<br></br>";
    }

    let validResult = []

    validResult.push(firstName , surname,  gender, tech, emailbusiness, email, geoflex, security ,logMessage);
    
    return validResult;
    //for testing purposes
}


function sendEmailError(firstName , surname) {
    var mailOptions = {
        from: 'mongodblistenererror@gmail.com',
        to: 'mongodblistenererror@gmail.com',
        subject: 'Validation Warning With Account ' + firstName + " " + surname ,
        html: logMessage,
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function sendEmailValid(firstName , surname) {
    var mailOptions = {
        from: 'mongodblistenererror@gmail.com',
        to: 'mongodblistenererror@gmail.com',
        subject: 'Validation On Account ' + firstName + " " + surname + " Has Been Completed",
        html: "The trainee " + firstName + " " + surname + " has been Validated ",
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = validator;