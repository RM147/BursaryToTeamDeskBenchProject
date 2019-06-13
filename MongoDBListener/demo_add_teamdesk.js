var authtoken = "C48C1FFD63B045BE83E44D5C1062B7AB";
var axios = require('axios');

AddRecordsToTeamDesk('4' ,"John" , "Smith" , "Male" , "Uni" , "Degreez" , "2019-08-10T00:00:00+00:00" ,"2019-08-10T00:00:00+00:00" , "Intake" , "techz" , "gefesf@qa.com" , "hdwda@JSON.comz" , "33431234" , "YES" , "LOTS OF IT" , "BENCH BOYZ")
							  
function AddRecordsToTeamDesk(recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo) {

	recordID = recordID.replace('"',"");
	recordID = recordID.replace('"',"");
	recordID = recordID.replace('"',"");

	axios.post("https://www.teamdesk.net/secure/api/v2/66383/" + authtoken + "/Trainee%20Consultants/create.json",
		{
			"Id": "" + recordID,
			"Record Owner": "Joe Simmons <joseph.simmons@academytrainee.com>",
			"First Name": "" + firstName,
			"Surname" : "" + surname,
			"University" : "" + university,
			"Degree" : "" + degree,
			"Training Start" : "" + startDate,
			"Training End" : "" + enddate,
			"Cohort" : "" + intake,
			"Personal Email" : "" + email,
			"Mobile" : "" + mobile,
			"Geo Flex" : "" + geoflex,
			"Security Clearence" : "" + security,
			"Employment Status" : "" + statusinfo,
			"id_": "" + recordID,
			"Gender" : "" + gender,
			"Business Email" : "" + emailbusiness,
			"Tech" : "" + tech,
			
		})
		.then(res => { let result5 = res.data; console.log(result5); })
		.catch(function (error) {  let errorResult = error.response.status; console.log(error.response.status);
			if (errorResult == "429") {
				AddRecordsToTeamDesk(recordID , recordName , recordAdress);
			}
			else {
				console.log("WOOOP");
			}
		})
}

module.exports = AddRecordsToTeamDesk;