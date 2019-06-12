var authtoken = "C48C1FFD63B045BE83E44D5C1062B7AB";
var axios = require('axios');
var CryptoJS = require("crypto-js");



Salt = "9ZQsIE2mLQ5a";
//Cannot read property 'salt' of undefined

							  
function AddRecordsToTeamDesk(recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo) {

	axios.post("https://www.teamdesk.net/secure/api/v2/66383/" + authtoken + "/Account/create.json",
		{
			"Id": "" + recordID,
			"Record Owner": "Jim Button <balloonjimballoon@gmail.com>",
			"_id": "" + recordID,
			"firstname": "" + firstName,
			"surname" : "" + surname,
			"gender" : "" + gender,
			"university" : "" + university,
			"degree" : "" + degree,
			"startdate" : "" + startDate,
			"enddate" : "" + enddate,
			"intake" : "" + intake,
			"tech" : "" + tech,
			"emailbusiness" : "" + emailbusiness,
			"email" : "" + email,
			"mobile" : "" + mobile,
			"geoflex" : "" + geoflex,
			"security" : "" + security,
			"status" : "" + statusinfo,
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