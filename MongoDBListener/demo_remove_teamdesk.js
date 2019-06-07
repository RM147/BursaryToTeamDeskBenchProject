var axios = require('axios');
var authtoken = "D2726E2C4E584B93876110EDD0279FF8";


function RemoveRecords (priorRecordID) {
axios.get("https://www.teamdesk.net/secure/api/v2/66139/"
		+ authtoken
		+ "/Account/delete.json?match=_id&key="
		+ priorRecordID)
		.then(res => { let result5 = res.data; console.log(result5); })
		.catch(function (error) {let errorResult = error.response.status; //console.log(error.response.status);
		if (errorResult == "429") {
			console.log("FAIL");
			RemoveRecords(priorRecordID);
		}
		else {
			console.log("WOOOP");
		}})
}

module.exports = RemoveRecords;