var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);


MongoClient.connect(url, function(err ,db) {
  if (err) throw err;
  var dbo = db.db("mydb"); 

  
  
  watchCursor = db.getSiblingDB("mydb");
	
	while (!watchCursor.isEhauted()){
		if(watchCursor.hasNext()){
			printjson(watchCursor.next)
		}
	}
	
});