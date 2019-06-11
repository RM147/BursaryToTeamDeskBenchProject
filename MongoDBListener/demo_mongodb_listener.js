
const AddRecordsToTeamDesk2 = require("../MongoDBListener/demo_add_teamdesk.js");
const RemoveRecordsFromTeamDesk2 = require("../MongoDBListener/demo_remove_teamdesk.js");


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


var timerCheck = 20000;

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


								if (JSON.stringify(databaseinfo[i]) == undefined) {

									SingleRecord = JSON.stringify(result[i]);
									SingleRecord = SingleRecord.replace("{", "");
									SingleRecord = SingleRecord.replace("}", "");
									SingleRecord = SingleRecord.replace(/"/g, "");
									var words = SingleRecord.split(',');
									var wordsID = words[0].split(':')
									recordID = wordsID[1];
									var wordsName = words[1].split(':')
									recordName = wordsName[1];
									var wordsAdress = words[2].split(':')
									recordAdress = wordsAdress[1];

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

									SingleRecord = JSON.stringify(result[i]);
									SingleRecord = SingleRecord.replace("{", "");
									SingleRecord = SingleRecord.replace("}", "");
									SingleRecord = SingleRecord.replace(/"/g, "");
									var words = SingleRecord.split(',');
									var wordsID = words[0].split(':')
									recordID = wordsID[1];
									var wordsName = words[1].split(':')
									recordName = wordsName[1];
									var wordsAdress = words[2].split(':')
									recordAdress = wordsAdress[1];


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
	AddRecordsToTeamDesk2(recordID , recordName , recordAdress);
}


function UpdateRecordsToTeamDesk() {
	RemoveRecordsFromTeamDesk2(priorRecordID);

	AddRecordsToTeamDesk2(recordID , recordName , recordAdress);
}

function RemoveRecordsFromTeamDesk() {
	RemoveRecordsFromTeamDesk2(priorRecordID);
}

myFunction();
