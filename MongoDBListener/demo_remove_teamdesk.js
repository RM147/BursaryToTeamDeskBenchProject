var axios = require('axios');
var authtoken = "C48C1FFD63B045BE83E44D5C1062B7AB";


function RemoveRecords (priorRecordID) {
	
	
	
	if (priorRecordID == 'PriorTest' || priorRecordID == null || priorRecordID == undefined)
	{
		console.log("Error");
		return 0;
	}

	priorRecordID=priorRecordID.replace('"',"");
	priorRecordID=priorRecordID.replace('"',"");
	priorRecordID=priorRecordID.replace('"',"");
	priorRecordID=priorRecordID.replace('"',"");
	priorRecordID=priorRecordID.replace('"',"");

	console.log("REMOVING " + priorRecordID);
	
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
		console.log("IT IS REMOVED NOW ")
}

module.exports = RemoveRecords;