var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function find (){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}
module.exports = find;