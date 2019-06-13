var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://34.245.236.104:27017";
var CryptoJS = require("crypto-js");
const AddRecordsToTeamDesk2 = require("../MongoDBListener/demo_add_teamdesk.js");

function find() {

	MongoClient.connect(url, function (err, db) {
		if (err) throw err;
		var dbo = db.db("trainees");
		dbo.collection("trainees").find({}, { projection: { trainee_password: 0, trainee_account_no: 0, trainee_bank_name: 0, trainee_sort_code: 0, bursary: 0, bursary_amount: 0 ,monthly_expenses:0,  trainee_password_expires: 0 ,  bank_holiday: 0,
		trainee_password_token: 0, trainee_days_worked:0 ,trainee_bench_start_date: 0 , trainee_bench_end_date: 0 , added_By : 0}}).toArray(function (err, results) {
			console.log(results);
			console.log("Find Required Info For Team Desk")
			results.map(result => {
				let recordId = result._id;
				console.log(recordId);
				let forename = CryptoJS.AES.decrypt(result.trainee_fname, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				let surname = CryptoJS.AES.decrypt(result.trainee_lname, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				//let gender = CryptoJS.AES.decrypt(result.gender, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				//let uni = CryptoJS.AES.decrypt(result.university, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				//let degree = CryptoJS.AES.decrypt(result.degree, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				let startDate = CryptoJS.AES.decrypt(result.trainee_start_date, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				let endDate = CryptoJS.AES.decrypt(result.trainee_end_date, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				//let intake = CryptoJS.AES.decrypt(result.intake, '3FJSei8zPx').toString(CryptoJS.enc.Utf8); 
				//let tech = CryptoJS.AES.decrypt(result.tech, '3FJSei8zPx').toString(CryptoJS.enc.Utf8); 
				let email = CryptoJS.AES.decrypt(result.trainee_email, CryptoJS.enc.Hex.parse("253D3FB468A0E24677C28A624BE0F939"), {iv: CryptoJS.enc.Hex.parse("00000000000000000000000000000000")}).toString(CryptoJS.enc.Utf8);
				//let emailbusiness = CryptoJS.AES.decrypt(result.trainee_email, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				//let mobile = CryptoJS.AES.decrypt(result.mobile, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				//let geoflex = CryptoJS.AES.decrypt(result.geoflex, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				//let securityClearance = CryptoJS.AES.decrypt(result.securityClearance, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);
				let statusinfo = CryptoJS.AES.decrypt(result.status, '3FJSei8zPx').toString(CryptoJS.enc.Utf8);

				console.log(
					'forename : ' + forename +
					', surname : ' + surname + 
				//", gender : " + gender +
				//", uni : " + uni +
				//", degree : " + degree +
				", startDate : " + startDate + 
				", endDate : " + endDate + 
				//", intake : " + intake +
				//", tech : " + tech +
				//", emailbusiness : " + emailbusiness +
				", email : " + email +
				//", mobile : " + mobile +
				//", geoflex : " + geoflex +
				//", securityClearance : " + securityClearance +
				", status : " + statusinfo); 

				//recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo
				AddRecordsToTeamDesk2(recordId, forename ,surname ,"Male" ,"Uni" ,"Degree" , startDate ,endDate ,"INTAKE" ,"JAVA" ,"Example@qa.com" , email , "01126367805" , "YES" , "Secure" ,statusinfo)				
			})
		})
		if (err) throw err;
		db.close();
	});
}

find();

module.exports = find; 