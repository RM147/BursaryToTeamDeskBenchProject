var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function add(){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Joshua Gomersall", address: "WoodLane 453 " };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    let message = "1 document inserted";
    return "T";
  });
});
}
module.exports = add;
