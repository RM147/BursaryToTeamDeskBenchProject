var authtoken = "D2726E2C4E584B93876110EDD0279FF8";
var axios = require('axios');

var recordID = "Test";
var recordName = "Test";
var recordAdress = "Test";

function AddRecordsToTeamDesk() {
	axios.post("https://www.teamdesk.net/secure/api/v2/66139/" + authtoken + "/Account/create.json",
		{
			"Id": "" + recordID,
			"Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
			"_id": "" + recordID,
			"name": "" + recordName,
			"address": "" + recordAdress
		})
		.then(res => { let result5 = res.data; console.log(result5); result5 = res.status ; console.log(result5);})
}

module.exports = AddRecordsToTeamDesk;