var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var CryptoJS = require("crypto-js");

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  dbo.collection("customers").find({}).toArray(function(err, results) {
	  results.map(result => {
		let name = CryptoJS.AES.decrypt(result.name, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
		let address = CryptoJS.AES.decrypt(result.address, '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
		console.log('name: ' + name + ', address: ' + address );
		})
	  })
    if (err) throw err;
    db.close();
  });
  
