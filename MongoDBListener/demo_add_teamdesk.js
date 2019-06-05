var authtoken = "D2726E2C4E584B93876110EDD0279FF8";
var axios = require('axios');
var CryptoJS = require("crypto-js");

var recordID = "5cf695c9b7a7c94494f4c1f8";
var recordName = CryptoJS.AES.decrypt("U2FsdGVkX185W0rss45RbPyZ2eUaar9aSVl9vnP1fRA=", '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
var recordAdress = CryptoJS.AES.decrypt("U2FsdGVkX18+wPrpRTSEm6z94/BvDiE5qKpnMymZWUw=", '9ZQsIE2m4Pd').toString(CryptoJS.enc.Utf8);


function AddRecordsToTeamDesk() {
	axios.post("https://www.teamdesk.net/secure/api/v2/66139/" + authtoken + "/Account/create.json",
		{
			"Id": "" + recordID,
			"Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
			"_id": "" + recordID,
			"name": "" + recordName,
			"address": "" + recordAdress
		})
		.then(res => { let result5 = res.data; console.log(result5); })
}

AddRecordsToTeamDesk();