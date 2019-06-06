var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var CryptoJS = require("crypto-js");

function add(){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
   var myobj = [
    { 
	name: CryptoJS.AES.encrypt('John','9ZQsIE2mLQ5a').toString(), 
	address:CryptoJS.AES.encrypt('Highway 71','9ZQsIE2mLQ5a').toString()
	},
    { 
	name:CryptoJS.AES.encrypt('Peter','9ZQsIE2mLQ5a').toString(), 
	address: CryptoJS.AES.encrypt('Lowstreet 4','9ZQsIE2mLQ5a').toString() 
	},
    { 
	name:CryptoJS.AES.encrypt('Amy','9ZQsIE2mLQ5a').toString(),
	address:CryptoJS.AES.encrypt('Apple st 652','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('Hannah','9ZQsIE2mLQ5a').toString(), 
	address: CryptoJS.AES.encrypt('Mountain 21','9ZQsIE2mLQ5a').toString() 
	},
    { 
	name:CryptoJS.AES.encrypt('Michael','9ZQsIE2mLQ5a').toString(), 
	address: CryptoJS.AES.encrypt('Valley 345','9ZQsIE2mLQ5a').toString()
	},
    { 
	name:CryptoJS.AES.encrypt('Sandy','9ZQsIE2mLQ5a').toString(), 
	address:CryptoJS.AES.encrypt('Ocean blvd 2','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('Betty','9ZQsIE2mLQ5a').toString(),  
	address: CryptoJS.AES.encrypt('Green Grass 1','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('Richard','9ZQsIE2mLQ5a').toString(), 
	address: CryptoJS.AES.encrypt('Sky st 331','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('Susan','9ZQsIE2mLQ5a').toString(),
	address:CryptoJS.AES.encrypt('One way 98','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('Vicky','9ZQsIE2mLQ5a').toString(),
	address: CryptoJS.AES.encrypt('Yellow Garden 2','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('Ben','9ZQsIE2mLQ5a').toString(),
	address: CryptoJS.AES.encrypt('Park Lane 38','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('William','9ZQsIE2mLQ5a').toString(),
	address: CryptoJS.AES.encrypt('Central st 954','9ZQsIE2mLQ5a').toString()
	},
    { 
	name: CryptoJS.AES.encrypt('Chuck','9ZQsIE2mLQ5a').toString(),
	address: CryptoJS.AES.encrypt('Main Road 989','9ZQsIE2mLQ5a').toString(),
	},
    { 
	name: CryptoJS.AES.encrypt('Viola','9ZQsIE2mLQ5a').toString(),
	address: CryptoJS.AES.encrypt('Sideway 1633','9ZQsIE2mLQ5a').toString(),
	}
  ];
  
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
	console.log(res);
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
}
module.exports = add;