var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var CryptoJS = require("crypto-js");

var myobj = { 
  };

function add(){
let hex = CryptoJS.enc.Hex.parse("253D3FB468A0E24677C28A624BE0F939");
let iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  console.log("Adding");
console.log("_id : Default , Name : Aberdeen Inc, Adress : Queen Cross 69");
  var myobj = { 
		name: CryptoJS.AES.encrypt("Aberdeen Inc",'9ZQsIE2mLQ5a').toString(),
		address: CryptoJS.AES.encrypt("Queen Cross 69",'9ZQsIE2mLQ5a').toString() 
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
