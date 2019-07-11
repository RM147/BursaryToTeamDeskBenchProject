var MongoClient = require('mongodb').MongoClient;
const url = require("./Config.js").DB_URL;

function find (){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("trainees");
  
  dbo.collection("trainees").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}

find();

module.exports = find;