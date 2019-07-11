var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var CryptoJS = require("crypto-js");

var myobj;

function add(){

let hex = CryptoJS.enc.Hex.parse("253D3FB468A0E24677C28A624BE0F939");
let iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  console.log("Adding");
  
  var myobj = { 
		firstName: CryptoJS.AES.encrypt("John",'9ZQsIE2mLQ5a').toString(),
		surName: CryptoJS.AES.encrypt("Smith",'9ZQsIE2mLQ5a').toString(),
		gender: CryptoJS.AES.encrypt("Male",'9ZQsIE2mLQ5a').toString(),
		university: CryptoJS.AES.encrypt("University INC",'9ZQsIE2mLQ5a').toString(),
		degree: CryptoJS.AES.encrypt("Computer Stuff",'9ZQsIE2mLQ5a').toString(),
		startDate: CryptoJS.AES.encrypt("2019-08-10T00:00:00+00:00",'9ZQsIE2mLQ5a').toString(),
		endDate: CryptoJS.AES.encrypt("2019-08-10T00:00:00+00:00",'9ZQsIE2mLQ5a').toString(),
		intake: CryptoJS.AES.encrypt("Intake 647",'9ZQsIE2mLQ5a').toString(),
		tech: CryptoJS.AES.encrypt("Java",'9ZQsIE2mLQ5a').toString(),
		emailbusiness: CryptoJS.AES.encrypt("JohnSmith@Gmail.com",'9ZQsIE2mLQ5a').toString(), 
		email: CryptoJS.AES.encrypt("JDogz@Cross.com",'9ZQsIE2mLQ5a').toString(), 
		mobile: CryptoJS.AES.encrypt("01136536783",'9ZQsIE2mLQ5a').toString(), 
		geoflex: CryptoJS.AES.encrypt("Yes",'9ZQsIE2mLQ5a').toString(), 
		securityClearance: CryptoJS.AES.encrypt("BaPddddSS",'9ZQsIE2mLQ5a').toString(), 
		statusinfo : CryptoJS.AES.encrypt("Consultant",'9ZQsIE2mLQ5a').toString()
		};	
		console.log(myobj);
		
    dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

return myobj;
}
add();
module.exports = add;
