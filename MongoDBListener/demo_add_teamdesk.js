const TeamDesk_URL = require("./Config.js").TeamDesk_URL;
var axios = require('axios');

console.log(AddRecordsToTeamDesk('664412' ,"John" , "Smith" , "Male" , "Uni" , "Degreez" , "2019-08-10T00:00:00+00:00" ,"2019-08-10T00:00:00+00:00" , "Intake" , "techz" , "gefesf@qa.com" , "hdwda@JSON.comz" , "33431234" , "YES" , "LOTS OF IT" , "BENCH BOYZ"))

function AddRecordsToTeamDesk(recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo) {

	// recordID = recordID.replace('"',"");
	// recordID = recordID.replace('"',"");
	// recordID = recordID.replace('"',"");

	axios.post(TeamDesk_URL+"/create.json",
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
		.then(res => { let result5 = "User : " + firstName + " " + surname + ", Id : " + recordID +  ", Status : " + res.data[0].status + "<br></br>"; console.log(result5); return result5 })
		.catch(function (error) {  let errorResult = error.response.status;
			if (errorResult == "429") {
				AddRecordsToTeamDesk(recordID, firstName, surname, gender, university, degree, startDate, enddate, intake, tech, emailbusiness, email, mobile, geoflex, security, statusinfo);
			}
			else {
				console.log("WOOOP");
				return result5;
			}
		})
	}

module.exports = AddRecordsToTeamDesk;