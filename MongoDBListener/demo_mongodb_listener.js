const validator = require("../MongoDBListener/demo_mongodb_valid.js");
const AddRecordsToTeamDesk2 = require("../MongoDBListener/demo_add_teamdesk.js");
const RemoveRecordsFromTeamDesk2 = require("../MongoDBListener/demo_remove_teamdesk.js");

let Salt = "9ZQsIE2mLQ5a";

var axios = require('axios');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var authtoken = "D2726E2C4E584B93876110EDD0279FF8";
var CryptoJS = require("crypto-js");

var errorMessage = "Message 2";

//Used to send error emails 
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'mongodblistenererror@gmail.com',
		pass: '1Password!'
	}
});

var addcount = 0;
var loopCount = 0;

var PriorSingleRecord = "PriorTestTest";
var priorRecordID = "PriorTest"
var SingleRecord = "TestRecord";
var recordID = "Test";
var recordName = "Test";
var recordAdress = "Test";

let firstName;
let surname;
let gender;
let university;
let degree;
let startDate;
let enddate;
let intake;
let tech;
let email;
let emailbusiness;
let mobile;
let geoflex;
let security;
let statusinfo;


var timerCheck = 5000;

var databaseinfo = [];
var addedRecordCount;
var maxRecords;
changedRecordsRowNumber = [];
var changedRecords = [];
var addedRecords = [];
var deletedRecords = [];

var d;
var hour = "23";
var minuites = "59";
var displayMinuites = "59";

var targetTime = "23:59";

//Set Base For Database
MongoClient.connect(url, function (err, db) {
	if (err) {
		errorMessage = "" + err;
		sendErrorEmail();
		console.log('\x1b[41m', 'Error');
		console.log("\x1b[0m", "No Database Info Found");
	}
	var dbo = db.db("mydb");
	dbo.collection("customers").find({}).toArray(function (err, result) {
		databaseinfo = result;
		db.close();
	});
});

function myFunction() {
	// d = new Date();
	// hour = d.getHours();
	// minuites = d.getMinutes();
	if (minuites < 10) {
		displayMinuites = "0" + minuites;
	}
	else {
		displayMinuites = minuites;
	}
	console.log("It is currently : " + hour + ":" + displayMinuites);

	if (targetTime == hour + ":" + displayMinuites) {
		console.log("Start Time Found ,Checking For Changes")

		MongoClient.connect(url, function (err, db) {
			if (err) {
				errorMessage = "" + err;
				sendErrorEmail();
			}

			var dbo = db.db("mydb");
			dbo.collection("customers").find({}).toArray(function (err, result) {
				if (err) {
					errorMessage = "" + err;
					sendErrorEmail();
				}

				if (JSON.stringify(result) == "[]") {
					errorMessage = "No Database Found";
					sendErrorEmail();
					console.log('\x1b[41m', 'Error');
					console.log("\x1b[0m", "No Database Info Found");
				}
				else {
					if (JSON.stringify(databaseinfo) == JSON.stringify(result)) {
						console.log("No Change")
					}

					if (JSON.stringify(databaseinfo) != JSON.stringify(result)) {

						maxRecords = Math.max(result.length, databaseinfo.length)
						console.log(maxRecords);


						for (i = 0; i < maxRecords; i++) {

							if (JSON.stringify(databaseinfo[i]) == JSON.stringify(result[i])) {
								console.log("Record " + i + " Are The Same")
							}
							else if (JSON.stringify(databaseinfo[i]) != JSON.stringify(result[i])) {
								console.log("Record " + i + " Are Not The Same")

								SingleRecord = JSON.stringify(result[i]);
								recordID = JSON.stringify(result[i]._id);
								console.log(recordID);

								firstName = JSON.stringify(result[i].firstName);
								firstName = firstName.replace('"', "")
								firstName = CryptoJS.AES.decrypt(firstName, Salt).toString(CryptoJS.enc.Utf8);
								console.log("first name : " + firstName);

								surname = JSON.stringify(result[i].surName);
								surname = surname.replace('"',"");
								surname = CryptoJS.AES.decrypt(surname, Salt).toString(CryptoJS.enc.Utf8);
								console.log("surname" + surname);

								gender = JSON.stringify(result[i].gender);
								gender = gender.replace('"',"");
								gender = CryptoJS.AES.decrypt(gender, Salt).toString(CryptoJS.enc.Utf8);
								console.log("gender" + gender);

								university = JSON.stringify(result[i].university);
								university = university.replace('"',"");
								university = CryptoJS.AES.decrypt(university, Salt).toString(CryptoJS.enc.Utf8);
								console.log("uni " + university);

								degree = JSON.stringify(result[i].degree);
								degree = degree.replace('"',"");
								degree = CryptoJS.AES.decrypt(degree, Salt).toString(CryptoJS.enc.Utf8);
								console.log("degree " + degree);

								startDate = JSON.stringify(result[i].startDate);
								console.log(startDate);
								startDate = startDate.replace('"',"");
								startDate = CryptoJS.AES.decrypt(startDate, Salt).toString(CryptoJS.enc.Utf8);
								console.log("start " + startDate);

								enddate = JSON.stringify(result[i].endDate);
								enddate = enddate.replace('"',"");
								enddate = CryptoJS.AES.decrypt(enddate, Salt).toString(CryptoJS.enc.Utf8);
								console.log("end " + enddate);

								intake = JSON.stringify(result[i].intake);
								intake = intake.replace('"',"");
								intake = CryptoJS.AES.decrypt(intake, Salt).toString(CryptoJS.enc.Utf8);
								console.log("intake " + intake);

								tech = JSON.stringify(result[i].tech);
								tech = tech.replace('"',"");
								tech = CryptoJS.AES.decrypt(tech, Salt).toString(CryptoJS.enc.Utf8);
								console.log("tech " + tech);

								email = JSON.stringify(result[i].email);
								email = email.replace('"',"");
								email =	CryptoJS.AES.decrypt(email, Salt).toString(CryptoJS.enc.Utf8);
								console.log("email " + email);
								
								emailbusiness = JSON.stringify(result[i].emailbusiness);
								emailbusiness = emailbusiness.replace('"',"");
								emailbusiness = CryptoJS.AES.decrypt(emailbusiness, Salt).toString(CryptoJS.enc.Utf8);
								console.log("buisness email " + emailbusiness);
								
								mobile = JSON.stringify(result[i].mobile);
								mobile = mobile.replace('"',"");
								mobile = CryptoJS.AES.decrypt(mobile, Salt).toString(CryptoJS.enc.Utf8);
								console.log("phone " + mobile);
								
								geoflex = JSON.stringify(result[i].geoflex);
								geoflex = geoflex.replace('"',"");
								geoflex = CryptoJS.AES.decrypt(geoflex, Salt).toString(CryptoJS.enc.Utf8);
								console.log("geo-flex " + geoflex);
								
								security = JSON.stringify(result[i].securityClearance);
								security = security.replace('"',"");
								security = CryptoJS.AES.decrypt(security, Salt).toString(CryptoJS.enc.Utf8);
								console.log("security " + security);
								
								statusinfo = JSON.stringify(result[i].statusinfo);
								statusinfo = statusinfo.replace('"',"");
								statusinfo = CryptoJS.AES.decrypt(statusinfo, Salt).toString(CryptoJS.enc.Utf8);
								console.log("status " + statusinfo);

								if (JSON.stringify(databaseinfo[i]) == undefined) {

									console.log("The Record Was Added");
									addedRecords.push(result[i]);
									AddRecordsToTeamDesk();

								}
								else if (JSON.stringify(result[i]) == undefined) {

									PriorSingleRecord = JSON.stringify(databaseinfo[i]);
									PriorSingleRecord = PriorSingleRecord.replace("{", "");
									PriorSingleRecord = PriorSingleRecord.replace("}", "");
									PriorSingleRecord = PriorSingleRecord.replace(/"/g, "");
									var Priorwords = PriorSingleRecord.split(',');
									var priorwordsID = Priorwords[0].split(':')
									priorRecordID = priorwordsID[1];

									console.log("The Record Was Removed");
									deletedRecords.push(databaseinfo[i]);
									RemoveRecordsFromTeamDesk();
								}
								else {

									PriorSingleRecord = JSON.stringify(databaseinfo[i]);
									PriorSingleRecord = PriorSingleRecord.replace("{", "");
									PriorSingleRecord = PriorSingleRecord.replace("}", "");
									PriorSingleRecord = PriorSingleRecord.replace(/"/g, "");
									var Priorwords = PriorSingleRecord.split(',');
									var priorwordsID = Priorwords[0].split(':')
									priorRecordID = priorwordsID[1];

									changedRecordsRowNumber.push(i);
									changedRecords.push(result[i]);
									UpdateRecordsToTeamDesk();
								}
								console.log("Record Change From ")
								console.log(databaseinfo[i]);
								console.log("To ");
								console.log(result[i]);
							}

						};

						console.log("Changed Rows " + changedRecords.length);
						console.log("Added Rows " + addedRecords.length);
						console.log("Removed Rows " + deletedRecords.length);
						sendCompleteEmail()
					}
					deletedRecords = [];
					addedRecords = [];
					changedRecords = [];
					changedRecordsRowNumber = []
					loopCount = 0;
					databaseinfo = result;
					db.close();
				}
			})
		})
	}
	else {
		console.log("Start Time Not Found ,Will Wait For " + targetTime)
	}
	setTimeout(function () {
		addcount = 0;
		myFunction();
	}, timerCheck);
};

function sendErrorEmail() {
	var mailOptions = {
		from: 'mongodblistenererror@gmail.com',
		to: 'mongodblistenererror@gmail.com, mongodblistenererror@gmail.com',
		subject: 'MongoDBListener Error',
		html: errorMessage,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		console.log("Error : " + errorMessage)
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			console.log("An Email Has Been Sent Regarding The Error");
		}
	});
}

function sendCompleteEmail() {
	var mailOptions2 = {
		from: 'mongodblistenererror@gmail.com',
		to: 'mongodblistenererror@gmail.com, mongodblistenererror@gmail.com',
		subject: 'MongoDBListener Found Changes',
		html: "Add" + JSON.stringify(addedRecords) + "Changed Row Number" + JSON.stringify(changedRecordsRowNumber) + "Changed" + JSON.stringify(changedRecords) + "Removed" + JSON.stringify(deletedRecords),
	};

	transporter.sendMail(mailOptions2, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			console.log("An Email Has Been Sent Regarding The DB Changes");
		}
	});
}


function AddRecordsToTeamDesk() {

	let validatorList = (validator(firstName ,surname ,gender, tech, emailbusiness, email, geoflex, security));
	
	console.log(validatorList);
	
	firstName = validatorList[0];
	surname = validatorList[1];
	gender = validatorList[2];
	tech = validatorList[3];
	emailbusiness = validatorList[4];
	email = validatorList[5];
	geoflex = validatorList[6];
	security = validatorList[7];

	console.log("NOW ADDING")
	

console.log(recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo);

	AddRecordsToTeamDesk2(recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo);
}


function UpdateRecordsToTeamDesk() {

	console.log(priorRecordID);

	RemoveRecordsFromTeamDesk2(priorRecordID);


	let validatorList = (validator(firstName ,surname ,gender, tech, emailbusiness, email, geoflex, security));
	
	console.log(validatorList);

	firstName = validatorList[0];
	surname = validatorList[1];
	gender = validatorList[2];
	tech = validatorList[3];
	emailbusiness = validatorList[4];
	email = validatorList[5];
	geoflex = validatorList[6];
	security = validatorList[7];

	console.log("NOW ADDING")
	AddRecordsToTeamDesk2(recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo);
}

function RemoveRecordsFromTeamDesk() {
	
	RemoveRecordsFromTeamDesk2(priorRecordID);
}

myFunction();
