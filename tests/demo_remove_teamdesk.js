var axios = require('axios');
var authtoken = "D2726E2C4E584B93876110EDD0279FF8";


function RemoveRecords() {
//DELETE
	console.log("https://www.teamdesk.net/secure/api/v2/66139/"
	+authtoken
	+"/Account/delete.json?match=_id&key="
	+"5cf03ea50aee023188ed0fd6")
	
	axios.get("https://www.teamdesk.net/secure/api/v2/66139/"
	+authtoken
	+"/Account/delete.json?match=_id&key="
	+"test")
  
  
	.then( res => {let result5 = res.data;console.log(result5);})
	//.catch( (e) => {  console.log(e.response); });
}

RemoveRecords();