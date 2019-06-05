var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function add(){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  var myobj2 = { name: "Company I", address: "HighSay 73" };
  
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
  dbo.collection("customers").insertOne(myobj2, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
}
module.exports = add;
