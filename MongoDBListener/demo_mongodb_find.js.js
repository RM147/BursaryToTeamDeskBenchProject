var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var CryptoJS = require("crypto-js");

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.collection("customers").find({}).toArray(function(err, result) {
	let name = CryptoJS.AES.decrypt(result[0].name, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
	let address = CryptoJS.AES.decrypt(result[0].address, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
	console.log("Name: "+ name + " Address: " + address);
    if (err) throw err;
    console.log(result[0]);
    db.close();
  });
});
