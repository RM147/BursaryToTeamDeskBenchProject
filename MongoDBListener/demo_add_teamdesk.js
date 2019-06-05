var authtoken = "D2726E2C4E584B93876110EDD0279FF8";
var axios = require('axios');
var CryptoJS = require("crypto-js");

var recordID = "5cf695cf5409b825fcebce58";
var recordName = CryptoJS.AES.decrypt("U2FsdGVkX19aHHlbPzeID5I2yBaG1+Z5EhYxoPwKlTA=", '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);
var recordAdress = CryptoJS.AES.decrypt("U2FsdGVkX1+evxjXnnEjC9wZ6nqwSBNSo7K3BXlUw6I=", '9ZQsIE2mLQ5a').toString(CryptoJS.enc.Utf8);


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