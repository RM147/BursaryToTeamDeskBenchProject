
var axios = require('axios');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var authtoken = "D2726E2C4E584B93876110EDD0279FF8";


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



var loopCount = 0;

var PriorSingleRecord = "PriorTestTest";
var priorRecordID = "PriorTest"
var SingleRecord = "TestRecord";
var recordID = "Test";
var recordName = "Test";
var recordAdress = "Test";


var timerCheck = 60000;

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

								//console.log(result[i]);
								SingleRecord = JSON.stringify(result[i]);
								//console.log("ID");
								//console.log(SingleRecord);
								SingleRecord = SingleRecord.replace("{", "");
								SingleRecord = SingleRecord.replace("}", "");
								//console.log(SingleRecord);
								SingleRecord = SingleRecord.replace(/"/g, "");
								//console.log(SingleRecord);
								var words = SingleRecord.split(',');
								//console.log(words[0]);
								var wordsID = words[0].split(':')
								//console.log(wordsID);
								recordID = wordsID[1];
								var wordsName = words[1].split(':')
								//console.log(wordsName);
								recordName = wordsName[1];
								var wordsAdress = words[2].split(':')
								//console.log(wordsAdress);
								recordAdress = wordsAdress[1];


								if (JSON.stringify(databaseinfo[i]) == undefined) {

									console.log("The Record Was Added");
									addedRecords.push(result[i]);
									AddRecordsToTeamDesk();

								}
								else if (JSON.stringify(result[i]) == undefined) {

									console.log("The Record Was Removed");
									deletedRecords.push(databaseinfo[i]);
									RemoveRecordsFromTeamDesk();
								}
								else {

									PriorSingleRecord = JSON.stringify(databaseinfo[i]);
									console.log("OLD RECORD");
									console.log(PriorSingleRecord);
									PriorSingleRecord = PriorSingleRecord.replace("{", "");
									PriorSingleRecord = PriorSingleRecord.replace("}", "");
									console.log(PriorSingleRecord);
									PriorSingleRecord = PriorSingleRecord.replace(/"/g, "");
									console.log(PriorSingleRecord);
									var Priorwords = PriorSingleRecord.split(',');
									console.log(Priorwords [0]);
									var priorwordsID = Priorwords[0].split(':')
									console.log(priorwordsID);
									priorRecordID = priorwordsID[1];

									console.log("OLD ID");
									console.log(priorwordsID);
									console.log("New ID");
									console.log(wordsID);
									console.log("The Record Was Changed");
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
						console.log("Changed Rows " + changedRecords);
						console.log("Added Rows " + addedRecords);
						console.log("Removed Rows " + deletedRecords);
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
	axios.post("https://www.teamdesk.net/secure/api/v2/66139/" + authtoken + "/Account/create.json",
		{
			"Id": "" + recordID,
			"Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
			"_id": "" + recordID,
			"name": "" + recordName,
			"address": "" + recordAdress
		})
		.then(res => { let result5 = res.data; console.log(result5); })
	console.log(i);
}

function UpdateRecordsToTeamDesk() {
	
	axios.get("https://www.teamdesk.net/secure/api/v2/66139/"
		+ authtoken
		+ "/Account/delete.json?match=_id&key="
		+ priorRecordID)
		.then(res => { let result5 = res.data; console.log(result5); })
	console.log("Removed Record At Id " + i)
	
	axios.post("https://www.teamdesk.net/secure/api/v2/66139/" + authtoken + "/Account/create.json",
		{
			"Id": "" + recordID,
			"Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
			"_id": "" + recordID,
			"name": "" + recordName,
			"address": "" + recordAdress
		})
		.then(res => { let result5 = res.data; console.log(result5); })
	console.log(i);

}

function RemoveRecordsFromTeamDesk() {
	axios.get("https://www.teamdesk.net/secure/api/v2/66139/"
		+ authtoken
		+ "/Account/delete.json?match=_id&key="
		+ recordID)

		.then(res => { let result5 = res.data; console.log(result5); })
	console.log("Removed Record At Id " + i)
}

myFunction();
