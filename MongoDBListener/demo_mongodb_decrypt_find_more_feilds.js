var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var CryptoJS = require("crypto-js");

let SingleRecord;

 function find (){
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("mydb");
		
		dbo.collection("customers").find({}).toArray(function(err, results) {
			results.map(result => {
			let forename = CryptoJS.AES.decrypt(result.firstName, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let surname = CryptoJS.AES.decrypt(result.surName, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let gender = CryptoJS.AES.decrypt(result.gender, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let uni = CryptoJS.AES.decrypt(result.university, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let degree = CryptoJS.AES.decrypt(result.degree, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let startDate = CryptoJS.AES.decrypt(result.startDate, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let endDate = CryptoJS.AES.decrypt(result.endDate, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let intake = CryptoJS.AES.decrypt(result.intake, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8); 
			let tech = CryptoJS.AES.decrypt(result.tech, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8); 
			let email = CryptoJS.AES.decrypt(result.email, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let emailbusiness = CryptoJS.AES.decrypt(result.emailbusiness, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let mobile = CryptoJS.AES.decrypt(result.mobile, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let geoflex = CryptoJS.AES.decrypt(result.geoflex, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let securityClearance = CryptoJS.AES.decrypt(result.securityClearance, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			let statusinfo = CryptoJS.AES.decrypt(result.statusinfo, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
			  
			  
			  console.log(
			  'forename : ' + forename + 
			  ', surname : ' + surname + 
			  ", gender : " + gender +
			  ", uni : " + uni +
			  ", degree : " + degree +
			  ", startDate : " + startDate + 
			  ", endDate : " + endDate + 
			  ", intake : " + intake +
			  ", tech : " + tech +
			  ", emailbusiness : " + emailbusiness +
			  ", email : " + email +
			  ", mobile : " + mobile +
			  ", geoflex : " + geoflex +
			  ", securityClearance : " + securityClearance +
			  ", status : " + statusinfo); 			  
			  })
			})
		  if (err) throw err;
		  db.close();
		});
}

find();

module.exports = find; 