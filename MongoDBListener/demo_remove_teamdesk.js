var axios = require('axios');
var authtoken = "C48C1FFD63B045BE83E44D5C1062B7AB";


function RemoveRecords (priorRecordID) {
	
	console.log("TEST ")
	console.log(priorRecordID);
	
	priorRecordID=priorRecordID.replace('"',"")
	
axios.get("https://www.teamdesk.net/secure/api/v2/66383/C48C1FFD63B045BE83E44D5C1062B7AB/Trainee%20Consultants/delete.json?match=id_&key=" + priorRecordID)
		.then(res => { let result5 = res.data; console.log(result5); })
		.catch(function (error) {let errorResult = error.response.status; console.log(error.response.status);
		if (errorResult == "429") {
			console.log("FAIL");
			RemoveRecords(priorRecordID);
		}
		else {
			console.log("WOOOP");
		}})
}

module.exports = RemoveRecords;