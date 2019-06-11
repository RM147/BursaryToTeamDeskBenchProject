var authtoken = "D2726E2C4E584B93876110EDD0279FF8";
var axios = require('axios');
var CryptoJS = require("crypto-js");



SaltyBoyz = "9ZQsIE2mLQ5a";
//Cannot read property 'salt' of undefined


function AddRecordsToTeamDesk(recordID , recordName , recordAdress) {

	axios.post("https://www.teamdesk.net/secure/api/v2/66139/" + authtoken + "/Account/create.json",
		{
			"Id": "" + recordID,
			"Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
			"_id": "" + recordID,
			"name": "" + CryptoJS.AES.decrypt(recordName, SaltyBoyz).toString(CryptoJS.enc.Utf8),
			"address": "" + CryptoJS.AES.decrypt(recordAdress, SaltyBoyz).toString(CryptoJS.enc.Utf8),
		})
		.then(res => { let result5 = res.data; console.log(result5); })
		.catch(function (error) {  let errorResult = error.response.status; //console.log(error.response.status);
			if (errorResult == "429") {
				AddRecordsToTeamDesk(recordID , recordName , recordAdress);
			}
			else {
				console.log("WOOOP");
			}
		})
}

module.exports = AddRecordsToTeamDesk;